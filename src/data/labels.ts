import type { CandidateStage } from "./candidates";
import type { Department, EmploymentType, ExperienceLevel } from "./jobs";

export const departmentLabels: Record<Department, string> = {
  Product: "프로덕트",
  Engineering: "엔지니어링",
  Business: "비즈니스",
  People: "피플",
};

export const employmentTypeLabels: Record<EmploymentType, string> = {
  "Full-time": "정규직",
  Contract: "계약직",
};

export const experienceLevelLabels: Record<ExperienceLevel, string> = {
  Entry: "신입",
  Experienced: "경력",
};

export const pipelineStageLabels: Record<CandidateStage, string> = {
  applied: "지원",
  screening: "서류 검토",
  interview: "면접",
  final: "최종",
  offer: "오퍼",
};

export const funnelStageLabels: Record<string, string> = {
  Applied: "지원",
  "Screening Passed": "서류 검토 통과",
  Interview: "면접",
  Final: "최종",
  Offer: "오퍼",
  Hired: "채용 완료",
};

export const hiringStepLabels: Record<string, string> = {
  Application: "지원",
  "Resume Review": "서류 검토",
  "Job Interview": "직무 면접",
  "Culture Interview": "컬처 인터뷰",
  Decision: "결과 안내",
  Offer: "오퍼",
};

export const sourceInvestigationLabels: Record<string, string> = {
  "Traffic Source": "유입 경로",
  "JD Targeting": "JD 타깃",
  "Candidate Persona": "후보자 페르소나",
  "Application Quality": "지원 품질",
};

export const sourceLabels: Record<string, string> = {
  Wanted: "Wanted",
  "Career Site": "Career Site",
  Referral: "임직원 추천",
  "사람인": "사람인",
  "잡코리아": "잡코리아",
};

export function formatExperience(value: string) {
  if (value === "Entry / Experienced") return "신입 / 경력";
  if (value.endsWith("+ Years")) return `경력 ${value.replace("+ Years", "년 이상")}`;
  if (value.endsWith(" Years")) return `경력 ${value.replace(" Years", "년")}`;
  return value;
}

export function formatDays(value: string) {
  return value.replace(/\s*Days?/g, "일");
}
