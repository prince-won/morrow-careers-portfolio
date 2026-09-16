import { useMemo, useState } from "react";
import {
  analyticsRoleFilters,
  bottleneckInsight,
  departmentTimeToHire,
  engineeringHiringBreakdown,
  hiringFunnel,
  sourceInsights,
  sourcePerformance,
} from "../../data/analytics";
import { departmentLabels, funnelStageLabels, sourceInvestigationLabels, sourceLabels } from "../../data/labels";

const breakdownStageLabels: Record<string, string> = {
  Sourcing: "소싱",
  "Resume Review": "서류 검토",
  "Interview Scheduling": "면접 일정 조율",
  Interview: "면접",
  Offer: "오퍼",
};

const roleLabels: Record<(typeof analyticsRoleFilters)[number], string> = {
  "All Roles": "모든 직군",
  Product: "프로덕트",
  Engineering: "엔지니어링",
  Business: "비즈니스",
  People: "피플",
};

function formatConversion(value: number, total: number) {
  return `${((value / total) * 100).toFixed(1)}%`;
}

function AnalyticsFunnel() {
  return (
    <ol className="analytics-funnel-list" aria-label="채용 퍼널 기준">
      {hiringFunnel.map((stage, index) => (
        <li className="analytics-funnel-stage" key={stage.stage}>
          <div className="analytics-funnel-stage-heading">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{funnelStageLabels[stage.stage] ?? stage.stage}</h3>
          </div>
          <strong>{stage.candidates}</strong>
          <span>{stage.conversionRate ? `전환율 ${stage.conversionRate.toFixed(1)}%` : "시작 지원자"}</span>
        </li>
      ))}
    </ol>
  );
}

