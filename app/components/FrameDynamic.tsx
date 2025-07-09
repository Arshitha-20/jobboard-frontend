'use client';

import { useEffect, useState } from 'react';
import { Box, Flex, Text } from '@mantine/core';
import JobCard from './JobCard';
import axios from 'axios';

// The shape of a Job from your backend
type Job = {
  id: number;
  title: string;
  company: string;
  location?: string;
  job_type?: string;
  salary_min?: number;
  salary_max?: number;
  deadline?: string;
  description?: string;
};

export default function DynamicFrame() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    axios
      .get<Job[]>('https://jobboard-backend-rfjn.onrender.com/jobs')
      .then((res) => setJobs(res.data))
      .catch((err) => console.error('Error fetching jobs:', err));
  }, []);

  return (
    <Box
      style={{
        height: '360px',
        width: '1312px',
        margin: '20px auto',
        top: '265px',
        left: '64px',
        gap: '16px',
      }}
    >
      <Flex
        gap="10px"
        wrap="nowrap"
        justify="center"
        align="flex-start"
      >
        {jobs.length === 0 ? (
  <p></p>
) : (
  jobs.map((job) => (
    <JobCard
      key={job.id}
      logo={`/logos/${job.company[0].toLowerCase()}.png`}
      title={job.title}
      experience="1-3 yr Exp"
      type={job.job_type || 'Full Time'}
      salary={`₹${job.salary_min ?? 0} - ₹${job.salary_max ?? 0}`}
      posted={job.deadline ? `By ${new Date(job.deadline).toLocaleDateString()}` : 'Open'}
      description={job.description || 'No description provided.'}

    />
  ))
)}

      </Flex>
    </Box>
  );
}
