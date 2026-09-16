import type { SchedulingInsight } from "../../data/analytics";

type InsightCardProps = {
  insight: SchedulingInsight;
};

const insightSteps = ["데이터", "문제", "가설", "개선안", "측정 지표"];

function displayDays(value: string) {
  return value.replace(/\s*Days?/g, "일");
}

export function InsightCard({ insight }: InsightCardProps) {
  return (
    <article className="insight-card">
      <header className="insight-card-header">
        <div>
          <p className="eyebrow">채용 인사이트</p>
          <h3>면접 일정 조율</h3>
        </div>
        <dl className="insight-metrics">
          <div>
            <dt>현재</dt>
            <dd>{displayDays(insight.current)}</dd>
          </div>
          <div>
            <dt>이전</dt>
            <dd>{displayDays(insight.previous)}</dd>
          </div>
          <div className="insight-change">
            <dt>변화</dt>
            <dd>{displayDays(insight.change)}</dd>
          </div>
        </dl>
      </header>

      <div className="insight-flow-labels" aria-hidden="true">
        {insightSteps.map((step, index) => <span key={step}><b>{String(index + 1).padStart(2, "0")}</b>{step}</span>)}
      </div>

      <div className="insight-flow">
        <section className="insight-flow-step">
          <div className="insight-flow-marker">01</div>
          <div>
            <p className="insight-step-label">데이터</p>
            <p className="insight-flow-lead">최근 평균 일정 조율 시간 <strong>{displayDays(insight.current)}</strong></p>
            <p>이전 {displayDays(insight.previous)}</p>
          </div>
        </section>
        <section className="insight-flow-step">
          <div className="insight-flow-marker">02</div>
          <div>
            <p className="insight-step-label">문제</p>
            <p>이전보다 평균 면접 일정 조율 시간이 {displayDays(insight.change).replace("+", "")} 늘어났습니다.</p>
          </div>
        </section>
        <section className="insight-flow-step">
          <div className="insight-flow-marker">03</div>
          <div>
            <p className="insight-step-label">가설</p>
            <p>면접관과 후보자가 이메일이나 메신저로 가능한 시간을 여러 차례 조율하면서 일정 확정까지 걸리는 시간이 늘어났을 가능성이 있습니다.</p>
          </div>
        </section>
        <section className="insight-flow-step">
          <div className="insight-flow-marker">04</div>
          <div>
            <p className="insight-step-label">개선안</p>
            <ul>
              <li>면접관 가능 시간 사전 등록</li>
              <li>후보자가 가능한 시간 중 직접 선택</li>
            </ul>
          </div>
        </section>
        <section className="insight-flow-step insight-flow-step-measure">
          <div className="insight-flow-marker">05</div>
          <div>
            <p className="insight-step-label">측정 지표</p>
            <p className="insight-measure-name">평균 면접 일정 조율 시간</p>
            <p className="insight-target">목표: 3일 미만</p>
          </div>
        </section>
      </div>
    </article>
  );
}
