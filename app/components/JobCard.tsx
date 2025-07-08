'use client';

import { Box, Text, Flex, Button, Divider } from '@mantine/core';
import { IconBriefcase, IconMapPin } from '@tabler/icons-react';
import Image from 'next/image';

export default function JobCard({
  logo = 'logo.png',
  title = 'Full Stack Developer',
  experience = '1-3 yr Exp',
  type = 'Onsite',
  salary = '12LPA',
  posted = '24h Ago',
}: {
  logo?: string;
  title?: string;
  experience?: string;
  type?: string;
  salary?: string;
  posted?: string;
  description?:string;
}) {
  return (
    <Box
      style={{
        width: '316px',
        height: '360px',
        borderRadius: '16px',
        backgroundColor: '#FFFFFF',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)', 
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Top Row: Logo and Posted Time */}
      <Flex justify="space-between" align="center" mb={8}>
        {/* Logo Container with Gradient */}
        <Box
          style={{
            width: '83.46px',
            height: '82px',
            top:'16px',
            left:'16px',
            borderRadius: '13.18px',
            border: '1px solid #FFFFFF',
            background: 'linear-gradient(135deg, #FEFEFD 0%, #F1F1F1 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <Image
            src={logo}
            alt='logo'
            width={65.89}
            height={65.89}
            style={{
              borderRadius: '8px',
              objectFit: 'contain',
            }}
          />
        </Box>

        {/* Time Posted Badge */}
        <Box
          style={{
            width: '75px',
            height: '33px',
            borderRadius: '10px',
            padding: '7px 10px',
            backgroundColor: '#B0D9FF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            size="xs"
            fw={500}
            style={{
              color: '#000000',
              fontFamily: 'Satoshi Variable, sans-serif',
              fontSize: '13px',
            }}
          >
            {posted}
          </Text>
        </Box>
      </Flex>

      {/* Job Title */}
      <Box
          style={{
            width: '180px',
           
            
          }}
        ></Box>
      <Text
        fw={700}
        size="20px"
        mt="sm"
        style={{ color: '#222222' }}
      >
        {title}
      </Text>
        <Box
          style={{
            width: '263.08px',
            height: '12px',
            
          }}
        ></Box>
      {/* Job Info */}
      
      <Flex gap="xs" align="center" mt="xs">
               
        <img src="user.png" width={18} height={20}></img>
        <Text size="sm" color="#686868">{experience}</Text>
        <Divider orientation="vertical" color="#D3D3D3" />
        <img src="R.png" width={18} height={20}></img>
        <Text size="sm" color="#686868">{type}</Text>
        <Divider orientation="vertical" color="#D3D3D3" />
        <img src="stack.jpg" width={18} height={20}></img>
        <Text size="sm" color="#686868">{salary}</Text>
      </Flex>

      {/* Description */}
      <Box mt="sm" style={{ flexGrow: 1 }}>
        <Text size="14px" color="#686868" fw={500}  mt={2} py={3} >
          • A user-friendly interface lets you browse stunning photos and videos
        </Text>
        <Text size="14px" color="#686868" fw={500} mt={2} py={3}>
          • Filter destinations based on interests and travel style, and create personalized
        </Text>
      </Box>

      {/* Apply Button */}
      
        <Button
        mt="md"
        style={{
          backgroundColor: '#00AAFF',
          width: '284px',
            height:'46px',
           borderRadius:'10px',
           border:'1px',
            
        }}
      >
        Apply Now
      </Button>
    </Box>
  );
}
