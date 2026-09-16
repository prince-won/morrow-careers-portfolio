import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { candidates, getCandidateAlias } from "../data/candidates";
import { bottleneckInsight, sourcePerformance } from "../data/analytics";
import { hiringJourney, candidatePromises } from "../data/hiringProcess";
import { productManagerJob } from "../data/jobs";
import { hiringStepLabels } from "../data/labels";

const approachFlow = [
  "채용 필요 정의",
  "직무 정의",
  "지원자 경험",
  "채용 운영",
  "채용 분석",
  "프로세스 개선",
];

const representativeQuestions = [
  { label: "Why", question: "왜 지금 채용하는가?" },
  { label: "Mission", question: "입사 후 해결할 문제는 무엇인가?" },
  { label: "Must", question: "반드시 필요한 경험은 무엇인가?" },
  { label: "Success", question: "6개월 후 성공 기준은 무엇인가?" },
];

const pipelineStages = [
  { key: "applied", label: "지원" },
  { key: "screening", label: "서류 검토" },
  { key: "interview", label: "면접" },
  { key: "final", label: "최종" },
  { key: "offer", label: "오퍼" },
] as const;

const evaluationCriteria = ["Product Experience", "Data Literacy", "Collaboration"];
const candidateViewFlow = ["채용 포지션", "JD", "채용 과정"];
const recruiterViewFlow = ["개요", "파이프라인", "평가", "분석"];
const gamePlanningFlow = ["문제 정의", "요구 사항 설계", "협업", "운영", "데이터 분석", "개선"];
const recruitingFlow = ["채용 필요 정의", "직무 정의", "협업", "채용 운영", "채용 분석", "개선"];

const designPrinciples = [
  { title: "장식보다 명확성", description: "정보 구조를 먼저 설계합니다." },
  { title: "점수보다 근거", description: "사람을 하나의 숫자로 축약하지 않습니다." },
  { title: "대시보드보다 다음 판단", description: "지표를 다음 실행으로 연결합니다." },
];

const c018 = candidates.find((candidate) => candidate.id === "C-018")!;
const c018Evaluation = c018.evaluation!;
const referralMetric = sourcePerformance.find((source) => source.source === "Referral")!;
const careerSiteMetric = sourcePerformance.find((source) => source.source === "Career Site")!;
const selectedCriteria = c018.criteria.filter((criterion) => evaluationCriteria.includes(criterion.name));

function CompactFlow({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ol className={`case-v2-flow ${className}`}>
      {items.map((item, index) => (
        <li key={item}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{item}</strong>
        </li>
      ))}
    </ol>
  );
}

function SectionHeading({ label, title, description, headingId }: { label: string; title: string; description?: string; headingId: string }) {
  return (
    <header className="case-v2-heading">
      <p className="case-v2-kicker">{label}</p>
      <h2 id={headingId}>{title}</h2>
      {description ? <p>{description}</p> : null}
    </header>
  );
}

function MetricLine({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <article className="case-v2-metric-line">
      <span>{label}</span>
      <strong>{value}</strong>
      <p>{detail}</p>
    </article>
  );
}

