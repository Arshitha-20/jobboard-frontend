'use client';

import { useEffect, useState } from 'react';

interface Job {
  title: string;
  company: string;
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/jobs')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        console.log('Fetched jobs:', data); // ✅ Check this in browser console
        setJobs(data);
      })
      .catch((err) => {
        console.error('Error fetching jobs:', err);
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
              <strong>{job.title}</strong> at {job.company}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
