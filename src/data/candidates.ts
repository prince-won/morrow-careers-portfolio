export type CandidateStage = "applied" | "screening" | "interview" | "final" | "offer";

export type CandidateCriterion = {
  name: string;
  requirement: string;
  evidence: string;
};

export type CandidateEvaluation = {
  problemSolving: number;
  dataLiteracy: number;
  collaboration: number;
  productThinking: number;
  evidence: string;
  concern: string;
  decision: "proceed" | "hold" | "reject";
};

export type Candidate = {
  id: string;
  position: string;
  experienceYears: number;
  industry: string;
  source: string;
  stage: CandidateStage;
  criteria: CandidateCriterion[];
  evaluation?: CandidateEvaluation;
};

// Pipeline-facing names are anonymized display labels. Internal ids remain stable for lookups and selection state.
export const candidateAliases: Record<string, string> = {
  "C-001": "김OO",
  "C-002": "이OO",
  "C-003": "박OO",
  "C-004": "최OO",
  "C-005": "정OO",
  "C-006": "한OO",
  "C-007": "윤OO",
  "C-008": "장OO",
  "C-009": "서OO",
  "C-010": "오OO",
  "C-011": "임OO",
  "C-012": "신OO",
  "C-013": "권OO",
  "C-014": "황OO",
  "C-015": "송OO",
  "C-016": "조OO",
  "C-017": "유OO",
  "C-018": "배OO",
};

export function getCandidateAlias(candidate: Pick<Candidate, "id">) {
  return candidateAliases[candidate.id] ?? "지원자";
}

const productManager = "Product Manager";

export const candidates: Candidate[] = [
  { id: "C-001", position: productManager, experienceYears: 3, industry: "SaaS", source: "Wanted", stage: "applied", criteria: [] },
  { id: "C-002", position: productManager, experienceYears: 4, industry: "Commerce", source: "Career Site", stage: "applied", criteria: [] },
  { id: "C-003", position: productManager, experienceYears: 3, industry: "Productivity", source: "사람인", stage: "applied", criteria: [] },
  { id: "C-004", position: productManager, experienceYears: 6, industry: "B2C Platform", source: "Referral", stage: "applied", criteria: [] },
  { id: "C-005", position: productManager, experienceYears: 4, industry: "Fintech", source: "Career Site", stage: "applied", criteria: [] },
  { id: "C-006", position: productManager, experienceYears: 5, industry: "Commerce", source: "Wanted", stage: "applied", criteria: [] },
  { id: "C-007", position: productManager, experienceYears: 3, industry: "SaaS", source: "Career Site", stage: "screening", criteria: [] },
  { id: "C-008", position: productManager, experienceYears: 5, industry: "Productivity", source: "Referral", stage: "screening", criteria: [] },
  { id: "C-009", position: productManager, experienceYears: 4, industry: "B2C Platform", source: "Wanted", stage: "screening", criteria: [] },
  { id: "C-010", position: productManager, experienceYears: 7, industry: "Fintech", source: "Career Site", stage: "screening", criteria: [] },
  { id: "C-011", position: productManager, experienceYears: 3, industry: "Commerce", source: "잡코리아", stage: "screening", criteria: [] },
  { id: "C-012", position: productManager, experienceYears: 4, industry: "SaaS", source: "Referral", stage: "interview", criteria: [] },
  { id: "C-013", position: productManager, experienceYears: 6, industry: "B2C Platform", source: "Career Site", stage: "interview", criteria: [] },
  { id: "C-014", position: productManager, experienceYears: 5, industry: "Productivity", source: "Wanted", stage: "interview", criteria: [] },
  { id: "C-015", position: productManager, experienceYears: 3, industry: "Commerce", source: "사람인", stage: "interview", criteria: [] },
  { id: "C-016", position: productManager, experienceYears: 5, industry: "SaaS", source: "Referral", stage: "final", criteria: [] },
  { id: "C-017", position: productManager, experienceYears: 4, industry: "B2C Platform", source: "Career Site", stage: "final", criteria: [] },
  {
    id: "C-018",
    position: productManager,
    experienceYears: 5,
    industry: "B2C Platform",
    source: "Career Site",
    stage: "offer",
    criteria: [
      { name: "Product Experience", requirement: "3+ Years", evidence: "5 Years" },
      { name: "Data Literacy", requirement: "Required", evidence: "SQL / Amplitude" },
      { name: "Collaboration", requirement: "Required", evidence: "Product / Design / Engineering" },
      { name: "B2C Experience", requirement: "Preferred", evidence: "4 Years" },
      { name: "Experiment", requirement: "Preferred", evidence: "A/B Testing" },
    ],
    evaluation: {
      problemSolving: 4,
      dataLiteracy: 4,
      collaboration: 5,
      productThinking: 4,
      evidence: "이전 서비스에서 신규 사용자 Activation 데이터를 분석하고 개선 프로젝트를 진행한 경험을 확인했다.",
      concern: "대규모 조직에서 여러 이해관계자를 조율한 경험은 아직 충분히 확인되지 않았다.",
      decision: "proceed",
    },
  },
];
