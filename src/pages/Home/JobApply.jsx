import React from "react";
import { Link, useParams } from "react-router";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = UseAuth();
  const handleFormApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    const application = {
      jobId,
      aplicant: user.email,
      github,
      linkedIn,
      resume,
    };
    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        // console.log(res.data.insertedId)
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
      <h2>
        Apply for this job: <Link to={`/jobs/${jobId}`}>Details</Link>
      </h2>
      <form onSubmit={handleFormApply}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">LinkedIn</label>
          <input
            type="url"
            className="input"
            name="linkedin"
            placeholder="LinkedIn"
          />

          <label className="label">Github</label>
          <input
            type="url"
            className="input"
            name="github"
            placeholder="github link"
          />

          <label className="label">Resume</label>
          <input
            type="url"
            name="resume"
            className="input"
            placeholder="Resume"
          />
          <input type="submit" className="btn" value="Apply" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
