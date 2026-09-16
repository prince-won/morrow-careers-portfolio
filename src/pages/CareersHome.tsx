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
          <h1><span>Make tomorrow</span><br /><em>worth working for.</em></h1>
          <p className="home-hero-description">더 나은 일의 방식을 만드는 사람들을 찾습니다.</p>
          <Link className="primary-button" to="/jobs">
            채용 중인 포지션 보기 <ArrowRight size={17} strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </div>
        <div className="home-hero-aside">
          <figure className="home-hero-media">
            <img src="/images/morrow-careers-collaboration.png" alt="Morrow 팀이 노트북을 보며 함께 제품을 논의하는 모습" />
            <figcaption className="home-hero-media-caption">
              <span>Morrow / 2026</span>
              <span>함께 문제를 정의하고, 더 나은 다음을 만듭니다.</span>
            </figcaption>
          </figure>
          <div className="home-hero-aside-footer">
            <span>서울 · B2C Productivity / SaaS</span>
            <Link className="aside-link" to="/process">채용 과정 보기 <ArrowRight size={15} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="home-section home-company-section">
        <div className="section-heading-row">
          <div>
            <h2>Small details.<br />Meaningful progress.</h2>
          </div>
          <p className="section-intro">Morrow는 각자의 전문성이 하나의 제품 경험으로 이어질 때 더 나은 일이 만들어진다고 믿습니다.</p>
        </div>
        <div className="home-company-showcase">
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
          <figure className="home-company-media">
            <img src="/images/morrow-team.png" alt="Morrow 팀이 제품 아이디어를 함께 살펴보는 모습" loading="lazy" />
            <figcaption>함께 문제를 정의하고, 더 나은 다음을 만듭니다.</figcaption>
          </figure>
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
        <figure className="featured-visual">
          <img src="/images/morrow-featured-jobs.png" alt="Morrow에서 제품을 만들며 사용하는 작업 도구들" loading="lazy" />
          <figcaption>각자의 방식으로, 함께 제품을 만듭니다.</figcaption>
        </figure>
        <div className="featured-job-grid">
          {featuredJobs.map((job) => <JobCard key={job.id} job={job} featured />)}
        </div>
      </section>

      <section className="home-closing-cta">
        <div className="home-closing-copy">
          <h2>There might be a place<br />for your way of thinking here.</h2>
          <Link className="outline-button" to="/jobs">열린 포지션 살펴보기 <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
        <figure className="home-closing-media">
          <img src="/images/morrow-closing.png" alt="Morrow의 빈 자리를 상징하는 차분한 의자와 빛" loading="lazy" />
        </figure>
      </section>
    </div>
  );
}
