import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import Heatmap from './Heatmap';
export const MainContent = ({ data, selectedMetric, selectedDay, onDayChange }) => (
  <Box sx={{ p: 3 }}>
    <Paper sx={{ p: 2, borderRadius: 2 }}>
      <Box sx={{ 
        mb: 3, 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        <Typography variant="h6">
          Campaign Performance Heatmap
        </Typography>
      </Box>
        <Heatmap 
        data={data} 
        selectedMetric={selectedMetric} 
        selectedDay={selectedDay}
        onDayChange={onDayChange}
      />
    </Paper>
  </Box>
);