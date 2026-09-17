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

export const standardHiringProcess: HiringStep[] = [
  { title: "Application" },
  { title: "Resume Review" },
  { title: "Job Interview" },
  { title: "Culture Interview" },
  { title: "Decision" },
  { title: "Offer" },
];

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
    process: standardHiringProcess,
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
    whyHiring:
      "Morrow의 제품 영역이 넓어지면서 기능 단위의 화면 설계를 넘어 여러 기능이 하나의 일관된 사용자 경험으로 연결되도록 설계할 Product Designer가 필요합니다. 제품 사용 과정에서 발생하는 복잡함을 발견하고, 사용자가 더 적은 노력으로 원하는 일을 완성할 수 있도록 정보 구조와 인터랙션을 함께 개선하는 역할입니다.",
    mission:
      "입사 후 6개월 동안 핵심 사용자 흐름을 점검하고, 사용자가 반복적으로 어려움을 겪는 경험을 찾아 Product Manager와 함께 우선순위를 정해 개선합니다.",
    responsibilities: [
      "사용자 Journey 및 핵심 Task Flow 설계",
      "사용자 인터뷰 및 정성적 Feedback 분석",
      "Wireframe / Prototype 제작",
      "Product Manager와 요구사항 및 문제 정의",
      "Engineer와 구현 방식 및 Interaction 협업",
      "Design System을 활용한 일관된 UI 설계",
      "출시 이후 사용자 반응 및 데이터 기반 개선",
    ],
    mustHave: [
      "디지털 Product Design 실무 경험",
      "사용자 문제를 구조적으로 정의할 수 있는 능력",
      "사용자 흐름과 Interaction 설계 경험",
      "Product / Engineering 직군과 협업 경험",
    ],
    niceToHave: [
      "B2C Productivity 또는 SaaS Product 경험",
      "Design System 구축 또는 운영 경험",
      "Usability Test 경험",
      "Product Analytics 데이터를 활용한 개선 경험",
    ],
    process: standardHiringProcess,
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
    whyHiring:
      "Morrow의 사용자가 늘어나면서 새로운 기능을 빠르게 전달하는 것뿐 아니라 제품의 반응성, 접근성, 유지보수성을 안정적으로 관리하는 일이 중요해졌습니다. 사용자가 매일 마주하는 제품의 인터페이스를 빠르고 일관된 경험으로 구현할 Frontend Engineer가 필요합니다.",
    mission:
      "입사 후 6개월 동안 핵심 Product Flow의 Frontend 품질을 점검하고, 반복적으로 발생하는 UI 패턴과 기술 부채를 정리해 개발 생산성과 사용자 경험을 함께 개선합니다.",
    responsibilities: [
      "React 기반 Web Product 개발",
      "Product / Design 요구사항의 기술적 구현",
      "재사용 가능한 UI Component 설계",
      "Frontend Architecture 및 Code Quality 개선",
      "성능 및 접근성 개선",
      "API 연동 및 상태 관리",
      "배포 이후 Error / Performance Monitoring",
    ],
    mustHave: [
      "React 또는 유사 Frontend Framework 실무 경험",
      "JavaScript / TypeScript 기반 개발 경험",
      "REST API 또는 Web API 연동 경험",
      "Product / Design 직군과 협업하며 기능을 구현한 경험",
    ],
    niceToHave: [
      "Design System 또는 Component Library 구축 경험",
      "Web Accessibility 개선 경험",
      "Performance Optimization 경험",
      "B2C 또는 SaaS Product 개발 경험",
    ],
    process: standardHiringProcess,
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
    whyHiring:
      "Morrow의 사용자와 Product 기능이 늘어나면서 서비스 안정성과 데이터 구조, 확장 가능한 Backend Architecture의 중요성이 커지고 있습니다. 새로운 기능을 빠르게 지원하면서도 운영 중 발생하는 문제를 지속적으로 줄일 수 있는 Backend Engineer가 필요합니다.",
    mission:
      "입사 후 6개월 동안 핵심 서비스의 API와 데이터 흐름을 점검하고, 확장 과정에서 발생할 수 있는 성능 및 운영 리스크를 찾아 우선순위가 높은 영역부터 개선합니다.",
    responsibilities: [
      "Product 기능을 지원하는 API 설계 및 개발",
      "Database Schema 설계 및 최적화",
      "서비스 성능 및 안정성 개선",
      "Logging / Monitoring 기반 장애 원인 분석",
      "Frontend Engineer와 API Contract 협업",
      "반복적인 운영 작업의 자동화",
      "기술 부채 및 Legacy Code 개선",
    ],
    mustHave: [
      "Backend 서비스 개발 실무 경험",
      "RDB 또는 NoSQL Database 활용 경험",
      "API 설계 및 운영 경험",
      "운영 환경에서 문제를 분석하고 해결한 경험",
    ],
    niceToHave: [
      "대규모 Traffic 대응 경험",
      "Cloud Infrastructure 활용 경험",
      "Observability / Monitoring 환경 구축 경험",
      "SaaS 또는 B2C Product 개발 경험",
    ],
    process: standardHiringProcess,
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
    whyHiring:
      "Morrow의 개인 사용자 기반이 성장하면서 제품을 새로운 사용자군과 조직에 연결할 Business Opportunity도 함께 늘어나고 있습니다. 단순히 Partnership 수를 늘리는 것이 아니라, 제품과 고객 모두에게 의미 있는 기회를 찾고 실행까지 연결할 Business Development Manager가 필요합니다.",
    mission:
      "입사 후 6개월 동안 Morrow의 핵심 사용자와 시장을 이해하고, 새로운 Partnership 또는 Business Opportunity를 발굴해 실제 검증 가능한 Pilot까지 연결합니다.",
    responsibilities: [
      "신규 Business Opportunity 및 Partnership 발굴",
      "시장 및 경쟁 환경 조사",
      "Potential Partner와 미팅 및 Proposal 진행",
      "Product / Business 요구사항 정리",
      "Partnership 실행 과정 관리",
      "성과 지표 정의 및 결과 분석",
      "Product / Marketing 팀과 Growth Opportunity 발굴",
    ],
    mustHave: [
      "Business Development, Partnership 또는 관련 실무 경험",
      "외부 Partner와 협상 및 커뮤니케이션한 경험",
      "복잡한 정보를 구조화해 Proposal로 정리할 수 있는 능력",
      "Data를 기반으로 Business Opportunity를 판단한 경험",
    ],
    niceToHave: [
      "SaaS 또는 B2C Product 경험",
      "IT 기업 Partnership 경험",
      "신규 Business Model 또는 Pilot Project 경험",
      "영어 Business Communication 경험",
    ],
    process: standardHiringProcess,
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
    whyHiring:
      "Morrow의 팀과 채용 규모가 함께 성장하면서 단순히 지원자를 관리하는 것을 넘어 각 팀이 어떤 사람을 필요로 하는지 명확히 정의하고, 후보자가 일관된 경험을 할 수 있도록 채용 과정을 운영할 Recruiter가 필요합니다. Hiring Manager와 함께 역할을 정의하고, 지원자와의 모든 접점에서 필요한 정보를 제공하며, 채용 데이터를 통해 다음 개선점을 찾는 역할입니다.",
    mission:
      "입사 후 6개월 동안 주요 포지션의 Hiring Need와 Evaluation Criteria를 정리하고, Candidate Journey를 일관되게 운영할 수 있는 기본 Recruiting Process를 구축합니다.",
    responsibilities: [
      "Hiring Manager와 Hiring Need 및 Job Requirement 정리",
      "Job Description 작성 및 관리",
      "지원자 Screening 및 Candidate Communication",
      "Interview Scheduling 및 Process Coordination",
      "Interviewer와 Evaluation Criteria 정렬",
      "Candidate Experience 개선",
      "Recruiting Funnel 및 Source Data 관리",
      "채용 운영상의 Bottleneck 발견 및 개선",
    ],
    mustHave: [
      "사람과 조직의 문제에 관심이 있는 분",
      "여러 이해관계자와 정보를 정리하고 조율할 수 있는 능력",
      "문서로 기준과 정보를 명확하게 전달할 수 있는 능력",
      "반복적인 운영 과정에서 개선점을 발견할 수 있는 태도",
    ],
    niceToHave: [
      "Recruiting 또는 HR 관련 경험",
      "Project Coordination 또는 Operation 경험",
      "Data / Spreadsheet 기반 업무 경험",
      "IT Product 또는 Tech Industry에 대한 이해",
      "Candidate Experience 개선에 관심이 있는 분",
    ],
    process: standardHiringProcess,
  },
];

export const productManagerJob = jobs.find((job) => job.slug === "product-manager")!;
