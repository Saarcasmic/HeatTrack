import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import HeatmapCell from './HeatmapCell';

/**
 * HeatmapRow component renders a single campaign's data row
 * Displays hourly metrics for either all days or a selected day
 */
const HeatmapRow = ({ campaign, selectedMetric, maxValue, hours, selectedDay }) => {
  const days = Array.from({ length: 7 }, (_, i) => i);
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // Show all days or just the selected day
  const daysToShow = selectedDay === null ? days : [selectedDay];

  return (
    <Paper 
      elevation={0}
      sx={{ 
        mb: 3,
        p: 2,
        backgroundColor: 'background.default',
        borderRadius: 2
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          fontWeight: 600,
          color: 'text.primary'
        }}
      >
        {campaign.name}
      </Typography>

      <Box sx={{ display: 'flex', mb: 2, alignItems: 'center' }}>
        <Box sx={{ width: 135, flexShrink: 0 }} />
        <Box sx={{ display: 'flex', flexWrap: 'nowrap' }}>
          {hours.map(hour => (
            <Typography
              key={hour}
              sx={{
                width: 40,
                fontSize: '0.75rem',
                color: 'text.secondary',
                textAlign: 'center'
              }}
            >
              {`${hour.toString().padStart(1, '0')}:00`}
            </Typography>
          ))}
        </Box>
      </Box>

      {daysToShow.map(day => (
        <Box 
          key={day} 
          sx={{ 
            display: 'flex', 
            mb: 0,
            alignItems: 'center',
            '&:last-child': { mb: 0 }
          }}
        >
          <Typography
            sx={{
              width: 120,
              pr: 2,
              fontSize: '0.875rem',
              color: 'text.secondary',
              fontWeight: 500,
              flexShrink: 0
            }}
          >
            {dayNames[day]}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'nowrap' }}>
            {hours.map(hour => (
              <HeatmapCell
                key={`${day}-${hour}`}
                value={campaign.metrics[selectedMetric]?.[day]?.[hour] || 0}
                maxValue={maxValue}
                day={day}
                hour={hour}
                metric={selectedMetric}
                campaignName={campaign.name}
              />
            ))}
          </Box>
        </Box>
      ))}
    </Paper>
  );
};

export default HeatmapRow;