function SourcePerformanceTable() {
  return (
    <div className="analytics-table-wrap">
      <table className="analytics-table">
        <caption className="sr-only">유입 경로별 성과 비교</caption>
        <thead>
          <tr>
            <th scope="col">유입 경로</th>
            <th scope="col">지원</th>
            <th scope="col">면접</th>
            <th scope="col">채용</th>
            <th scope="col">면접 전환율</th>
            <th scope="col">채용 전환율</th>
          </tr>
        </thead>
        <tbody>
          {sourcePerformance.map((source) => (
            <tr key={source.source}>
              <th scope="row">{sourceLabels[source.source] ?? source.source}</th>
              <td>{source.applied}</td>
              <td>{source.interviewed}</td>
              <td>{source.hired}</td>
              <td><strong>{formatConversion(source.interviewed, source.applied)}</strong><span>{source.interviewed} / {source.applied}</span></td>
              <td><strong>{formatConversion(source.hired, source.applied)}</strong><span>{source.hired} / {source.applied}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SourceObservation({ source }: { source: (typeof sourceInsights)[number] }) {
  const metric = sourcePerformance.find((item) => item.source === source.source);

  if (!metric) return null;

  return (
    <article className="source-observation-card">
      <header className="source-observation-header">
        <span>유입 경로 관찰</span>
        <h3>{sourceLabels[source.source] ?? source.source}</h3>
      </header>
      <div className="source-observation-flow">
        <div className="analytics-reasoning-block analytics-data-block">
            <p className="analytics-reasoning-label">데이터</p>
            <p className="source-observation-data"><strong>{metric.applied}</strong> 지원 <i aria-hidden="true">·</i> <strong>{metric.interviewed}</strong> 면접 <i aria-hidden="true">·</i> <strong>{metric.hired}</strong> 채용</p>
        </div>
        <div className="analytics-reasoning-block">
            <p className="analytics-reasoning-label">관찰</p>
          <p>{source.observation.replace("Interview", "면접").replace("Hire", "채용").replace("나타난다.", "나타납니다.")}</p>
        </div>
        {source.investigation ? (
          <div className="analytics-reasoning-block">
            <p className="analytics-reasoning-label">추가 확인</p>
            <ul className="analytics-inline-list">
              {source.investigation.map((item) => <li key={item}>{sourceInvestigationLabels[item] ?? item}</li>)}
            </ul>
          </div>
        ) : null}
        {source.action ? (
          <div className="analytics-reasoning-block analytics-action-block">
            <p className="analytics-reasoning-label">개선안</p>
            <p>{source.action?.replace("Employee Referral", "임직원 추천 채용").replace("검토한다", "검토합니다")}</p>
          </div>
        ) : null}
      </div>
    </article>
  );
}

export function Analytics() {
  const [selectedRole, setSelectedRole] = useState<(typeof analyticsRoleFilters)[number]>("All Roles");
  const maxDepartmentDays = Math.max(...departmentTimeToHire.map((item) => item.averageDays));
  const maxBreakdownDays = Math.max(...engineeringHiringBreakdown.map((item) => item.days));
  const longestBreakdownStage = useMemo(
    () => engineeringHiringBreakdown.find((item) => item.days === maxBreakdownDays)?.stage,
    [maxBreakdownDays],
  );

  return (
    <div className="analytics-page">
      <header className="analytics-hero">
        <p className="eyebrow">채용 담당자 화면 / 분석</p>
        <h1>Turn recruiting data into better decisions.</h1>
        <p className="analytics-hero-description">채용 결과를 집계하는 데서 멈추지 않고, 어디에서 다음 개선이 필요한지 확인합니다.</p>
      </header>

      <div className="analytics-toolbar">
        <div>
          <p className="analytics-toolbar-label">직군 필터</p>
          <div className="analytics-role-filters" role="group" aria-label="직군 필터">
            {analyticsRoleFilters.map((role) => (
              <button
                aria-pressed={selectedRole === role}
                className={selectedRole === role ? "is-active" : ""}
                key={role}
                onClick={() => setSelectedRole(role)}
                type="button"
              >
                {roleLabels[role]}
              </button>
            ))}
          </div>
        </div>
        <p className="analytics-filter-note">
          {selectedRole === "All Roles"
            ? "전체 직군 샘플 데이터"
            : "이 샘플에는 직군별 상세 데이터가 없어 전체 직군 데이터를 표시합니다."}
        </p>
      </div>

      <section className="analytics-section analytics-funnel-context" aria-labelledby="analytics-funnel-title">
        <div className="analytics-section-heading">
          <div>
            <p className="eyebrow">01 / 채용 퍼널 기준</p>
            <h2 id="analytics-funnel-title">채용의 전체 흐름부터 봅니다.</h2>
          </div>
          <p>개요의 전체 현황을 유입 경로와 채용 소요 기간 분석의 기준으로 다시 봅니다.</p>
        </div>
        <AnalyticsFunnel />
      </section>

      <section className="analytics-section" aria-labelledby="source-performance-title">
        <div className="analytics-section-heading">
          <div>
            <p className="eyebrow">02 / 유입 경로 성과</p>
            <h2 id="source-performance-title">유입 경로를 비교합니다.</h2>
          </div>
          <p>지원 규모와 면접·채용 도달 현황을 같은 기준으로 비교합니다.</p>
        </div>
        <div className="analytics-surface analytics-source-surface">
          <SourcePerformanceTable />
          <p className="analytics-table-note">Career Site에는 자체 채용 페이지와 LinkedIn 유입을 포함합니다. 전환율은 각 유입 경로의 지원자 수를 기준으로 계산하며, 순위나 우열 판단은 포함하지 않습니다.</p>
        </div>
      </section>

      <section className="analytics-section analytics-observations" aria-labelledby="source-observations-title">
        <div className="analytics-section-heading">
          <div>
            <p className="eyebrow">유입 경로 관찰</p>
            <h2 id="source-observations-title">다음 질문이 필요한 곳을 찾습니다.</h2>
          </div>
          <p>데이터에서 관찰로 이동하되,<br />원인은 확인이 필요한 가설로 남겨둡니다.</p>
        </div>
        <div className="source-observation-grid">
          {sourceInsights.map((source) => <SourceObservation key={source.source} source={source} />)}
        </div>
      </section>

      <section className="analytics-section analytics-time-to-hire" aria-labelledby="time-to-hire-title">
        <div className="analytics-section-heading">
          <div>
            <p className="eyebrow">03 / 채용 소요 기간</p>
            <h2 id="time-to-hire-title">시간이 쌓이는 구간을 봅니다.</h2>
          </div>
          <p>직군별 평균 채용 기간을 비교해<br />다음으로 살펴볼 구간을 찾습니다.</p>
        </div>
        <div className="department-time-grid">
          {departmentTimeToHire.map((item) => (
            <article className={`department-time-card ${item.department === "Engineering" ? "is-focus" : ""}`} key={item.department}>
              <div className="department-time-heading">
                <h3>{departmentLabels[item.department as keyof typeof departmentLabels] ?? item.department}</h3>
                <strong>{item.averageDays}</strong>
              </div>
              <p>평균 채용 소요 기간 <span>일</span></p>
              <div className="department-time-bar" aria-hidden="true"><span style={{ width: `${(item.averageDays / maxDepartmentDays) * 100}%` }} /></div>
            </article>
          ))}
        </div>
        <p className="analytics-observation-note"><span>관찰</span> 엔지니어링의 평균 채용 소요 기간은 34일로, 현재 비교 대상 중 가장 길게 나타납니다.</p>
      </section>

      <section className="analytics-section analytics-engineering-breakdown" aria-labelledby="engineering-breakdown-title">
        <div className="analytics-section-heading">
          <div>
            <p className="eyebrow">엔지니어링 채용 세부 흐름</p>
            <h2 id="engineering-breakdown-title">긴 흐름을 단계별로 나눠 봅니다.</h2>
          </div>
          <p>엔지니어링 채용 시나리오의 소요 시간을<br />단계별로 나눠 어느 구간이 긴지 확인합니다.</p>
        </div>
        <div className="analytics-breakdown-meta">
          <span>엔지니어링 채용 단계별 소요 시간</span>
          <strong>{bottleneckInsight.totalDays}일 전체</strong>
        </div>
        <ol className="engineering-breakdown-list">
          {engineeringHiringBreakdown.map((item, index) => (
            <li className={item.stage === longestBreakdownStage ? "is-longest" : ""} key={item.stage}>
              <span className="engineering-breakdown-index">{String(index + 1).padStart(2, "0")}</span>
              <div className="engineering-breakdown-stage">
                <div><h3>{breakdownStageLabels[item.stage] ?? item.stage}</h3><strong>{item.days}일</strong></div>
                <div className="engineering-breakdown-bar" aria-hidden="true"><span style={{ width: `${(item.days / bottleneckInsight.totalDays) * 100}%` }} /></div>
              </div>
              {item.stage === longestBreakdownStage ? <span className="engineering-breakdown-note">가장 긴 단일 구간</span> : null}
            </li>
          ))}
        </ol>
          <p className="analytics-context-note">이 10일은 엔지니어링 시나리오의 단계별 소요 시간입니다. 개요의 최근 운영 평균 면접 일정 조율 시간 4.8일과는 다른 맥락입니다.</p>
      </section>

      <section className="analytics-section analytics-bottleneck" aria-labelledby="bottleneck-title">
        <div className="analytics-section-heading">
          <div>
            <p className="eyebrow">병목 분석</p>
            <h2 id="bottleneck-title">가장 긴 단계를, 다음 행동으로 바꿉니다.</h2>
          </div>
          <p>확정된 원인을 단정하지 않고, 데이터에서 보이는 신호를 다음 실험으로 연결합니다.</p>
        </div>
        <article className="bottleneck-card">
          <div className="bottleneck-story">
            <section className="bottleneck-story-part bottleneck-signal" aria-labelledby="bottleneck-signal-title">
              <p className="bottleneck-story-label">SIGNAL</p>
              <h3 id="bottleneck-signal-title">엔지니어링 채용 소요</h3>
              <strong>{bottleneckInsight.totalDays}일</strong>
              <p>전체 단계 중 가장 긴 구간</p>
            </section>
            <section className="bottleneck-story-part bottleneck-diagnosis" aria-labelledby="bottleneck-diagnosis-title">
              <p className="bottleneck-story-label">DIAGNOSIS</p>
              <h3 id="bottleneck-diagnosis-title">면접 일정 조율</h3>
              <strong>평균 {bottleneckInsight.stageDays}일</strong>
              <p>후보자와 면접관의 가능한 시간을 여러 차례 조율하는 과정이 일정 확정 지연에 영향을 줄 가능성이 있습니다.</p>
            </section>
            <section className="bottleneck-story-part bottleneck-action" aria-labelledby="bottleneck-action-title">
              <p className="bottleneck-story-label">NEXT ACTION</p>
              <h3 id="bottleneck-action-title">실험</h3>
              <ul>
                <li>면접관 가능 시간 사전 등록</li>
                <li>후보자 선택형 시간 슬롯 제공</li>
              </ul>
            </section>
            <section className="bottleneck-story-part bottleneck-success" aria-labelledby="bottleneck-success-title">
              <p className="bottleneck-story-label">SUCCESS METRIC</p>
              <h3 id="bottleneck-success-title">평균 면접 일정 조율 시간</h3>
              <strong>5일 미만</strong>
            </section>
          </div>
        </article>
      </section>
    </div>
  );
}
