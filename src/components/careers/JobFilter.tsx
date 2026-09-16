import type { Department, EmploymentType, ExperienceLevel } from "../../data/jobs";

type FilterValue<T extends string> = "All" | T;

type JobFilterProps = {
  department: FilterValue<Department>;
  experience: FilterValue<ExperienceLevel>;
  employment: FilterValue<EmploymentType>;
  onDepartmentChange: (value: FilterValue<Department>) => void;
  onExperienceChange: (value: FilterValue<ExperienceLevel>) => void;
  onEmploymentChange: (value: FilterValue<EmploymentType>) => void;
};

export function JobFilter({
  department,
  experience,
  employment,
  onDepartmentChange,
  onExperienceChange,
  onEmploymentChange,
}: JobFilterProps) {
  return (
    <div className="job-filter" aria-label="채용 포지션 필터">
      <label>
        <span>직군</span>
        <select value={department} onChange={(event) => onDepartmentChange(event.target.value as FilterValue<Department>)}>
          <option value="All">전체</option>
          <option value="Product">프로덕트</option>
          <option value="Engineering">엔지니어링</option>
          <option value="Business">비즈니스</option>
          <option value="People">피플</option>
        </select>
      </label>
      <label>
        <span>경력</span>
        <select value={experience} onChange={(event) => onExperienceChange(event.target.value as FilterValue<ExperienceLevel>)}>
          <option value="All">전체</option>
          <option value="Entry">신입</option>
          <option value="Experienced">경력</option>
        </select>
      </label>
      <label>
        <span>고용 형태</span>
        <select value={employment} onChange={(event) => onEmploymentChange(event.target.value as FilterValue<EmploymentType>)}>
          <option value="All">전체</option>
          <option value="Full-time">정규직</option>
          <option value="Contract">계약직</option>
        </select>
      </label>
    </div>
  );
}
