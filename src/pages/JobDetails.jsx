import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const job = useLoaderData();
    console.log(job)
    return (
        <div>
            {job.title}
            <img src={job.company_logo} alt="" />
            <p>{job.company}</p>
            <Link to={`/jobApply/${job._id}`}><button className='btn btn-primary'>Apply Now</button></Link>
        </div>
    );
};

export default JobDetails;