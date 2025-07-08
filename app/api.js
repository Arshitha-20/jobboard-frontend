const API_URL = process.env.REACT_APP_API_URL;

export const getJobs = () =>
  fetch(`${API_URL}/jobs`).then(res => res.json());

export const createJob = (data) =>
  fetch(`${API_URL}/jobs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
