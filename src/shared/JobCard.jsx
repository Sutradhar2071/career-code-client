import React from "react";
import { Link } from "react-router"; // ✅ এটা ঠিক করো

const JobCard = ({ job }) => {
  const {
    title,
    location,
    company,
    requirements = [],
    salaryRange,
    company_logo,
    description,
    _id
  } = job;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="flex gap-4 p-4">
        <figure className="w-20 h-20 overflow-hidden">
          <img src={company_logo} alt={company} className="w-full h-full object-cover" />
        </figure>
        <div>
          <h2 className="font-bold">{company}</h2>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>

        <p className="text-sm text-gray-600">
          {salaryRange
            ? `${salaryRange.min} - ${salaryRange.max} ${salaryRange.currency}`
            : "Salary info not available"}
        </p>

        <p className="text-sm">{description}</p>

        <div className="card-actions flex flex-wrap gap-1 mt-2">
          {requirements.map((skill, index) => (
            <div key={index} className="badge badge-outline">
              {skill}
            </div>
          ))}
        </div>

        <div className="card-actions justify-end mt-4">
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
