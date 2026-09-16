import { Outlet } from "react-router-dom";
import { Logo } from "../components/common/Logo";
import { ViewSwitcher } from "../components/common/ViewSwitcher";
import { RecruiterSidebar } from "../components/recruiter/RecruiterSidebar";

export function RecruiterLayout() {
  return (
    <div className="app-shell recruiter-shell">
      <header className="recruiter-topbar">
        <Logo recruiter />
        <div className="topbar-actions">
          <span className="workspace-status">내부 작업 공간</span>
          <ViewSwitcher recruiter />
        </div>
      </header>
      <div className="recruiter-body">
        <RecruiterSidebar />
        <main className="recruiter-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
