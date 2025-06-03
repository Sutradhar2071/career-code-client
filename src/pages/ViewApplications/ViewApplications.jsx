import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const applications = useLoaderData();

  const { job_id } = useParams();

  const handleChange = (e, application) => {
    console.log(e.target.value, application);
    axios
      .patch(`http://localhost:3000/applications/${application}`, {
        status: e.target.value,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
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
      <h2 className="text-4xl">
        {applications.length}application{job_id}
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application) => (
              <tr key={application._id}>
                <th>1</th>
                <td>{application.aplicant}</td>
                <td>Quality Control Specialist</td>
                <td>
                  <select
                    defaultValue={application.status}
                    onChange={(e) => handleChange(e, application._id)}
                    className="select"
                  >
                    <option disabled={true}>Update status</option>
                    <option>pending</option>
                    <option>InterView</option>
                    <option>Hired</option>
                    <option>Reject</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
