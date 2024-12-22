import React from 'react';
import { Paper, Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import HeatmapRow from './HeatmapRow';

/**
 * Main Heatmap component that displays campaign performance data in a grid format
 * Supports day selection and multiple campaign visualization
 */
const Heatmap = ({ data, selectedMetric, selectedDay, onDayChange }) => {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  // Calculate maximum value across all campaigns for consistent color scaling
  const maxValue = Math.max(
    ...data.campaigns?.flatMap(campaign => 
      selectedDay === null 
        ? campaign.metrics[selectedMetric]?.flat() || []
        : campaign.metrics[selectedMetric]?.[selectedDay] || []
    ) || []
  );

  return (
    <Paper elevation={3} sx={{ p: 3, overflowX: 'auto' }}>
      {/* Day Selection Toggle Buttons */}
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
        <ToggleButtonGroup
          value={selectedDay}
          exclusive
          onChange={onDayChange}
          aria-label="day selection"
        >
          <ToggleButton value={null} aria-label="all days">
            All Days
          </ToggleButton>
          {days.map((day, index) => (
            <ToggleButton key={day} value={index} aria-label={day}>
              {day.slice(0, 3)}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>

      {data.campaigns?.map(campaign => (
        <HeatmapRow
          key={campaign.campaignId}
          campaign={campaign}
          selectedMetric={selectedMetric}
          maxValue={maxValue}
          hours={hours}
          selectedDay={selectedDay}
        />
      ))}
    </Paper>
  );
};

export default Heatmap;
