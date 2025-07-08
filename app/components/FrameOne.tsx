'use client';

import {
  Box,
  Flex,
  Button,
  Text,
  Input,
  Select,
  RangeSlider,
  Divider,
  Modal,
} from '@mantine/core';
import { IconSearch, IconMapPin, IconBriefcase } from '@tabler/icons-react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { useDisclosure } from '@mantine/hooks';
import CreateJobForm from './CreateJobForm';

export default function FrameOne() {
  const [opened, { open, close }] = useDisclosure(false);
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      jobTitle: '',
      location: '',
      jobType: '',
      salaryRange: [50, 80],
    },
  });

  const onSubmit = (data: any) => {
    console.log('Filters:', data);
  };

  return (
    <>
      {/* This modal is part of the JSX return - it will work */}
      <Modal
        opened={opened}
        onClose={close}
        size="xl"
        centered
        overlayProps={{
          blur: 3,
          opacity: 0.55,
        }}
      >
  <CreateJobForm onSuccess={close} />
</Modal>


      <Box
        style={{
          width: '1440px',
          backgroundColor: '#f9f9f9',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.10)',
          padding: '24px 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* ==================== NAVBAR ==================== */}
        <Box
          style={{
            width: '890px',
            marginBottom: '24px',
            height: '80px',
            borderRadius: '122px',
            backgroundColor: 'white',
            boxShadow: '0 20px 20px rgba(127, 127, 127, 0.15)',
            padding: '0 26px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Flex align="center" gap="30px" style={{ width: '100%' }}>
            <Image
              src="/logo.png"
              alt="Logo"
              width={70}
              height={70}
              style={{ marginTop: '1.66px' }}
            />

            <Flex
              align="center"
              gap="11px"
              style={{
                flexGrow: 1,
                overflowX: 'auto',
              }}
            >
              {['Home', 'Find Jobs', 'Find Talents', 'About us', 'Testimonials'].map(
                (label) => (
                  <Box
                    key={label}
                    px="5px"
                    py="5px"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '102px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: 'transparent',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = '#f5f5f5')
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = 'transparent')
                    }
                  >
                    <Text
                      fw={500}
                      size="16px"
                      style={{
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: 'black',
                      }}
                    >
                      {label}
                    </Text>
                  </Box>
                )
              )}
            </Flex>
            <Button
              onClick={open}
              style={{
                width: '123px',
                height: '38px',
                padding: '8px 24px',
                borderRadius: '30px',
                background: 'linear-gradient(90deg, #A128FF 0%, #6100AD 100%)',
              }}
              radius="xl"
            >
                Create Jobs
            </Button>
          </Flex>
        </Box>

        {/* ==================== FILTERS ==================== */}
        <Box
          style={{
            marginTop: '12px',
            width: '100%',
            maxWidth: '1440px',
            backgroundColor: '#FFFFFF',
            padding: '16px 25px',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.10)',
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex justify="stretch" align="center" wrap="nowrap" gap="md">
              <Flex
                align="center"
                gap="md"
                style={{ flexGrow: 1, flexWrap: 'wrap' }}
              >
                {/* Search By Job Title */}
                <Flex
                  align="center"
                  gap="8px"
                  style={{
                    height: '48px',
                    padding: '0 12px',
                    minWidth: '160px',
                  }}
                >
                  <IconSearch size={18} color="#222" stroke={1.5} />
                  <Input
                    variant="unstyled"
                    placeholder="Search By Job Title, Role"
                    {...register('jobTitle')}
                    styles={{
                      input: {
                        fontWeight: 500,
                        fontSize: '16px',
                        color: '#222',
                      },
                    }}
                  />
                </Flex>

                <Divider orientation="vertical" color="#E0E0E0" />

                {/* Preferred Location */}
                <Flex
                  align="center"
                  gap="8px"
                  style={{
                    height: '48px',
                    padding: '0 12px',
                    minWidth: '160px',
                  }}
                >
                  <IconMapPin size={18} color="#222" stroke={1.5} />
                  <Select
                    data={[
                      { value: 'online', label: 'Online' },
                      { value: 'remote', label: 'Remote' },
                    ]}
                    placeholder="Preferred Location"
                    variant="unstyled"
                    onChange={(val) => setValue('location', val || '')}
                    styles={{
                      input: {
                        fontWeight: 500,
                        fontSize: '16px',
                        color: '#222',
                      },
                    }}
                  />
                </Flex>

                <Divider orientation="vertical" color="#E0E0E0" />

                {/* Job Type */}
                <Flex
                  align="center"
                  gap="8px"
                  style={{
                    height: '48px',
                    padding: '0 12px',
                    minWidth: '140px',
                  }}
                >
                  <IconBriefcase size={18} color="#222" stroke={1.5} />
                  <Select
                    data={[
                      { value: 'full-time', label: 'Full Time' },
                      { value: 'part-time', label: 'Part Time' },
                    ]}
                    placeholder="Job Type"
                    variant="unstyled"
                    onChange={(val) => setValue('jobType', val || '')}
                    styles={{
                      input: {
                        fontWeight: 500,
                        fontSize: '16px',
                        color: '#222',
                      },
                    }}
                  />
                </Flex>

                <Divider orientation="vertical" color="#E0E0E0" />

                {/* Salary Section */}
                <Flex
                  direction="column"
                  gap="xs"
                  style={{
                    minWidth: '220px',
                    padding: '0 12px',
                  }}
                >
                  <Flex align="center" justify="space-between">
                    <Text
                      size="sm"
                      fw={600}
                      style={{
                        color: '#222',
                      }}
                    >
                      Salary Per Month
                    </Text>
                    <Text
                      size="sm"
                      fw={500}
                      style={{
                        color: '#222',
                      }}
                    >
                      ₹{(watch('salaryRange')?.[0] ?? 50)}k - ₹
                      {(watch('salaryRange')?.[1] ?? 100)}k
                    </Text>
                  </Flex>
                  <RangeSlider
                    min={50}
                    max={100}
                    step={10}
                    color="black"
                    value={(watch('salaryRange') as [number, number]) ?? [50, 80]}
                    onChange={(val: [number, number]) =>
                      setValue('salaryRange', val)
                    }
                    styles={{
                      track: { height: '2px' },
                      thumb: { width: '14px', height: '14px' },
                    }}
                    size="md"
                  />
                </Flex>
              </Flex>
            </Flex>
          </form>
        </Box>
      </Box>
    </>
  );
}
