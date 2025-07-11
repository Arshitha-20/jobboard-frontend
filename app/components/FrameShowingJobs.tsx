'use client';

import { Box, Flex, Text } from '@mantine/core';
import JobCard from './JobCard';

/**
 * Define the shape of a Job object.
 */
export interface Job {
  id: string;
  logo: string;
  title: string;
  experience: string;
  type: string;
  salary: string;
  posted: string;
  description?: string;
}

/**
 * This component displays a list of jobs in a grid of JobCards.
 */
export default function FrameShowingJobs({ jobs }: { jobs: Job[] }) {
  return (
    <Box
      style={{
        margin: '20px auto',
        width: '1312px',
        backgroundColor: '#FAFAFA',
        padding: '20px 0',
      }}
    >
      {jobs.length === 0 ? (
        <Text ta="center" c="dimmed" size="lg">
          No jobs found matching filters.
        </Text>
      ) : (
        <Flex gap="16px" wrap="wrap" justify="center" align="flex-start">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              logo={job.logo}
              title={job.title}
              experience={job.experience}
              type={job.type}
              salary={job.salary}
              posted={job.posted}
              description={job.description}
            />
          ))}
        </Flex>
      )}
    </Box>
  );
}
