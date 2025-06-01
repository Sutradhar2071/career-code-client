import React from 'react';
import JobCard from '../../shared/JobCard';

// Custom hook to resolve Promise
function usePromise(promise) {
  if (!promise._status) {
    let status = 'pending';
    let result;
    let suspender = promise.then(
      (res) => {
        status = 'success';
        result = res;
      },
      (err) => {
        status = 'error';
        result = err;
      }
    );
    promise._status = () => {
      if (status === 'pending') throw suspender;
      if (status === 'error') throw result;
      return result;
    };
  }

  return promise._status();
}

const HotJobs = ({ jobsPromise }) => {
  const jobs = usePromise(jobsPromise);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-6">🔥 Hot Jobs</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center'>
        {
          jobs.map(job=> <JobCard key={job._id} job={job}></JobCard>)
        }
      </div>
    </div>
  );
};

export default HotJobs;
