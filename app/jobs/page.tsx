'use client';

import { useEffect, useState } from 'react';
import JobCard from '../components/JobCard';
interface Job {
  id: number;
  title: string;
  company: string;
  location?: string;
  jobType?: string;
  salaryMin?: number;
  salaryMax?: number;
  deadline?: string;
  description?: string;
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetch('https://jobboard-backend-rfjn.onrender.com/jobs')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        console.log('Fetched jobs:', data);
        setJobs(data);
      })
      .catch(err => {
        console.error('Error fetching jobs:', err);
      });
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Jobs List</h1>

      {jobs.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No jobs found.</p>
      ) : (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center'
        }}>
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              title={job.title}
              experience={'0-1 Yr Exp'}
              type={job.jobType ?? 'Full Time'}
              salary={`₹${job.salaryMin ?? 0} - ₹${job.salaryMax ?? 0}`}
              posted={job.deadline ? new Date(job.deadline).toLocaleDateString() : 'N/A'}
              description={job.description}
            />
          ))}
        </div>
      )}
    </div>
  );
}
