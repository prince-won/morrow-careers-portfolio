import { BarChart3, BriefcaseBusiness, LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  { label: "개요", to: "/recruiter", icon: LayoutDashboard, end: true },
  { label: "파이프라인", to: "/recruiter/pipeline", icon: BriefcaseBusiness },
  { label: "분석", to: "/recruiter/analytics", icon: BarChart3 },
];

export function RecruiterSidebar() {
  return (
    <aside className="recruiter-sidebar" aria-label="채용 담당자 화면 탐색">
      <p className="sidebar-label">작업 공간</p>
      <nav>
        {links.map(({ label, to, icon: Icon, end }) => (
          <NavLink key={to} to={to} end={end}>
            <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-note">
        <span className="status-dot" aria-hidden="true" />
        <span>2026년 9월 채용 사이클</span>
      </div>
    </aside>
  );
}
