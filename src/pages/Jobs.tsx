import { useMemo, useState } from "react";
import { JobCard } from "../components/careers/JobCard";
import { JobFilter } from "../components/careers/JobFilter";
import type { Department, EmploymentType, ExperienceLevel } from "../data/jobs";
import { jobs } from "../data/jobs";

type FilterValue<T extends string> = "All" | T;

export function Jobs() {
  const [department, setDepartment] = useState<FilterValue<Department>>("All");
  const [experience, setExperience] = useState<FilterValue<ExperienceLevel>>("All");
  const [employment, setEmployment] = useState<FilterValue<EmploymentType>>("All");

  const filteredJobs = useMemo(
    () => jobs.filter((job) => (
      (department === "All" || job.department === department)
      && (experience === "All" || job.experienceLevel === experience)
      && (employment === "All" || job.employmentType === employment)
    )),
    [department, experience, employment],
  );

  return (
    <div className="jobs-page">
      <section className="jobs-hero">
        <p className="eyebrow">지원자 화면 / 채용 포지션</p>
        <h1>Open positions</h1>
        <p>현재 Morrow와 함께할 6개의 포지션을 찾고 있습니다.</p>
      </section>

      <section className="jobs-toolbar-section" aria-label="채용 포지션 필터">
        <div className="jobs-result-label">
          <span className="jobs-result-number">{filteredJobs.length.toString().padStart(2, "0")}</span>
          <span>개 포지션</span>
        </div>
        <JobFilter
          department={department}
          experience={experience}
          employment={employment}
          onDepartmentChange={setDepartment}
          onExperienceChange={setExperience}
          onEmploymentChange={setEmployment}
        />
      </section>

      <section className="jobs-list" aria-live="polite">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <div className="jobs-empty-state">
            <p className="eyebrow">조건에 맞는 포지션 없음</p>
            <h2>다른 조건을 선택해보세요.</h2>
            <p>현재 조건에 맞는 포지션이 없습니다.</p>
          </div>
        )}
      </section>

      <p className="jobs-disclosure">모든 포지션은 서울 근무이며 현재 정규직으로 열려 있습니다.</p>
    </div>
  );
}
