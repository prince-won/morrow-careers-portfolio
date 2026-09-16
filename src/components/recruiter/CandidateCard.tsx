import { ArrowUpRight } from "lucide-react";
import { getCandidateAlias, type Candidate } from "../../data/candidates";

type CandidateCardProps = {
  candidate: Candidate;
  onSelect: (candidate: Candidate) => void;
  selected?: boolean;
};

export function CandidateCard({ candidate, onSelect, selected = false }: CandidateCardProps) {
  const alias = getCandidateAlias(candidate);

  return (
    <button className={`candidate-card ${selected ? "is-selected" : ""}`} type="button" onClick={() => onSelect(candidate)} aria-label={`${alias} 후보자 상세 보기`} aria-pressed={selected}>
      <span className="candidate-card-topline">
        <span className="candidate-id">{alias}</span>
        <ArrowUpRight size={16} strokeWidth={1.7} aria-hidden="true" />
      </span>
      <span className="candidate-card-position">{candidate.position}</span>
      <span className="candidate-card-detail">경력 {candidate.experienceYears}년 <i aria-hidden="true" /> {candidate.industry}</span>
      <span className="candidate-card-source">{candidate.source}</span>
    </button>
  );
}
