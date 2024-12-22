import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Button,
  TextField,
  Avatar,
  Badge,
  Tabs,
  Tab,
  InputAdornment,
  Divider,
} from '@mui/material';
import {
  Search,
  Bell,
  Download,
  Filter,
  ChevronDown,
  RefreshCw,
} from 'lucide-react';

const Header = () => {
  const [tabValue, setTabValue] = React.useState(0);

  return (
    <Box sx={{ bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}>
      

      {/* Main Header */}
      <Box sx={{ px: 3, py: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Typography variant="h5" fontWeight="600">Campaign Heatmap</Typography>
          
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          

          <Divider orientation="vertical" flexItem />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar src="https://avatar.iran.liara.run/public" sx={{ width: 32, height: 32 }} />
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Typography variant="body2" fontWeight="500">Saar Agrawal</Typography>
              <Typography variant="caption" color="text.secondary">Analytics Manager</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Navigation Tabs */}
      <Box sx={{ bgcolor: 'grey.50', borderTop: 1, borderColor: 'divider', px: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)}>
            <Tab label="Overview" />
          </Tabs>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Last updated: 5 mins ago
            </Typography>
            <IconButton size="small" onClick={() => window.location.reload()}>
              <RefreshCw size={16} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;