export type RecruitingSummary = {
  openRoles: number;
  candidates: number;
  interviews: number;
  offers: number;
};

export type FunnelStage = {
  stage: string;
  candidates: number;
  conversionRate?: number;
};

export type SchedulingInsight = {
  title: string;
  current: string;
  previous: string;
  change: string;
  insight: string;
  hypothesis: string;
  action: string[];
  measure: string;
  target: string;
};

export type SourceMetric = {
  source: string;
  applied: number;
  interviewed: number;
  hired: number;
};

export type DepartmentHiringMetric = {
  department: string;
  averageDays: number;
};

export type HiringBreakdownStage = {
  stage: string;
  days: number;
};

export type SourceInsight = {
  source: string;
  observation: string;
  action?: string;
  investigation?: string[];
};

export type BottleneckInsight = {
  totalMetric: string;
  totalDays: number;
  stage: string;
  stageDays: number;
  observation: string;
  hypothesis: string;
  actions: string[];
  measure: string;
  target: string;
};

export const recruitingSummary: RecruitingSummary = {
  openRoles: 6,
  candidates: 128,
  interviews: 14,
  offers: 3,
};

export const hiringFunnel: FunnelStage[] = [
  { stage: "Applied", candidates: 128 },
  { stage: "Screening Passed", candidates: 40, conversionRate: 31.3 },
  { stage: "Interview", candidates: 18, conversionRate: 45.0 },
  { stage: "Final", candidates: 7, conversionRate: 38.9 },
  { stage: "Offer", candidates: 3, conversionRate: 42.9 },
  { stage: "Hired", candidates: 2, conversionRate: 66.7 },
];

export const schedulingInsight: SchedulingInsight = {
  title: "Interview Scheduling",
  current: "4.8 Days",
  previous: "3.5 Days",
  change: "+1.3 Days",
  insight: "최근 Interview Scheduling 시간이 증가하고 있다.",
  hypothesis:
    "면접관과 후보자가 이메일이나 메신저를 통해 여러 차례 일정을 조율하면서 Scheduling Lead Time이 증가했을 가능성이 있다.",
  action: [
    "면접관의 Interview Availability를 사전에 등록한다.",
    "후보자가 가능한 시간 중 직접 선택할 수 있도록 한다.",
  ],
  measure: "Average Scheduling Lead Time",
  target: "4.8 Days → < 3 Days",
};

export const analyticsRoleFilters = ["All Roles", "Product", "Engineering", "Business", "People"] as const;

export const sourcePerformance: SourceMetric[] = [
  { source: "Wanted", applied: 52, interviewed: 8, hired: 1 },
  // Career Site includes LinkedIn traffic in the updated source taxonomy.
  { source: "Career Site", applied: 61, interviewed: 9, hired: 2 },
  { source: "Referral", applied: 15, interviewed: 5, hired: 2 },
  { source: "사람인", applied: 18, interviewed: 3, hired: 1 },
  { source: "잡코리아", applied: 12, interviewed: 2, hired: 0 },
];

export const sourceInsights: SourceInsight[] = [
  {
    source: "Referral",
    observation: "임직원 추천은 지원자 수는 가장 적지만 Interview와 Hire로 이어지는 비율이 상대적으로 높게 나타난다.",
    action: "Employee Referral 활성화를 검토한다.",
  },
  {
    source: "Career Site",
    observation: "Career Site는 지원량 대비 Interview 전환이 낮게 나타난다.",
    investigation: ["Traffic Source", "JD Targeting", "Candidate Persona", "Application Quality"],
  },
];

export const departmentTimeToHire: DepartmentHiringMetric[] = [
  { department: "Product", averageDays: 26 },
  { department: "Engineering", averageDays: 34 },
  { department: "Business", averageDays: 21 },
  { department: "People", averageDays: 24 },
];

export const engineeringHiringBreakdown: HiringBreakdownStage[] = [
  { stage: "Sourcing", days: 6 },
  { stage: "Resume Review", days: 4 },
  { stage: "Interview Scheduling", days: 10 },
  { stage: "Interview", days: 8 },
  { stage: "Offer", days: 6 },
];

export const bottleneckInsight: BottleneckInsight = {
  totalMetric: "Engineering Time to Hire",
  totalDays: 34,
  stage: "Interview Scheduling",
  stageDays: 10,
  observation: "현재 단계 중 가장 긴 단일 구간이다.",
  hypothesis:
    "면접관과 후보자가 이메일이나 메신저로 가능한 시간을 여러 차례 조율하면서 Scheduling Lead Time이 증가했을 가능성이 있다.",
  actions: ["Interviewer Availability 사전 등록", "Candidate Self Scheduling"],
  measure: "Average Interview Scheduling Lead Time",
  target: "10 Days → < 5 Days",
};