export function CaseStudy() {
  return (
    <div className="case-study-page case-study-v2">
      <section className="case-v2-hero">
        <div className="case-v2-hero-copy">
          <p className="case-v2-kicker">포트폴리오 / 채용 Case Study</p>
          <h1>Designing a better hiring experience.</h1>
          <p>가상의 IT 기업 Morrow를 설정하고, 직무 정의부터 지원자 경험, 채용 운영과 분석까지 하나의 채용 흐름으로 설계했습니다.</p>
        </div>
        <aside className="case-v2-hero-meta">
          <span>프로젝트 유형</span>
          <strong>Personal Recruiting Case Study</strong>
          <p>실제 회사와 지원자 데이터가 아닌, 채용 업무를 탐구하기 위한 가상 시나리오입니다.</p>
        </aside>
      </section>

      <section className="case-v2-section case-v2-context" aria-labelledby="context-title">
        <SectionHeading
          label="프로젝트 맥락"
          title="채용의 문제를 하나의 시스템으로 바라봤습니다."
          description="직무 정의부터 분석까지 필요한 판단의 순서를 설계했습니다."
          headingId="context-title"
        />
        <div className="case-v2-context-grid">
          <article className="case-v2-scenario">
            <p className="case-v2-label">시나리오</p>
            <h3>Morrow</h3>
            <p>B2C Productivity / SaaS를 만드는 약 150명 규모의 성장 단계 IT 기업입니다.</p>
            <div className="case-v2-facts">
              <span>성장 단계의 IT 기업</span>
              <span>2026년 +30명 채용</span>
              <span>Recruiter 2명 · HR Manager 1명</span>
            </div>
          </article>
          <article className="case-v2-approach">
            <p className="case-v2-label">접근 방식</p>
            <CompactFlow items={approachFlow} className="case-v2-flow-approach" />
          </article>
        </div>
        <div className="case-v2-problems">
          <article><span>01</span><div><h3>직무 정의</h3><p>JD가 직군별로 일관되지 않습니다.</p></div></article>
          <article><span>02</span><div><h3>진행 가시성</h3><p>현재 채용 단계와 다음 실행을 빠르게 확인하기 어렵습니다.</p></div></article>
          <article><span>03</span><div><h3>지원자 경험</h3><p>담당자마다 연락 시점과 결과 안내 방식이 다릅니다.</p></div></article>
          <article><span>04</span><div><h3>채용 분석</h3><p>유입 경로와 단계별 차이를 운영 개선으로 연결하지 못합니다.</p></div></article>
        </div>
      </section>

      <section className="case-v2-section case-v2-definition" id="job-definition" aria-labelledby="definition-title">
        <SectionHeading
          label="직무 정의"
          title="사람을 찾기 전에 역할부터 정의합니다."
          description="대표 질문과 Product Manager JD의 핵심만 정리했습니다."
          headingId="definition-title"
        />
        <div className="case-v2-definition-grid">
          <article className="case-v2-question-panel">
            <p className="case-v2-label">대표 질문</p>
            <ul>
              {representativeQuestions.map((item) => <li key={item.label}><span>{item.label}</span><strong>{item.question}</strong></li>)}
            </ul>
          </article>
          <article className="case-v2-jd-panel">
            <div className="case-v2-panel-heading"><p className="case-v2-label">대표 구현</p><h3>Product Manager</h3></div>
            <dl>
              <div><dt>채용 이유</dt><dd>{productManagerJob.whyHiring}</dd></div>
              <div><dt>직무 미션</dt><dd>{productManagerJob.mission}</dd></div>
              <div><dt>필수 조건</dt><dd><ul>{productManagerJob.mustHave?.slice(0, 3).map((item) => <li key={item}><Check size={15} aria-hidden="true" />{item}</li>)}</ul></dd></div>
            </dl>
            <Link className="case-v2-link" to="/jobs/product-manager">Product Manager JD 보기 <ArrowRight size={16} aria-hidden="true" /></Link>
          </article>
        </div>
      </section>

      <section className="case-v2-section case-v2-experience" aria-labelledby="experience-title">
        <SectionHeading
          label="지원자 경험"
          title="지원자가 다음 단계를 예측할 수 있게 합니다."
          headingId="experience-title"
        />
        <div className="case-v2-journey">
          {hiringJourney.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <h3>{hiringStepLabels[step.title] ?? step.title}</h3>
              {step.duration ? <strong>{step.duration}</strong> : null}
            </article>
          ))}
        </div>
        <div className="case-v2-promises">
          <p className="case-v2-label">지원자 약속</p>
          <div>{candidatePromises.map((promise) => <strong key={promise.number}>{promise.title}</strong>)}</div>
        </div>
        <Link className="case-v2-link" to="/process">채용 과정 자세히 보기 <ArrowRight size={16} aria-hidden="true" /></Link>
      </section>

      <section className="case-v2-section case-v2-operation" aria-labelledby="operation-title">
        <SectionHeading
          label="채용 운영"
          title="채용 진행과 판단 기준을 한 화면에 둡니다."
          headingId="operation-title"
        />
        <div className="case-v2-pipeline" aria-label="채용 파이프라인">
          {pipelineStages.map((stage, index) => (
            <div key={stage.key}>
              <span>{stage.label}</span>
              <strong>{candidates.filter((candidate) => candidate.stage === stage.key).length}</strong>
              {index < pipelineStages.length - 1 ? <i aria-hidden="true">→</i> : null}
            </div>
          ))}
        </div>
        <div className="case-v2-evaluation-grid">
          <article className="case-v2-criteria">
            <p className="case-v2-label">{getCandidateAlias(c018)} 대표 평가</p>
            <h3>Criteria → Evidence → Decision</h3>
            <div className="case-v2-criteria-list">
              {selectedCriteria.map((criterion) => <div key={criterion.name}><strong>{criterion.name}</strong><span>{criterion.evidence}</span></div>)}
            </div>
          </article>
          <article className="case-v2-evaluation-note">
            <p className="case-v2-label">근거와 판단</p>
            <p>{c018Evaluation.evidence}</p>
            <p className="case-v2-concern"><span>우려 사항</span>{c018Evaluation.concern}</p>
            <div><span>판단</span><strong>진행</strong></div>
          </article>
        </div>
        <Link className="case-v2-link" to="/recruiter/pipeline">파이프라인 자세히 보기 <ArrowRight size={16} aria-hidden="true" /></Link>
      </section>

      <section className="case-v2-section case-v2-analytics" aria-labelledby="analytics-title">
        <SectionHeading
          label="채용 분석"
          title="채용 데이터를 다음 실행으로 연결합니다."
          description="판단으로 이어진 핵심 신호만 남겼습니다."
          headingId="analytics-title"
        />
        <div className="case-v2-metrics">
          <MetricLine label="임직원 추천" value={`${referralMetric.applied} 지원`} detail={`${referralMetric.interviewed} 면접 → ${referralMetric.hired} 채용`} />
          <MetricLine label="Career Site" value={`${careerSiteMetric.applied} 지원`} detail={`${careerSiteMetric.interviewed} 면접 → ${careerSiteMetric.hired} 채용`} />
          <MetricLine label="Engineering Time to Hire" value={`${bottleneckInsight.totalDays}일`} detail="채용 소요 기간" />
          <MetricLine label="Interview Scheduling" value={`${bottleneckInsight.stageDays}일`} detail="현재 가장 긴 단일 단계" />
        </div>
        <div className="case-v2-thinking">
          <div><span>데이터</span><strong>엔지니어링 채용 소요 기간 {bottleneckInsight.totalDays}일</strong></div>
          <div><span>관찰</span><p>면접 일정 조율 {bottleneckInsight.stageDays}일. 현재 가장 긴 단일 단계입니다.</p></div>
          <div><span>가설</span><p>수동 일정 조율이 Lead Time 증가에 영향을 주고 있을 가능성이 있습니다.</p></div>
          <div className="case-v2-thinking-wide"><span>개선안</span><ul><li>면접관 가능 시간 사전 등록</li><li>후보자가 직접 가능한 시간 선택</li></ul></div>
          <div><span>측정 지표</span><p>평균 면접 일정 조율 시간 <strong>10일 → 목표 5일 미만</strong></p></div>
        </div>
        <Link className="case-v2-link" to="/recruiter/analytics">채용 분석 자세히 보기 <ArrowRight size={16} aria-hidden="true" /></Link>
      </section>

      <section className="case-v2-section case-v2-perspectives" aria-labelledby="perspective-title">
        <SectionHeading
          label="두 가지 관점"
          title="하나의 채용 경험을 두 관점에서 봅니다."
          headingId="perspective-title"
        />
        <div className="case-v2-perspective-grid">
          <article><span>지원자 화면</span><h3>지원자는 이 채용을 어떻게 경험하는가?</h3><p>{candidateViewFlow.join(" → ")}</p></article>
          <article><span>채용 담당자 화면</span><h3>채용 담당자는 같은 과정을 어떻게 운영하고 판단하는가?</h3><p>{recruiterViewFlow.join(" → ")}</p></article>
        </div>
        <div className="case-v2-principles">
          {designPrinciples.map((principle, index) => <article key={principle.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{principle.title}</h3><p>{principle.description}</p></article>)}
        </div>
      </section>

      <section className="case-v2-section case-v2-transition" aria-labelledby="transition-title">
        <SectionHeading
          label="일하는 방식의 전환"
          title="도메인은 달라도 일하는 방식은 이어집니다."
          headingId="transition-title"
        />
        <div className="case-v2-comparison">
          <article><span>게임 기획</span><CompactFlow items={gamePlanningFlow} className="case-v2-flow-bridge" /></article>
          <article><span>채용</span><CompactFlow items={recruitingFlow} className="case-v2-flow-bridge" /></article>
        </div>
        <blockquote>도메인은 달라졌지만, 문제를 정의하고 기준을 맞추고, 운영 결과를 데이터로 확인하고 개선하는 방식은 이어집니다.</blockquote>
        <div className="case-v2-closing">
          <p className="case-v2-kicker">Personal Recruiting Case Study</p>
          <h2>제품을 기획하던 방식으로 채용 경험을 설계합니다.</h2>
          <p>이 프로젝트는 기존 기획·운영·데이터 분석 경험을 Recruiting 업무에 어떻게 확장할 수 있을지 탐구한 개인 Case Study입니다.</p>
          <div className="case-v2-actions"><Link className="primary-button" to="/">채용 페이지로 돌아가기 <ArrowRight size={16} aria-hidden="true" /></Link><Link className="outline-button" to="/recruiter">채용 담당자 화면 보기 <ArrowRight size={16} aria-hidden="true" /></Link></div>
        </div>
      </section>
    </div>
  );
}
