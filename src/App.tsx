import { Navigate, Route, Routes } from "react-router-dom";
import { CandidateLayout } from "./layouts/CandidateLayout";
import { RecruiterLayout } from "./layouts/RecruiterLayout";
import { CareersHome } from "./pages/CareersHome";
import { CaseStudy } from "./pages/CaseStudy";
import { FoundationPage } from "./pages/FoundationPage";
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
        <Route path="jobs/product-manager" element={<JobDetail />} />
        <Route
          path="jobs/:jobId"
          element={
            <FoundationPage
              eyebrow="지원자 화면 / 포지션 상세"
              title="A clearer brief for better work."
              description="포지션의 미션, 기대하는 경험, 채용 과정을 보여주는 상세 페이지입니다."
              route="/jobs/:id"
            />
          }
        />
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
