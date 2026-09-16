import { Outlet } from "react-router-dom";
import { CandidateHeader } from "../components/common/CandidateHeader";
import { Footer } from "../components/common/Footer";

export function CandidateLayout() {
  return (
    <div className="app-shell candidate-shell">
      <CandidateHeader />
      <main className="page-frame">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
