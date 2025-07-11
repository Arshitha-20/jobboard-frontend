

'use client';

import { useEffect, useState } from 'react';

import FrameShowingJobs, { Job } from '../components/FrameShowingJobs';
import FrameOne from '../components/FrameOne';
import { frame2Jobs } from '../components/Frame2';
import { frame3Jobs } from '../components/Frame3';




export default function JobsPage() {
  const allJobs: Job[] = [...frame2Jobs, ...frame3Jobs];
  const [jobs, setJobs] = useState<Job[]>([]);

 // Make sure to import useEffect, useState

useEffect(() => {
    fetch('https://jobboard-backend-rfjn.onrender.com/jobs')
    .then(res => res.json())
    .then(data => {
      // If your backend returns { jobs: [...] }
      if (Array.isArray(data)) {
        setJobs(data);
      } else if (Array.isArray(data.jobs)) {
        setJobs(data.jobs);
      } else {
        console.error('Unexpected data format:', data);
        setJobs([]); // fallback
      }
    })
    .catch(err => {
      console.error('Error fetching jobs:', err);
      setJobs([]);
    });
}, []);


  return (
    <div style={{ padding: 20 }}>
      <h1>Jobs List</h1>
      {jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              <strong>{job.title}</strong> 
            </li>
          ))}
        </ul>
      )}
    </div>
  );
   const handleFilter = (filteredJobs: Job[]) => {
    setJobs(filteredJobs);
  };

  return (
    <div style={{ backgroundColor: '#FAFAFA' }}>
      <FrameOne onFilter={handleFilter} allJobs={allJobs} />
    </div>
  );

}

