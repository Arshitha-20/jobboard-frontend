'use client';

import { useEffect, useState } from 'react';
import { getJobs } from '../api/api';


interface Job {
  title: string;
  company: string;
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);

 

useEffect(() => {
  const fetchJobs = async () => {
    try {
      const data = await getJobs();
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  fetchJobs();
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
              <strong>{job.title}</strong> at {job.company}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
