import { X } from "lucide-react";
import { useEffect } from "react";
import { getCandidateAlias, type Candidate } from "../../data/candidates";
import { EvaluationSection } from "./EvaluationSection";

type CandidateDrawerProps = {
  candidate: Candidate | null;
  onClose: () => void;
};

export function CandidateDrawer({ candidate, onClose }: CandidateDrawerProps) {
  useEffect(() => {
    if (!candidate) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [candidate, onClose]);

  if (!candidate) return null;

  return (
    <div className="drawer-layer">
      <button className="drawer-scrim" type="button" aria-label="후보자 상세 닫기" onClick={onClose} />
      <aside className="candidate-drawer" role="dialog" aria-modal="true" aria-labelledby="candidate-drawer-title">
        <header className="drawer-header">
          <div>
            <p className="eyebrow">후보자</p>
            <h2 id="candidate-drawer-title">{getCandidateAlias(candidate)}</h2>
          </div>
          <button className="drawer-close" type="button" onClick={onClose} aria-label="후보자 상세 닫기">
            <X size={20} strokeWidth={1.7} aria-hidden="true" />
          </button>
        </header>

        <div className="drawer-body">
          <dl className="candidate-facts">
            <div><dt>포지션</dt><dd>{candidate.position}</dd></div>
            <div><dt>경력</dt><dd>{candidate.experienceYears}년</dd></div>
            <div><dt>현재 업종</dt><dd>{candidate.industry}</dd></div>
            <div><dt>유입 경로</dt><dd>{candidate.source}</dd></div>
          </dl>

          {candidate.criteria.length > 0 && (
            <section className="drawer-section criteria-section" aria-labelledby="criteria-title">
              <div className="drawer-section-heading">
                <p className="eyebrow">서류 검토 기준</p>
                <h3 id="criteria-title">요구 사항과<br />후보자 근거를 비교합니다.</h3>
              </div>
              <div className="criteria-table-wrap">
                <table className="criteria-table">
                  <thead>
                    <tr><th>기준</th><th>요구 사항</th><th>후보자 근거</th></tr>
                  </thead>
                  <tbody>
                    {candidate.criteria.map((criterion) => (
                      <tr key={criterion.name}>
                        <th scope="row">{criterion.name}</th>
                        <td>{criterion.requirement}</td>
                        <td>{criterion.evidence}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {candidate.evaluation && <EvaluationSection evaluation={candidate.evaluation} />}
        </div>
      </aside>
    </div>
  );
}
