'use client';

import { useState, useEffect } from 'react';
import FrameOne from './components/FrameOne';
import FrameShowingJobs from './components/FrameShowingJobs';
import { frame2Jobs } from './components/Frame2';
import { frame3Jobs } from './components/Frame3';
import { Job } from './components/FrameShowingJobs';

export default function HomePage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [allJobs, setAllJobs] = useState<Job[]>([]);

  useEffect(() => {
    const combined = [...frame2Jobs, ...frame3Jobs];
    setJobs(combined);
    setAllJobs(combined);
  }, []);

  const handleFilter = (filtered: Job[]) => {
    setJobs(filtered);
  };

  return (
    <div>
      <FrameOne onFilter={handleFilter} allJobs={allJobs} />
      <FrameShowingJobs jobs={jobs} />
    </div>
  );
}
