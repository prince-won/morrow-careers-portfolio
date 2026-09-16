import { Link } from "react-router-dom";

type LogoProps = {
  recruiter?: boolean;
};

export function Logo({ recruiter = false }: LogoProps) {
  return (
    <Link className="brand-lockup" to={recruiter ? "/recruiter" : "/"} aria-label="Morrow 홈">
      <span className="brand-mark" aria-hidden="true">
        M
      </span>
      <span className="brand-name">Morrow</span>
      {recruiter && <span className="brand-context">/ 채용</span>}
    </Link>
  );
}
