import React from 'react';
import { Box, Tooltip, Paper, Typography } from '@mui/material';
import { formatMetricValue } from '../utils/formatters';
import { getDayName } from '../utils/dates';

/**
 * HeatmapCell component represents a single data point in the heatmap
 * Features:
 * - Color intensity based on value relative to maximum
 * - Interactive tooltip with detailed information
 * - Hover effects for better UX
 */
const HeatmapCell = ({
  value,
  maxValue,
  day,
  hour,
  metric,
  campaignName,
}) => {
  const intensity = value / maxValue;
  const backgroundColor = `rgba(99, 102, 241, ${Math.max(0.1, intensity)})`;
  
  const formattedValue = formatMetricValue(value, metric);
  const dayName = getDayName(day);
  
  const tooltipContent = (
    <Box sx={{ p: 1 }}>
      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
        {campaignName}
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 1 }}>
        <Typography variant="body2" color="text.secondary">Day:</Typography>
        <Typography variant="body2">{dayName}</Typography>
        <Typography variant="body2" color="text.secondary">Time:</Typography>
        <Typography variant="body2">{`${hour}:00`}</Typography>
        <Typography variant="body2" color="text.secondary">{metric.toUpperCase()}:</Typography>
        <Typography variant="body2">{formattedValue}</Typography>
      </Box>
    </Box>
  );

  return (
    <Tooltip title={tooltipContent} arrow>
      <Paper
        elevation={0}
        sx={{
          width: 36,
          height: 36,
          backgroundColor,
          m: '2px',
          transition: 'all 0.2s ease-in-out',
          cursor: 'pointer',
          borderRadius: '6px',
          '&:hover': {
            transform: 'scale(1.1)',
            zIndex: 1,
            boxShadow: '0 8px 24px rgba(99, 102, 241, 0.15)',
          },
        }}
      />
    </Tooltip>
  );
};

export default HeatmapCell;