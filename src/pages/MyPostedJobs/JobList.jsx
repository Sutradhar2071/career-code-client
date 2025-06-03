import React, { use } from "react";
import { Link } from "react-router";

const JobList = ({ postedPromise }) => {
  const posted = use(postedPromise);
  return (
    <div>
      <h2>{posted.length}</h2>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>View Applications</th>
            </tr>
          </thead>
          <tbody>
            {
                posted.map((post, index)=><tr key={post._id}>
              <th>{index+1}</th>
              <td>{post.title}</td>
              <td>{post.deadline}</td>
              <td><Link to={`/application/${post._id}`}>View Applications</Link></td>
            </tr>)
            }
            
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobList;
