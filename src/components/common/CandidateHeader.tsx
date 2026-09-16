import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";
import { ViewSwitcher } from "./ViewSwitcher";

const links = [
  { label: "채용 포지션", to: "/jobs" },
  { label: "채용 과정", to: "/process" },
  { label: "프로젝트 사례", to: "/case-study" },
];

export function CandidateHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Logo />
      <nav className={`candidate-nav ${open ? "is-open" : ""}`} aria-label="지원자 화면 탐색">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>
            {link.label}
          </NavLink>
        ))}
        <ViewSwitcher />
      </nav>
      <span className="mobile-view-label">지원자 화면</span>
      <button
        className="menu-button"
        type="button"
        aria-label={open ? "탐색 메뉴 닫기" : "탐색 메뉴 열기"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  );
}
