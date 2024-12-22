const API_BASE_URL = 'http://127.0.0.1:5000';

export const fetchCampaignData = async () => {
  const response = await fetch(`${API_BASE_URL}/data`);
  if (!response.ok) throw new Error('Failed to fetch campaign data');
  return response.json();
};

export const createCampaign = async (newCampaign) => {
  const response = await fetch(`${API_BASE_URL}/data`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCampaign),
  });

  if (!response.ok) throw new Error('Failed to add campaign');
  return response.json();
};