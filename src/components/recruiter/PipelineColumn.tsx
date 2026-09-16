import type { Candidate } from "../../data/candidates";
import { CandidateCard } from "./CandidateCard";

type PipelineColumnProps = {
  stageKey: string;
  title: string;
  candidates: Candidate[];
  selectedCandidateId?: string;
  onCandidateSelect: (candidate: Candidate) => void;
};

export function PipelineColumn({ stageKey, title, candidates, selectedCandidateId, onCandidateSelect }: PipelineColumnProps) {
  return (
    <section className={`pipeline-column pipeline-column-${stageKey}`} aria-labelledby={`pipeline-${stageKey}`}>
      <header className="pipeline-column-header">
        <h2 id={`pipeline-${stageKey}`}>{title}</h2>
        <span>{String(candidates.length).padStart(2, "0")}</span>
      </header>
      <div className="pipeline-column-cards">
        {candidates.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} selected={candidate.id === selectedCandidateId} onSelect={onCandidateSelect} />
        ))}
      </div>
    </section>
  );
}
