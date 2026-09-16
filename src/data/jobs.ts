export type Department = "Product" | "Engineering" | "Business" | "People";
export type ExperienceLevel = "Entry" | "Experienced";
export type EmploymentType = "Full-time" | "Contract";

export type HiringStep = {
  title: string;
  detail?: string;
};

export type Job = {
  id: string;
  slug: string;
  title: string;
  department: Department;
  experience: string;
  experienceLevel: ExperienceLevel;
  employmentType: EmploymentType;
  location: string;
  summary: string;
  whyHiring?: string;
  mission?: string;
  responsibilities?: string[];
  mustHave?: string[];
  niceToHave?: string[];
  process?: HiringStep[];
};

export const jobs: Job[] = [
  {
    id: "JOB-001",
    slug: "product-manager",
    title: "Product Manager",
    department: "Product",
    experience: "3-7 Years",
    experienceLevel: "Experienced",
    employmentType: "Full-time",
    location: "Seoul",
    summary: "데이터와 사용자 관찰을 통해 제품의 다음 문제를 발견하고 해결합니다.",
    whyHiring:
      "Morrow의 신규 B2C 서비스 사용자가 빠르게 증가하면서 사용자 행동 데이터와 고객 피드백을 기반으로 개선 과제를 발견하고 실행할 Product Manager가 필요합니다.",
    mission: "입사 후 6개월 동안 신규 사용자의 Activation 경험을 분석하고 개선합니다.",
    responsibilities: [
      "사용자 행동 데이터 분석",
      "고객 Feedback 분석",
      "Product 개선 가설 수립",
      "Product Requirement 정의",
      "개발·디자인 직군과 협업",
      "프로젝트 일정 관리",
      "실험 결과 분석",
    ],
    mustHave: [
      "디지털 서비스 관련 실무 경험",
      "데이터 기반 문제 해결 경험",
      "개발·디자인 직군과 협업 경험",
      "구조적으로 문제를 정의하고 문서화할 수 있는 능력",
    ],
    niceToHave: [
      "B2C 서비스 경험",
      "SQL 또는 Product Analytics Tool 활용 경험",
      "A/B Test 경험",
      "Growth Project 경험",
    ],
    process: [
      { title: "Application" },
      { title: "Resume Review" },
      { title: "Job Interview" },
      { title: "Culture Interview" },
      { title: "Decision" },
      { title: "Offer" },
    ],
  },
  {
    id: "JOB-002",
    slug: "product-designer",
    title: "Product Designer",
    department: "Product",
    experience: "3+ Years",
    experienceLevel: "Experienced",
    employmentType: "Full-time",
    location: "Seoul",
    summary: "사용자의 복잡한 문제를 명확하고 따뜻한 제품 경험으로 바꿉니다.",
  },
  {
    id: "JOB-003",
    slug: "frontend-engineer",
    title: "Frontend Engineer",
    department: "Engineering",
    experience: "2+ Years",
    experienceLevel: "Experienced",
    employmentType: "Full-time",
    location: "Seoul",
    summary: "더 많은 사람이 매일의 일을 잘 해낼 수 있도록 제품의 표면을 만듭니다.",
  },
  {
    id: "JOB-004",
    slug: "backend-engineer",
    title: "Backend Engineer",
    department: "Engineering",
    experience: "3+ Years",
    experienceLevel: "Experienced",
    employmentType: "Full-time",
    location: "Seoul",
    summary: "안정적이고 확장 가능한 기반 위에 Morrow의 다음 성장을 설계합니다.",
  },
  {
    id: "JOB-005",
    slug: "business-development-manager",
    title: "Business Development Manager",
    department: "Business",
    experience: "2+ Years",
    experienceLevel: "Experienced",
    employmentType: "Full-time",
    location: "Seoul",
    summary: "좋은 제품이 더 많은 사용자와 팀에 닿을 수 있도록 새로운 연결을 만듭니다.",
  },
  {
    id: "JOB-006",
    slug: "recruiter",
    title: "Recruiter",
    department: "People",
    experience: "Entry / Experienced",
    experienceLevel: "Entry",
    employmentType: "Full-time",
    location: "Seoul",
    summary: "좋은 사람들이 Morrow를 발견하고, 서로를 알아가는 과정을 설계합니다.",
  },
];

export const productManagerJob = jobs.find((job) => job.slug === "product-manager")!;
