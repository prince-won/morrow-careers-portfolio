import { Navigate, Route, Routes } from "react-router-dom";
import { CandidateLayout } from "./layouts/CandidateLayout";
import { RecruiterLayout } from "./layouts/RecruiterLayout";
import { CareersHome } from "./pages/CareersHome";
import { CaseStudy } from "./pages/CaseStudy";
import { ApplyPage } from "./pages/ApplyPage";
import { JobDetail } from "./pages/JobDetail";
import { Jobs } from "./pages/Jobs";
import { HiringProcess } from "./pages/HiringProcess";
import { RecruiterDashboard } from "./pages/recruiter/RecruiterDashboard";
import { Analytics } from "./pages/recruiter/Analytics";
import { Pipeline } from "./pages/recruiter/Pipeline";

function App() {
  return (
    <Routes>
      <Route element={<CandidateLayout />}>
        <Route
          index
          element={<CareersHome />}
        />
        <Route
          path="jobs"
          element={<Jobs />}
        />
        <Route path="jobs/:slug/apply" element={<ApplyPage />} />
        <Route path="jobs/:slug" element={<JobDetail />} />
        <Route
          path="process"
          element={<HiringProcess />}
        />
        <Route
          path="case-study"
          element={<CaseStudy />}
        />
      </Route>

      <Route path="/recruiter" element={<RecruiterLayout />}>
        <Route
          index
          element={<RecruiterDashboard />}
        />
        <Route
          path="pipeline"
          element={<Pipeline />}
        />
        <Route
          path="analytics"
          element={<Analytics />}
        />
      </Route>

      <Route path="/recruiter/case-study" element={<Navigate to="/case-study" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
