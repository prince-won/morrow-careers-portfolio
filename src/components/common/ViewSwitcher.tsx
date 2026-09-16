import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

type ViewSwitcherProps = {
  recruiter?: boolean;
};

export function ViewSwitcher({ recruiter = false }: ViewSwitcherProps) {
  const currentView = recruiter ? "채용 담당자 화면" : "지원자 화면";
  const targetView = recruiter ? "지원자 화면" : "채용 담당자 화면";
  const targetAction = recruiter ? "지원자 화면으로 이동" : "채용 담당자 화면으로 이동";

  return (
    <Link className={`view-switcher ${recruiter ? "is-recruiter" : ""}`} to={recruiter ? "/" : "/recruiter"} aria-label={`현재 ${currentView}. ${targetAction}`}>
      <span className="view-switcher-current"><span className="view-switcher-dot" aria-hidden="true" />{currentView}</span>
      <span className="view-switcher-bridge" aria-hidden="true">↔</span>
      <span className="view-switcher-target">{targetView}</span>
      <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
    </Link>
  );
}
