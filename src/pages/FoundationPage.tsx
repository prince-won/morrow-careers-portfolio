import { ArrowRight, Check, Compass, Layers3 } from "lucide-react";
import { Link } from "react-router-dom";

type FoundationPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  route: string;
  recruiter?: boolean;
};

export function FoundationPage({ eyebrow, title, description, route, recruiter = false }: FoundationPageProps) {
  return (
    <section id={route === "/case-study" ? "job-definition" : undefined} className={`foundation-page ${recruiter ? "foundation-page-recruiter" : ""}`}>
      <div className="foundation-hero">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="foundation-description">{description}</p>
        <div className="foundation-route">
          <span className="route-dot" aria-hidden="true" />
          <code>{route}</code>
          <span>·</span>
          <span>Morrow Careers</span>
        </div>
      </div>

      <div className="foundation-grid">
        <article className="foundation-card foundation-card-primary">
          <div className="card-icon" aria-hidden="true">
            <Compass size={20} strokeWidth={1.6} />
          </div>
          <p className="card-kicker">지원자 경험</p>
          <h2>{recruiter ? "A calmer way to run recruiting." : "A clearer way to explore Morrow."}</h2>
          <p>
            {recruiter
              ? "운영 화면은 한눈에 이해되고 다음 판단으로 이어지도록 설계합니다."
              : "지원자가 필요한 정보를 예측 가능하게 만나는 경험을 설계합니다."}
          </p>
        </article>
        <article className="foundation-card">
          <div className="card-icon" aria-hidden="true">
            <Layers3 size={20} strokeWidth={1.6} />
          </div>
          <p className="card-kicker">공통 디자인 시스템</p>
          <ul className="foundation-list">
            <li><Check size={16} aria-hidden="true" />따뜻하고 읽기 쉬운 색상 토큰</li>
            <li><Check size={16} aria-hidden="true" />충분한 여백</li>
            <li><Check size={16} aria-hidden="true" />지원자·채용 담당자 화면의 연결</li>
          </ul>
        </article>
      </div>

      <div className="foundation-next">
        <div>
          <p className="card-kicker">관련 화면</p>
          <p>{recruiter ? "현재 채용 담당자 화면을 살펴봅니다." : "열린 포지션과 지원자 여정을 살펴봅니다."}</p>
        </div>
        <Link className="text-link" to={recruiter ? "/recruiter/pipeline" : "/jobs"}>
          {recruiter ? "파이프라인 보기" : "열린 포지션 보기"} <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
