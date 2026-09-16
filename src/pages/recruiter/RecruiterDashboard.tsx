import { FunnelStage } from "../../components/recruiter/FunnelStage";
import { InsightCard } from "../../components/recruiter/InsightCard";
import { MetricCard } from "../../components/recruiter/MetricCard";
import { hiringFunnel, recruitingSummary, schedulingInsight } from "../../data/analytics";

const summaryMetrics = [
  { label: "열린 포지션", key: "openRoles" },
  { label: "후보자", key: "candidates" },
  { label: "면접", key: "interviews" },
  { label: "오퍼", key: "offers" },
] as const;

export function RecruiterDashboard() {
  const maxCandidates = hiringFunnel[0].candidates;

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <div>
          <p className="eyebrow">채용 현황</p>
          <h1>Good morning.</h1>
        </div>
        <p className="dashboard-date">2026년 9월</p>
      </header>

      <section className="dashboard-section dashboard-summary-section" aria-labelledby="summary-title">
        <div className="dashboard-section-intro">
          <p className="dashboard-section-label" id="summary-title">한눈에 보기</p>
          <p>현재 채용 상황을 빠르게 확인합니다.</p>
        </div>
        <div className="metric-grid">
          {summaryMetrics.map((metric) => (
            <MetricCard key={metric.key} label={metric.label} value={recruitingSummary[metric.key]} />
          ))}
        </div>
      </section>

      <section className="dashboard-section funnel-section" aria-labelledby="funnel-title">
        <div className="dashboard-section-heading">
          <div>
            <p className="eyebrow">현재 채용 상황</p>
            <h2 id="funnel-title">채용 퍼널</h2>
          </div>
          <p>각 단계에 남아 있는 후보자 수와<br />이전 단계 대비 전환율을 함께 봅니다.</p>
        </div>
        <ol className="funnel-list">
          {hiringFunnel.map((stage, index) => (
            <FunnelStage key={stage.stage} stage={stage} index={index} maxCandidates={maxCandidates} />
          ))}
        </ol>
      </section>

      <section className="dashboard-section insight-section" aria-labelledby="insight-title">
        <div className="dashboard-section-heading">
          <div>
            <p className="eyebrow">데이터에서 실행으로</p>
            <h2 id="insight-title">지금 가장 먼저 개선할 한 가지</h2>
          </div>
          <p>지표를 기록하는 데서 멈추지 않고,<br />다음 채용 운영 행동으로 연결합니다.</p>
        </div>
        <InsightCard insight={schedulingInsight} />
      </section>
    </div>
  );
}
