import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import type { Job } from "../../data/jobs";
import { departmentLabels, employmentTypeLabels, formatExperience } from "../../data/labels";

type JobCardProps = {
  job: Job;
  featured?: boolean;
};

export function JobCard({ job, featured = false }: JobCardProps) {
  return (
    <Link className={`job-card ${featured ? "job-card-featured" : ""}`} to={`/jobs/${job.slug}`}>
      <div className="job-card-topline">
        <span className="job-department">{departmentLabels[job.department]}</span>
        <ArrowUpRight size={18} strokeWidth={1.7} aria-hidden="true" />
      </div>
      <h3>{job.title}</h3>
      <p>{job.summary}</p>
      <div className="job-card-meta">
        <span>{formatExperience(job.experience)}</span>
        <span className="meta-divider" aria-hidden="true" />
        <span><MapPin size={14} strokeWidth={1.7} aria-hidden="true" />서울</span>
        <span className="meta-divider" aria-hidden="true" />
        <span>{employmentTypeLabels[job.employmentType]}</span>
      </div>
    </Link>
  );
}
