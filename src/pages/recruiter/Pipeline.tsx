import { useCallback, useMemo, useState } from "react";
import { CandidateDrawer } from "../../components/recruiter/CandidateDrawer";
import { PipelineColumn } from "../../components/recruiter/PipelineColumn";
import type { Candidate, CandidateStage } from "../../data/candidates";
import { candidates } from "../../data/candidates";
import { pipelineStageLabels } from "../../data/labels";

const pipelineStages: Array<{ key: CandidateStage; label: string }> = [
  { key: "applied", label: pipelineStageLabels.applied },
  { key: "screening", label: pipelineStageLabels.screening },
  { key: "interview", label: pipelineStageLabels.interview },
  { key: "final", label: pipelineStageLabels.final },
  { key: "offer", label: pipelineStageLabels.offer },
];

export function Pipeline() {
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const closeDrawer = useCallback(() => setSelectedCandidate(null), []);
  const groupedCandidates = useMemo(
    () => pipelineStages.map((stage) => ({
      ...stage,
      candidates: candidates.filter((candidate) => candidate.stage === stage.key),
    })),
    [],
  );

  return (
    <div className="pipeline-page">
      <header className="pipeline-header">
        <div>
          <p className="eyebrow">채용 담당자 화면 / 지원자 파이프라인</p>
          <h1>Product Manager</h1>
          <p>후보자의 현재 단계와 다음 판단을 한 흐름에서 확인합니다.</p>
        </div>
        <div className="pipeline-total"><strong>18</strong><span>후보자</span></div>
      </header>

      <div className="pipeline-principle" aria-label="채용 평가 원칙">
        <span>포트폴리오 시뮬레이션</span>
        <strong>단계</strong><i aria-hidden="true">→</i><strong>기준</strong><i aria-hidden="true">→</i><strong>근거</strong><i aria-hidden="true">→</i><strong>판단</strong>
      </div>

      <section className="pipeline-board" aria-label="Product Manager 후보자 파이프라인">
        {groupedCandidates.map((stage) => (
          <PipelineColumn key={stage.key} stageKey={stage.key} title={stage.label} candidates={stage.candidates} selectedCandidateId={selectedCandidate?.id} onCandidateSelect={setSelectedCandidate} />
        ))}
      </section>

      <p className="pipeline-note">후보자 기록은 가상 데이터입니다. 단계 변경과 드래그 앤 드롭은 이 포트폴리오 시뮬레이션에 포함하지 않습니다.</p>

      <CandidateDrawer candidate={selectedCandidate} onClose={closeDrawer} />
    </div>
  );
}
