import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { JobCard } from "../components/careers/JobCard";
import { jobs } from "../data/jobs";
import { departmentLabels } from "../data/labels";

const teams = [
  {
    name: "프로덕트",
    description: "사용자의 문제를 발견하고 제품으로 해결합니다.",
    count: "02",
  },
  {
    name: "엔지니어링",
    description: "안정적이고 확장 가능한 기술을 만듭니다.",
    count: "02",
  },
  {
    name: "비즈니스",
    description: "좋은 제품이 더 많은 사용자에게 도달할 수 있도록 연결합니다.",
    count: "01",
  },
];

const featuredSlugs = ["product-manager", "frontend-engineer", "recruiter"];

export function CareersHome() {
  const featuredJobs = featuredSlugs.map((slug) => jobs.find((job) => job.slug === slug)!);

  return (
    <div className="careers-home">
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="eyebrow">Careers at Morrow</p>
          <h1>Make tomorrow<br /><em>worth working for.</em></h1>
          <p className="home-hero-description">더 나은 일의 방식을 만드는 사람들을 찾습니다.</p>
          <Link className="primary-button" to="/jobs">
            채용 중인 포지션 보기 <ArrowRight size={17} strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </div>
        <div className="home-hero-aside">
          <p className="aside-label">Morrow / 2026</p>
          <p>개인과 팀이 업무와 일상을 더 잘 관리할 수 있도록 돕는 Productivity Platform을 만들고 있습니다.</p>
          <span className="aside-rule" aria-hidden="true" />
          <p className="aside-meta">의도적으로 성장하는 팀<br />서울 · B2C Productivity / SaaS</p>
          <Link className="aside-link" to="/process">채용 과정 보기 <ArrowRight size={15} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="home-section home-company-section">
        <div className="section-heading-row">
          <div>
            <h2>Small details.<br />Meaningful progress.</h2>
          </div>
          <p className="section-intro">Morrow는 각자의 전문성이 하나의 제품 경험으로 이어질 때 더 나은 일이 만들어진다고 믿습니다.</p>
        </div>
        <div className="team-list">
          {teams.map((team) => (
            <div className="team-row" key={team.name}>
              <span className="team-count">{team.count}</span>
              <h3>{team.name}</h3>
              <p>{team.description}</p>
              <ArrowUpRight size={18} strokeWidth={1.7} aria-hidden="true" />
            </div>
          ))}
        </div>
      </section>

      <section className="home-section hiring-status-section">
        <div className="hiring-status-copy">
          <h2>6개의 열린 포지션</h2>
          <p>지금 Morrow와 함께 다음 장면을 만들어갈 동료를 찾고 있습니다.</p>
        </div>
        <div className="hiring-counts">
          <div><span>{departmentLabels.Product}</span><strong>2</strong></div>
          <div><span>{departmentLabels.Engineering}</span><strong>2</strong></div>
          <div><span>{departmentLabels.Business}</span><strong>1</strong></div>
          <div><span>{departmentLabels.People}</span><strong>1</strong></div>
        </div>
      </section>

      <section className="home-section featured-section">
        <div className="section-heading-row section-heading-row-compact">
          <div>
            <h2>주요 포지션</h2>
          </div>
          <Link className="text-link" to="/jobs">모든 포지션 보기 <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
        <div className="featured-job-grid">
          {featuredJobs.map((job) => <JobCard key={job.id} job={job} featured />)}
        </div>
      </section>

      <section className="home-closing-cta">
        <h2>There might be a place<br />for your way of thinking here.</h2>
        <Link className="outline-button" to="/jobs">열린 포지션 살펴보기 <ArrowRight size={17} aria-hidden="true" /></Link>
      </section>
    </div>
  );
}
