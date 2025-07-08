const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getJobs = async () => {
  const res = await fetch(`${API_URL}/jobs`);
  if (!res.ok) {
    throw new Error('Failed to fetch jobs');
  }
  return res.json();
};

export const createJob = async (data) => {
  const res = await fetch(`${API_URL}/jobs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error('Failed to create job');
  }
  return res.json();
};
