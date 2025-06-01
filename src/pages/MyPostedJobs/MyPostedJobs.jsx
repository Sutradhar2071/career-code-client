import React, { Suspense } from "react";
import UseAuth from "../../hooks/UseAuth";
import JobList from "./JobList";

// const PostedPromise = (email) => {
//   return fetch(`http://localhost:3000/jobs?email=${email}`).then(
//     (res) => res.json()
//   );

const postedPromise = (email) => {
  return fetch(`http://localhost:3000/jobs?email=${email}`).then((res) =>
    res.json()
  );
};

const MyPostedJobs = () => {
  const { user } = UseAuth();
  return (
    <div>
      <h2 className="text-4xl">my post job</h2>
      <Suspense fallback={'loading....'}>
        <JobList postedPromise={postedPromise(user.email)}></JobList>
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
