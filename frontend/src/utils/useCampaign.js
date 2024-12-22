import { useState, useEffect } from 'react';
import { fetchCampaignData, createCampaign } from './api';

export const useCampaigns = () => {
    
    const [data, setData] = useState({ campaigns: [] });
    
    useEffect(() => {
        const loadData = async () => {
            try {
            const jsonData = await fetchCampaignData();
            setData(jsonData);
            } catch (error) {
            console.error('Error fetching data:', error);
            }
        };

        loadData();
    
    }, []);
    
    const addCampaign = async (newCampaign) => {
        try {
            const result = await createCampaign(newCampaign);
            setData(prevData => ({
            ...prevData,
            campaigns: [result, ...prevData.campaigns ]
            }));
            return result;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    return { data, addCampaign };
};