export type HiringJourneyStep = {
  number: string;
  title: string;
  description: string;
  duration?: string;
};

export type CandidatePromise = {
  number: string;
  title: string;
  description: string;
};

export const hiringJourney: HiringJourneyStep[] = [
  {
    number: "01",
    title: "Application",
    description: "포지션 상세에서 지원서를 작성하고, 지원 즉시 접수 완료 안내를 받습니다.",
  },
  {
    number: "02",
    title: "Resume Review",
    description: "최대 3영업일 이내 결과 안내",
  },
  {
    number: "03",
    title: "Job Interview",
    duration: "약 60분",
    description: "직무 경험과 문제 해결 방식을 이야기합니다.",
  },
  {
    number: "04",
    title: "Culture Interview",
    duration: "약 60분",
    description: "협업 방식과 업무 환경에 대해 이야기합니다.",
  },
  {
    number: "05",
    title: "Decision",
    description: "안내한 일정 내 결과 전달",
  },
  {
    number: "06",
    title: "Offer",
    description: "처우 및 입사 일정 협의",
  },
];

export const candidatePromises: CandidatePromise[] = [
  {
    number: "01",
    title: "결과 예정일을 안내합니다.",
    description: "지원자가 언제까지 기다려야 하는지 알 수 있도록 합니다.",
  },
  {
    number: "02",
    title: "필요한 정보를 먼저 제공합니다.",
    description: "면접 방식과 시간, 참석자를 사전에 안내합니다.",
  },
  {
    number: "03",
    title: "불필요한 절차를 줄입니다.",
    description: "각 인터뷰에는 명확한 평가 목적을 둡니다.",
  },
  {
    number: "04",
    title: "결과와 관계없이 커뮤니케이션합니다.",
    description: "모든 지원자에게 결과를 전달합니다.",
  },
];
