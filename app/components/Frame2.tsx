'use client';

import { Box, Flex } from '@mantine/core';
import JobCard from './JobCard';

export default function Frame2() {
  return (
    <Box

      style={{
        height:'360px',
        width:'1312',
        margin: '20px auto',
        top:'265px',
        left:'64px',
        gap:'16px'
      }}
    >
      <Flex
        gap="10px"
        wrap="nowrap"
        justify="center"
        align="flex-start"
      >
        <JobCard
          logo="/amazon.png"
          title="Full Stack Developer"
          experience="1-3 yr Exp"
          type="Onsite"
          salary="12LPA"
          posted="24h Ago"
        />
        <JobCard
          logo="/tesla.png" 
          title="Node Js Developer"
          experience="1-3 yr Exp"
          type="Onsite"
          salary="12LPA"
          posted="24h Ago"
        />
        <JobCard
          logo="/swiggy.png"
          title="UX/UI Designer"
          experience="1-3 yr Exp"
          type="Onsite"
          salary="12LPA"
          posted="24h Ago"
        />
        <JobCard
          logo="/amazon.png"
          title="Full Stack Developer"
          experience="1-3 yr Exp"
          type="Onsite"
          salary="12LPA"
          posted="24h Ago"
        />
      </Flex>
    </Box>
  );
}
