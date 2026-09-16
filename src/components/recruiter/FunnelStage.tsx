import type { FunnelStage as FunnelStageData } from "../../data/analytics";
import { funnelStageLabels } from "../../data/labels";

type FunnelStageProps = {
  stage: FunnelStageData;
  index: number;
  maxCandidates: number;
};

export function FunnelStage({ stage, index, maxCandidates }: FunnelStageProps) {
  const barWidth = `${Math.max((stage.candidates / maxCandidates) * 100, 9)}%`;

  return (
    <li className="funnel-stage">
      <div className="funnel-stage-heading">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <h3>{funnelStageLabels[stage.stage] ?? stage.stage}</h3>
      </div>
      <strong className="funnel-stage-count">{stage.candidates}</strong>
      <div className="funnel-stage-rate">
        {stage.conversionRate ? <><span>전환율</span><strong>{stage.conversionRate.toFixed(1)}%</strong></> : <span>시작 지원자</span>}
      </div>
      <div className="funnel-bar" aria-hidden="true">
        <span style={{ width: barWidth }} />
      </div>
    </li>
  );
}
