import React, { Suspense } from "react";
import AppicationState from "./AppicationState";
import ApplicationList from "./ApplicationList";
import UseAuth from "../hooks/UseAuth";

const myApplication = (email) => {
  return fetch(`http://localhost:3000/applications?email=${email}`).then(
    (res) => res.json()
  );
};

const MyApplications = () => {
  const { user } = UseAuth();

  return (
    <div>
      <AppicationState></AppicationState>
      <Suspense fallback={"loading....."}>
        <ApplicationList myApplication={myApplication(user.email)}></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
