import React from "react";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
  const { user } = UseAuth();

  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    // salary process
    const { min, max, currency, ...newJob } = data;
    newJob.SalaryRange = { min, max, currency };

    // requirements process
    const reqString = newJob.requirements;
    const reqDirty = reqString.split(",");
    const reqClean = reqDirty.map((req) => req.trim());
    newJob.requirements = reqClean;

    // responsibilities
    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((res) => res.trim());
    console.log(newJob);

    newJob.status = "active";

    // database

    axios
      .post("http://localhost:3000/jobs", newJob)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2 className="tex-4x">please, Add job here</h2>
      <form onSubmit={handleAddJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic Info</legend>

          <label className="label">Job Title</label>
          <input
            type="text"
            name="title"
            className="input"
            placeholder="Job Title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            name="company"
            className="input"
            placeholder="Company name"
          />

          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            className="input"
            placeholder="Company Location"
          />

          <label className="label">Company Logo</label>
          <input
            type="url"
            name="company_logo"
            className="input"
            placeholder="Company Logo"
          />
        </fieldset>

        {/*job type */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Type</legend>
          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn"
              value="On-site"
              type="radio"
              name="jobType"
              aria-label="On-site"
            />
            <input
              className="btn"
              value="Remote"
              type="radio"
              name="jobType"
              aria-label="Remote"
            />
            <input
              className="btn"
              value="Hybrid"
              type="radio"
              name="jobType"
              aria-label="Hybrid"
            />
          </div>
        </fieldset>
        {/* job category */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Category</legend>
          <select
            defaultValue="Pick a color"
            name="category"
            className="select"
          >
            <option disabled={true}>Pick a job</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>sales</option>
          </select>
        </fieldset>
        {/* application DeadLine  */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">application DeadLine</legend>

          <input type="date" name="deadline" className="input" />
        </fieldset>

        {/* salary range */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Salary Range</legend>

          <label className="label">Salary Minimum</label>
          <input
            type="text"
            name="min"
            className="input"
            placeholder="Salary Minimum"
          />

          <label className="label">Salary Maximum</label>
          <input
            type="text"
            name="max"
            className="input"
            placeholder="Salary Maximum"
          />

          <label className="label">Currency</label>
          <select
            defaultValue="select a currency"
            name="currency"
            className="select"
          >
            <option disabled={true}>select a currency</option>
            <option>BDT</option>
            <option>USD</option>
            <option>EU</option>
          </select>
        </fieldset>
        {/* Job Description */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Description</legend>
          <textarea
            className="textarea"
            name="description"
            placeholder="Job Description"
          ></textarea>
        </fieldset>

        {/* job Requirements  */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">job Requirements</legend>
          <textarea
            className="textarea"
            name="requirements"
            placeholder="Requirements (by comma)"
          ></textarea>
        </fieldset>

        {/* job Responsibilities  */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">job Responsibilities</legend>
          <textarea
            className="textarea"
            name="responsibilities"
            placeholder="job Responsibilities (by comma)"
          ></textarea>
        </fieldset>
        {/* hr option */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">HR related Info</legend>

          <label className="label">HR Name</label>
          <input
            type="text"
            name="hr_name"
            className="input"
            placeholder="HR Name"
          />

          <label className="label">HR Email</label>
          <input
            type="email"
            name="hr_email"
            className="input"
            defaultValue={user.email}
            placeholder="HR Email"
          />
        </fieldset>
        <input className="btn" type="submit" value="add job" />
      </form>
    </div>
  );
};

export default AddJob;
