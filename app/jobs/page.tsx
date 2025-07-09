'use client';

import { useEffect, useState } from 'react';

// ✅ Match your backend model
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
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Jobs List</h1>

      {jobs.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No jobs found.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {jobs.map((job) => (
            <li
              key={job.id}
              style={{
                marginBottom: '20px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '16px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
            >
              <h2 style={{ margin: '0 0 8px 0', color: '#0077cc' }}>
                {job.title}
              </h2>
              <p style={{ margin: '4px 0' }}><strong>Company:</strong> {job.company}</p>
              {job.location && (
                <p style={{ margin: '4px 0' }}><strong>Location:</strong> {job.location}</p>
              )}
              {job.jobType && (
                <p style={{ margin: '4px 0' }}><strong>Type:</strong> {job.jobType}</p>
              )}
              <p style={{ margin: '4px 0' }}>
                <strong>Salary:</strong> ₹{job.salaryMin ?? 0} - ₹{job.salaryMax ?? 0}
              </p>
              {job.deadline && (
                <p style={{ margin: '4px 0' }}>
                  <strong>Deadline:</strong> {new Date(job.deadline).toLocaleDateString()}
                </p>
              )}
              {job.description && (
                <p style={{ marginTop: '8px' }}>{job.description}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
