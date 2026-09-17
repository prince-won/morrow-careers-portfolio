import { ChangeEvent, FormEvent, useState } from "react";
import { ArrowLeft, ArrowRight, Check, FileText, MapPin } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { jobs } from "../data/jobs";
import { departmentLabels, employmentTypeLabels, formatExperience } from "../data/labels";

type DocumentMode = "file" | "url";

type ApplyForm = {
  name: string;
  email: string;
  phone: string;
  resumeUrl: string;
  careerUrl: string;
  portfolioUrl: string;
  consent: boolean;
};

type FormErrors = Record<string, string>;

const initialForm: ApplyForm = {
  name: "",
  email: "",
  phone: "",
  resumeUrl: "",
  careerUrl: "",
  portfolioUrl: "",
  consent: false,
};

const isValidUrl = (value: string) => {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

export function ApplyPage() {
  const { slug } = useParams<{ slug: string }>();
  const job = jobs.find((candidateJob) => candidateJob.slug === slug);
  const [form, setForm] = useState<ApplyForm>(initialForm);
  const [resumeMode, setResumeMode] = useState<DocumentMode>("file");
  const [careerMode, setCareerMode] = useState<DocumentMode>("file");
  const [resumeFileName, setResumeFileName] = useState("");
  const [careerFileName, setCareerFileName] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  if (!job) return <Navigate to="/jobs" replace />;

  const updateField = (field: keyof ApplyForm, value: string | boolean) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const updateFileName = (event: ChangeEvent<HTMLInputElement>, type: "resume" | "career") => {
    const fileName = event.target.files?.[0]?.name ?? "";
    if (type === "resume") {
      setResumeFileName(fileName);
      setErrors((current) => ({ ...current, resume: "" }));
    } else {
      setCareerFileName(fileName);
    }
  };

  const changeDocumentMode = (type: "resume" | "career", mode: DocumentMode) => {
    if (type === "resume") setResumeMode(mode);
    else setCareerMode(mode);
    setErrors((current) => {
      const next = { ...current };
      delete next[type];
      delete next[`${type}Url`];
      return next;
    });
  };

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!form.name.trim()) nextErrors.name = "이름을 입력해주세요.";
    if (!form.email.trim()) nextErrors.email = "이메일을 입력해주세요.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "올바른 이메일 주소를 입력해주세요.";
    if (!form.phone.trim()) nextErrors.phone = "연락처를 입력해주세요.";
    else if (!/^[0-9+\-\s()]{7,}$/.test(form.phone.trim())) nextErrors.phone = "올바른 연락처를 입력해주세요.";

    if (resumeMode === "file" && !resumeFileName) nextErrors.resume = "이력서 파일을 선택해주세요.";
    if (resumeMode === "url" && !form.resumeUrl.trim()) nextErrors.resumeUrl = "이력서 URL을 입력해주세요.";
    else if (resumeMode === "url" && !isValidUrl(form.resumeUrl)) nextErrors.resumeUrl = "http 또는 https URL을 입력해주세요.";
    if (form.careerUrl.trim() && !isValidUrl(form.careerUrl)) nextErrors.careerUrl = "http 또는 https URL을 입력해주세요.";
    if (form.portfolioUrl.trim() && !isValidUrl(form.portfolioUrl)) nextErrors.portfolioUrl = "http 또는 https URL을 입력해주세요.";
    if (!form.consent) nextErrors.consent = "개인정보 수집 및 이용에 동의해주세요.";

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="apply-page apply-success-page">
        <div className="apply-success">
          <p className="eyebrow">지원서 작성 완료</p>
          <h1>지원 흐름을 끝까지 확인했습니다.</h1>
          <p>이 화면은 Morrow Recruiting Case Study의 지원 경험을 보여주기 위한 Demo입니다. 입력한 정보는 실제로 전송되거나 저장되지 않았습니다.</p>
          <div className="apply-success-actions">
            <Link className="primary-button" to="/jobs">채용 포지션으로 돌아가기 <ArrowRight size={17} aria-hidden="true" /></Link>
            <Link className="outline-button" to="/process">채용 과정 보기 <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="apply-page">
      <Link className="back-link" to={`/jobs/${job.slug}`}><ArrowLeft size={16} aria-hidden="true" />포지션 상세로 돌아가기</Link>

      <header className="apply-hero">
        <div>
          <p className="eyebrow">지원자 화면 / 지원서</p>
          <h1>{job.title}</h1>
          <div className="apply-job-meta" aria-label="지원 포지션 정보">
            <span>{departmentLabels[job.department]}</span>
            <span>{formatExperience(job.experience)}</span>
            <span>{employmentTypeLabels[job.employmentType]}</span>
            <span><MapPin size={15} aria-hidden="true" />{job.location}</span>
          </div>
        </div>
        <div className="apply-hero-copy">
          <h2>지원서 작성</h2>
          <p>지원에 필요한 기본 정보와 제출 서류를 작성해주세요.</p>
          <p className="apply-demo-notice">Morrow는 Recruiting Portfolio를 위해 만든 가상의 회사입니다. 이 지원서는 실제로 접수되지 않습니다.</p>
        </div>
      </header>

      <div className="apply-layout">
        <form className="apply-form" onSubmit={handleSubmit} noValidate>
          <section className="apply-form-section" aria-labelledby="basic-info-title">
            <div className="apply-section-heading">
              <span>01</span>
              <div>
                <p className="eyebrow">기본 정보</p>
                <h2 id="basic-info-title">연락 가능한 정보를 알려주세요.</h2>
              </div>
            </div>
            <div className="apply-fields-grid">
              <div className="apply-field">
                <label htmlFor="apply-name">이름 <span>*</span></label>
                <input id="apply-name" type="text" value={form.name} onChange={(event) => updateField("name", event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "apply-name-error" : undefined} autoComplete="name" />
                {errors.name && <p className="apply-field-error" id="apply-name-error" role="alert">{errors.name}</p>}
              </div>
              <div className="apply-field">
                <label htmlFor="apply-email">이메일 <span>*</span></label>
                <input id="apply-email" type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "apply-email-error" : undefined} autoComplete="email" />
                {errors.email && <p className="apply-field-error" id="apply-email-error" role="alert">{errors.email}</p>}
              </div>
              <div className="apply-field apply-phone-field">
                <label htmlFor="apply-phone">연락처 <span>*</span></label>
                <div className="apply-phone-input">
                  <select id="country-code" defaultValue="+82" aria-label="국가 코드">
                    <option value="+82">KR +82</option>
                  </select>
                  <input id="apply-phone" type="tel" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "apply-phone-error" : undefined} autoComplete="tel" />
                </div>
                {errors.phone && <p className="apply-field-error" id="apply-phone-error" role="alert">{errors.phone}</p>}
              </div>
            </div>
          </section>

          <section className="apply-form-section" aria-labelledby="documents-title">
            <div className="apply-section-heading">
              <span>02</span>
              <div>
                <p className="eyebrow">제출 서류</p>
                <h2 id="documents-title">경험을 확인할 수 있는 자료를 제출해주세요.</h2>
              </div>
            </div>

            <div className="apply-document-list">
              <div className="apply-document-field">
                <div className="apply-field-title"><label>이력서 <span>*</span></label><small>PDF / DOC / DOCX</small></div>
                <div className="apply-tabs" role="group" aria-label="이력서 제출 방식">
                  <button type="button" className={resumeMode === "file" ? "is-active" : ""} onClick={() => changeDocumentMode("resume", "file")} aria-pressed={resumeMode === "file"}>파일</button>
                  <button type="button" className={resumeMode === "url" ? "is-active" : ""} onClick={() => changeDocumentMode("resume", "url")} aria-pressed={resumeMode === "url"}>URL</button>
                </div>
                {resumeMode === "file" ? (
                  <label className={`apply-file-picker ${errors.resume ? "has-error" : ""}`} htmlFor="resume-file">
                    <FileText size={18} aria-hidden="true" />
                    <span>{resumeFileName || "파일을 선택해주세요."}</span>
                    <input id="resume-file" type="file" accept=".pdf,.doc,.docx" onChange={(event) => updateFileName(event, "resume")} />
                  </label>
                ) : (
                  <input id="resume-url" className={errors.resumeUrl ? "has-error" : ""} type="url" placeholder="https://" value={form.resumeUrl} onChange={(event) => updateField("resumeUrl", event.target.value)} aria-invalid={Boolean(errors.resumeUrl)} />
                )}
                {errors.resume && <p className="apply-field-error" role="alert">{errors.resume}</p>}
                {errors.resumeUrl && <p className="apply-field-error" role="alert">{errors.resumeUrl}</p>}
              </div>

              <div className="apply-document-field">
                <div className="apply-field-title"><label>경력기술서</label><small>선택 사항</small></div>
                <div className="apply-tabs" role="group" aria-label="경력기술서 제출 방식">
                  <button type="button" className={careerMode === "file" ? "is-active" : ""} onClick={() => changeDocumentMode("career", "file")} aria-pressed={careerMode === "file"}>파일</button>
                  <button type="button" className={careerMode === "url" ? "is-active" : ""} onClick={() => changeDocumentMode("career", "url")} aria-pressed={careerMode === "url"}>URL</button>
                </div>
                {careerMode === "file" ? (
                  <label className="apply-file-picker" htmlFor="career-file">
                    <FileText size={18} aria-hidden="true" />
                    <span>{careerFileName || "파일을 선택해주세요."}</span>
                    <input id="career-file" type="file" accept=".pdf,.doc,.docx" onChange={(event) => updateFileName(event, "career")} />
                  </label>
                ) : (
                  <input id="career-url" type="url" placeholder="https://" value={form.careerUrl} onChange={(event) => updateField("careerUrl", event.target.value)} aria-invalid={Boolean(errors.careerUrl)} />
                )}
                {errors.careerUrl && <p className="apply-field-error" role="alert">{errors.careerUrl}</p>}
              </div>

              <div className="apply-document-field">
                <div className="apply-field-title"><label htmlFor="portfolio-url">포트폴리오</label><small>선택 사항</small></div>
                <input id="portfolio-url" type="url" placeholder="https://" value={form.portfolioUrl} onChange={(event) => updateField("portfolioUrl", event.target.value)} aria-invalid={Boolean(errors.portfolioUrl)} />
                <p className="apply-helper-text">관련 작업을 확인할 수 있는 링크가 있다면 함께 제출해주세요.</p>
                {errors.portfolioUrl && <p className="apply-field-error" role="alert">{errors.portfolioUrl}</p>}
              </div>
            </div>
          </section>

          <section className="apply-form-section" aria-labelledby="privacy-title">
            <div className="apply-section-heading">
              <span>03</span>
              <div>
                <p className="eyebrow">개인정보 동의</p>
                <h2 id="privacy-title">입력한 정보의 사용 범위를 확인해주세요.</h2>
              </div>
            </div>
            <div className="apply-privacy-box">
              <p>수집 항목: 이름, 이메일, 연락처, 제출 서류</p>
              <p>이용 목적: 채용 절차 진행을 가정한 Portfolio Demo</p>
              <p>보유 기간: 실제 저장되지 않음</p>
              <p className="apply-privacy-note">입력한 정보는 서버 또는 데이터베이스에 저장되지 않습니다.</p>
            </div>
            <label className={`apply-consent ${errors.consent ? "has-error" : ""}`} htmlFor="apply-consent">
              <input id="apply-consent" type="checkbox" checked={form.consent} onChange={(event) => updateField("consent", event.target.checked)} aria-invalid={Boolean(errors.consent)} />
              <span>개인정보 수집 및 이용에 동의합니다. <b>*</b></span>
            </label>
            {errors.consent && <p className="apply-field-error" role="alert">{errors.consent}</p>}
          </section>

          <div className="apply-submit-row">
            <p>이 지원서는 Portfolio Demo이며 실제로 제출되지 않습니다.</p>
            <button className="primary-button" type="submit">지원서 제출 <ArrowRight size={17} aria-hidden="true" /></button>
          </div>
        </form>

        <aside className="apply-summary-panel" aria-label="지원서 작성 안내">
          <p className="eyebrow">지원 포지션</p>
          <h2>{job.title}</h2>
          <p>{job.summary}</p>
          <div className="apply-summary-rule" />
          <p className="eyebrow">작성 단계</p>
          <ol className="apply-step-list">
            <li><span>01</span><strong>기본 정보</strong></li>
            <li><span>02</span><strong>제출 서류</strong></li>
            <li><span>03</span><strong>개인정보 동의</strong></li>
          </ol>
          <div className="apply-summary-note"><Check size={15} aria-hidden="true" />입력한 정보는 이 화면을 벗어나면 사라집니다.</div>
        </aside>
      </div>
    </div>
  );
}
