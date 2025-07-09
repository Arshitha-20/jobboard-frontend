'use client';

import {
  Card,
  Text,
  TextInput,
  Button,
  Textarea,
  Group,
  NumberInput,
  Flex,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm, Controller } from 'react-hook-form';
import { Select } from '@mantine/core';

interface JobFormData {
  title: string;
  company: string;
  location: string;
  jobType: string;
  salaryMin: number;
  salaryMax: number;
  deadline: Date | null;
  description: string;
}

export default function CreateJobForm({ onSuccess }: { onSuccess: () => void }) {
  const { control, handleSubmit, register } = useForm<JobFormData>({
    defaultValues: {
      title: '',
      company: '',
      location: '',
      jobType: '',
      salaryMin: 0,
      salaryMax: 1200000,
      deadline: null,
      description: '',
    },
  });

  const onSubmit = async (data: JobFormData) => {
  console.log('Form submitted:', data);
  alert('Submitting to backend!');

  try {
    const response = await fetch('https://jobboard-backend-rfjn.onrender.com/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    alert('Job created!');
    onSuccess();
  } catch (error) {
    alert(`Error: ${error}`);
    console.error('❌ Error creating job:', error);
  }
};


  return (
    <Card
      withBorder
      shadow="md"
      radius="lg"
      p="xl"
      style={{
        width: '100%',
        maxWidth: 800,   // Expanded width
        margin: '0 auto',
      }}
    >
      <Text fw={600} size="lg" mb="lg" ta="center">
        Create Job Opening
      </Text>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex
          direction="row"
          gap="md"
          wrap="wrap"
          justify="flex-start"
          align="flex-start"
        >
          <TextInput
            label="Job Title"
            placeholder="Full Stack Developer"
            {...register('title')}
            style={{ flex: '1 1 300px' }}
          />

          <TextInput
            label="Company Name"
            placeholder="Amazon, Microsoft, Swiggy"
            {...register('company')}
            style={{ flex: '1 1 300px' }}
          />

          <Controller
            control={control}
            name="location"
            render={({ field }) => (
              <Select
                label="Location"
                placeholder="Choose Preferred Location"
                data={['Chennai', 'Bangalore', 'Hyderabad']}
                {...field}
                style={{ flex: '1 1 300px' }}
              />
            )}
          />

          <Controller
            control={control}
            name="jobType"
            render={({ field }) => (
              <Select
                label="Job Type"
                placeholder="Full Time"
                data={['Internship', 'Full Time', 'Part Time', 'Contract']}
                {...field}
                style={{ flex: '1 1 300px' }}
              />
            )}
          />

          {/* Salary Min / Max / Deadline on one row */}
          <Flex
            gap="md"
            wrap="nowrap"    // Force single line
            style={{
              width: '100%',
              overflowX: 'auto',
            }}
          >
            <Controller
              control={control}
              name="salaryMin"
              render={({ field }) => (
                <NumberInput
                  label="Salary Min"
                  placeholder="₹0"
                  min={0}
                  step={10000}
                  value={Number(field.value)}
                  onChange={(val) => field.onChange(val ?? 0)}
                  style={{ flex: '1 1 0', minWidth: 200 }}
                />
              )}
            />

            <Controller
              control={control}
              name="salaryMax"
              render={({ field }) => (
                <NumberInput
                  label="Salary Max"
                  placeholder="₹12,00,000"
                  min={0}
                  step={10000}
                  value={Number(field.value)}
                  onChange={(val) => field.onChange(val ?? 0)}
                  style={{ flex: '1 1 0', minWidth: 200 }}
                />
              )}
            />

            <Controller
              control={control}
              name="deadline"
              render={({ field }) => (
                <DateInput
                  label="Application Deadline"
                  placeholder="Select Date"
                  value={field.value}
                  onChange={field.onChange}
                  style={{ flex: '1 1 0', minWidth: 200 }}
                />
              )}
            />
          </Flex>

          <Textarea
            label="Job Description"
            placeholder="Please share a description to let the candidate know more about the job role"
            autosize
            minRows={4}
            {...register('description')}
            style={{ flex: '1 1 100%' }}
          />
        </Flex>

        <Group justify="space-between" mt="xl">
          <Button
            variant="outline"
            color="dark"
            type="button"
            radius="md"
            style={{
              padding: '10px 24px',
              border: '1px solid black',
            }}
          >
            Save Draft
          </Button>
          <Button
            type="submit"
            radius="md"
            style={{
              backgroundColor: '#00AAFF',
              color: 'white',
              padding: '10px 24px',
            }}
          >
            Publish →
          </Button>
        </Group>
      </form>
    </Card>
  );
}
