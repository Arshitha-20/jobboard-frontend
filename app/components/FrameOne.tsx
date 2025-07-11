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
import { IconSearch, IconMapPin } from '@tabler/icons-react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { useDisclosure } from '@mantine/hooks';
import CreateJobForm from './CreateJobForm';
import { IconChevronDown } from '@tabler/icons-react';
import { Job } from './FrameShowingJobs'; // ✅ adjust path if needed
import { useEffect } from 'react';


interface FrameOneProps {
  onFilter: (filteredJobs: Job[]) => void;
  allJobs: Job[];
}

export default function FrameOne({   onFilter,
  allJobs,
}: {
  onFilter: (filteredJobs: Job[]) => void;
  allJobs: Job[];
}) {
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
    const filtered = allJobs.filter((job: Job) => {
      const titleMatch = data.jobTitle
        ? job.title.toLowerCase().includes(data.jobTitle.toLowerCase())
        : true;

      const typeMatch = data.jobType
        ? job.type.toLowerCase() === data.jobType.toLowerCase()
        : true;

  

      return titleMatch && typeMatch;
    });

    onFilter(filtered);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !opened) {
        e.preventDefault();
        handleSubmit(onSubmit)();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleSubmit, onSubmit, opened]);

  return (
    <>
      {/* Create Job Modal */}
      <Modal
        opened={opened}
        onClose={close}
        size="xl"
        centered
        overlayProps={{ blur: 3, opacity: 0.55 }}
      >
        <CreateJobForm onSuccess={close} />
      </Modal>

      {/* Header & Filters Box */}
      <Box
        style={{
          width: '100%',
          backgroundColor: '#FCFCFC',
          boxShadow: '0 0 14px rgba(198, 191, 191, 0.25)',
          padding: '24px 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* ======== Navbar ======== */}
        <Box
          style={{
            width: '810px',
            marginBottom: '28px',
            height: '80px',
            borderRadius: '122px',
            backgroundColor: 'white',
            boxShadow: '0 5px 5px rgba(0, 0, 0, 0.05)',
            padding: '0 26px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Flex align="center" gap="30px" style={{ width: '100%' }}>
            <Image src="/logo.png" alt="Logo" width={44} height={45} />

            <Flex align="center" gap="11px" style={{ flexGrow: 1, overflowX: 'auto' }}>
              {['Home', 'Find Jobs', 'Find Talents', 'About us', 'Testimonials'].map((label) => (
                <Box
                  key={label}
                  px="5px"
                  py="5px"
                  style={{
                    width: '102px',
                    height: '48px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text fw={500} size="16px" style={{ color: 'black' }}>
                    {label}
                  </Text>
                </Box>
              ))}
            </Flex>

            <Button
              onClick={open}
              style={{
                width: '123px',
                height: '38px',
                borderRadius: '30px',
                background: 'linear-gradient(90deg, #A128FF 0%, #6100AD 100%)',
              }}
              radius="xl"
            >
              Create Jobs
            </Button>
          </Flex>
        </Box>

        {/* ======== Filters Section ======== */}
        <Box
          style={{
            width: '100%',
            maxWidth: '1440px',
            height:'70px',
            padding: '16px 16px',
            borderBottom: '#FAFAFA',
            backgroundColor:'#FCFCFC',
            alignContent:'center'
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex justify="stretch" align="center" wrap="nowrap" gap="md">
              <Flex align="center" gap={40} style={{ flexGrow: 1, flexWrap: 'wrap' }}>
                {/* Job Title Input */}
                <Flex align="center" gap="8px" style={{ minWidth: '179px' }}>
                  <IconSearch size={18} color="#808080" stroke={1.5} />
                  <Input
                    variant="unstyled"
                    placeholder="Search By Job Title, Role"
                    {...register('jobTitle')}
                    styles={{
                      input: {
                        fontWeight: 400,
                        fontSize: '18px',
                        color: '#3A3A3A',
                      },
                    }}
                  />
                </Flex>

                <Divider orientation="vertical"  color="#E0E0E0" size={2} />

                {/* Location Filter */}
                <Flex align="center" gap="8px" style={{ minWidth: '134px' }}>
                  <IconMapPin size={25} color="#808080" stroke={1.5} />
                  <Select
                    data={[
                      { value: 'chennai', label: 'Chennai' },
                      { value: 'Banglore', label: 'Banglore'},

                    ]}
                    placeholder="Preferred Location"
                    variant="unstyled"
                    onChange={(val) => setValue('location', val || '')}
                    rightSection={<IconChevronDown size={20} color="#686868" />}
                    styles={{
                      input: {
                        fontWeight: 400,
                        fontSize: '18px',
                        color: 'black',
                      },
                    }}
                  />
                </Flex>

                <Divider orientation="vertical"  color="#E0E0E0" size={2} />

                {/* Job Type Filter */}
                <Flex align="center" gap="8px" style={{ minWidth: '140px' }}>
                  <img src="filter.jpg" height={20} width={20} />
                  <Select
                    data={[
                      { value: 'online', label: 'Online' },
                      { value: 'remote', label: 'Remote' },
                      { value: 'onsite', label: 'Onsite' },
                    ]}
                    placeholder="Job Type"
                    variant="unstyled"
                    onChange={(val) => setValue('jobType', val || '')}
                    rightSection={<IconChevronDown size={20} color="#686868" />}
                    styles={{
                      input: {
                        fontWeight: 400,
                        fontSize: '18px',
                        color: '#1A1A1A',
                      },
                    }}
                  />
                </Flex>

                <Divider orientation="vertical"  color="#E0E0E0" size={2} />

                {/* Salary Slider */}
                <Flex direction="column" gap="xs" style={{ minWidth: '220px' }}>
                  <Flex align="center" justify="space-between">
                    <Text size="sm" fw={500} color="black">
                      Salary Per Month
                    </Text>
                    <Text size="sm" fw={500}>
                      ₹{(watch('salaryRange')?.[0] ?? 50)}k - ₹{(watch('salaryRange')?.[1] ?? 100)}k
                    </Text>
                  </Flex>
                  <RangeSlider
                    min={50}
                    max={100}
                    step={10}
                    color="black"
                    value={(watch('salaryRange') as [number, number]) ?? [50, 80]}
                    onChange={(val: [number, number]) => setValue('salaryRange', val)}
                    styles={{
                      track: { height: '2px' },
                      thumb: { width: '14px', height: '14px' },
                    }}
                    size="md"
                  />
                  <Button type="submit" style={{ display: 'none' }}>
                    Submit
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </form>
        </Box>
      </Box>
    </>
  );
}
