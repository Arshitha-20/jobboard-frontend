'use client';

import { useState } from 'react';
import { Modal, Button } from '@mantine/core';
import CreateJobForm from './CreateJobForm';

export default function CreateJobModal({ onJobCreated }: { onJobCreated: () => void }) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpened(true)}
        radius="md"
        style={{
          backgroundColor: '#00AAFF',
          color: 'white',
          padding: '10px 24px',
          marginBottom: '1rem',
        }}
      >
        + Create Job
      </Button>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create Job Posting"
        size="xl"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <CreateJobForm
          onSuccess={() => {
            setOpened(false);
            onJobCreated();
          }}
        />
      </Modal>
    </>
  );
}
