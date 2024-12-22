import React, { useState } from 'react';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { MainContent } from './components/MainContent';
import { useCampaigns } from './utils/useCampaign';


function App() {
  // State management for metric selection (clicks/impressions/CTR) and selected day
  const [selectedMetric, setSelectedMetric] = useState('clicks');
  const [selectedDay, setSelectedDay] = useState(null);
  const { data, addCampaign } = useCampaigns();

  const handleMetricChange = (event) => {
    setSelectedMetric(event.target.value);
  };

  const handleDayChange = (event, newDay) => {
    setSelectedDay(newDay);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Left sidebar containing metric controls and campaign management */}
      <Sidebar 
        selectedMetric={selectedMetric} 
        onMetricChange={handleMetricChange}
        onAddCampaign={addCampaign}
      />
      {/* Main content area with header and data visualization */}
      <Box sx={{ flexGrow: 1, marginLeft: '256px' }}>
        <Header />
        <MainContent
          data={data}
          selectedMetric={selectedMetric}
          selectedDay={selectedDay}
          onDayChange={handleDayChange}
        />
      </Box>
    </Box>
  );
}

export default App;
