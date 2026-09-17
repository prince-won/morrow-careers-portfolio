import { ArrowLeft, ArrowRight, Check, MapPin } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { jobs } from "../data/jobs";
import { departmentLabels, employmentTypeLabels, formatExperience, hiringStepLabels } from "../data/labels";

export function JobDetail() {
  const { slug } = useParams<{ slug: string }>();
  const job = jobs.find((candidateJob) => candidateJob.slug === slug);

  if (!job) return <Navigate to="/jobs" replace />;

  return (
    <div className="job-detail-page">
      <Link className="back-link" to="/jobs"><ArrowLeft size={16} aria-hidden="true" />모든 포지션</Link>

      <header className="job-detail-hero">
        <div>
          <p className="eyebrow">{departmentLabels[job.department]} / {employmentTypeLabels[job.employmentType]}</p>
          <h1>{job.title}</h1>
          <p className="job-detail-summary">{job.summary}</p>
          <Link className="primary-button job-apply-button" to={`/jobs/${job.slug}/apply`}>지원하기 <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
        <div className="job-detail-meta" aria-label="포지션 상세 정보">
          <span>{formatExperience(job.experience)}</span>
          <span><MapPin size={15} aria-hidden="true" />{job.location}</span>
        </div>
      </header>

      <div className="job-detail-layout">
        <main className="job-detail-content">
          <section className="job-detail-section job-detail-section-emphasis">
            <p className="section-number">01</p>
            <div>
              <h2>채용 목적</h2>
              <p>{job.whyHiring}</p>
            </div>
          </section>

          <section className="job-detail-section mission-section">
            <p className="section-number">02</p>
            <div>
              <h2>직무 미션</h2>
              <blockquote>{job.mission}</blockquote>
            </div>
          </section>

          <section className="job-detail-section">
            <p className="section-number">03</p>
            <div>
              <h2>주요 업무</h2>
              <ul className="job-bullet-list">
                {job.responsibilities?.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </section>

          <div className="job-requirements-grid">
            <section className="job-detail-section requirement-section">
              <p className="section-number">04</p>
              <div>
                <h2>필수 조건</h2>
                <ul className="job-check-list">
                  {job.mustHave?.map((item) => <li key={item}><Check size={16} aria-hidden="true" />{item}</li>)}
                </ul>
              </div>
            </section>
            <section className="job-detail-section requirement-section">
              <p className="section-number">05</p>
              <div>
                <h2>우대 조건</h2>
                <ul className="job-check-list">
                  {job.niceToHave?.map((item) => <li key={item}><Check size={16} aria-hidden="true" />{item}</li>)}
                </ul>
              </div>
            </section>
          </div>
          <Link className="job-detail-apply-secondary" to={`/jobs/${job.slug}/apply`}>이 포지션에 지원하기 <ArrowRight size={16} aria-hidden="true" /></Link>
        </main>

        <aside className="job-detail-sidebar">
          <div className="process-card">
            <p className="eyebrow">채용 여정</p>
            <h2>채용 과정</h2>
            <ol className="process-list">
              {job.process?.map((step, index) => (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{hiringStepLabels[step.title] ?? step.title}</strong>
                </li>
              ))}
            </ol>
            <Link className="process-card-link" to="/process">채용 과정 전체 보기 <ArrowRight size={15} aria-hidden="true" /></Link>
          </div>
          <Link className="case-study-cta" to="/case-study#job-definition">
            <span>
              <small>Behind this brief</small>
              How this JD was designed
            </span>
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </aside>
      </div>
    </div>
  );
}
