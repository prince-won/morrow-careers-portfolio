import type { CandidateEvaluation } from "../../data/candidates";

type EvaluationSectionProps = {
  evaluation: CandidateEvaluation;
};

const scoreCriteria = [
  { label: "문제 해결", key: "problemSolving" },
  { label: "데이터 이해", key: "dataLiteracy" },
  { label: "협업", key: "collaboration" },
  { label: "제품 사고", key: "productThinking" },
] as const;

export function EvaluationSection({ evaluation }: EvaluationSectionProps) {
  return (
    <section className="drawer-section evaluation-section" aria-labelledby="evaluation-title">
      <div className="drawer-section-heading">
        <p className="eyebrow">구조화된 평가</p>
        <h3 id="evaluation-title">기준과 근거를 확인한 뒤<br />판단합니다.</h3>
      </div>

      <div className="evaluation-scores" aria-label="면접 평가 점수">
        {scoreCriteria.map((criterion) => (
          <div key={criterion.key}>
            <span>{criterion.label}</span>
            <strong>{evaluation[criterion.key]} <small>/ 5</small></strong>
          </div>
        ))}
      </div>

      <div className="evaluation-narrative">
        <div>
          <p className="drawer-field-label">근거</p>
          <p>{evaluation.evidence}</p>
        </div>
        <div>
          <p className="drawer-field-label">우려 사항</p>
          <p>{evaluation.concern}</p>
        </div>
      </div>

      <div className="decision-block">
        <div>
          <p className="drawer-field-label">판단</p>
          <p>기준과 근거를 확인한 뒤의 다음 단계</p>
        </div>
        <strong>{evaluation.decision === "proceed" ? "Proceed" : evaluation.decision}</strong>
      </div>
    </section>
  );
}
