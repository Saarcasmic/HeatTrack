import React, { useState } from "react";
import {
    Box,
    Typography,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Button,
    Avatar,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Snackbar,
    Alert,
} from "@mui/material";
import { BarChart3, Plus } from "lucide-react";

const Sidebar = ({ selectedMetric, onMetricChange, onAddCampaign }) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [newCampaign, setNewCampaign] = useState({ name: "", campaignId: "" });
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success",
    });

    const handleOpenDialog = () => setOpenDialog(true);
    const handleCloseDialog = () => {
        setOpenDialog(false);
        setNewCampaign({ name: "", campaignId: "" });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCampaign((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
        const result = await onAddCampaign(newCampaign);
        setSnackbar({
            open: true,
            message: "Campaign added successfully!",
            severity: "success",
        });
        handleCloseDialog();
        } catch (error) {
        setSnackbar({
            open: true,
            message: error.message,
            severity: "error",
        });
        }
    };

    return (
        <Box
        sx={{
            height: "100vh",
            width: 256,
            bgcolor: "grey.900",
            color: "white",
            position: "fixed",
            left: 0,
            top: 0,
            borderRight: "1px solid rgba(255, 255, 255, 0.1)",
        }}
        >
        {/* Header */}
        <Box
            sx={{
            p: 2,
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            alignItems: "center",
            gap: 2,
            }}
        >
            <BarChart3 size={32} color="#6366f1" />
            <Typography variant="h6" fontWeight="bold">
            HeatTrack
            </Typography>
        </Box>
        {/* Main Content */}
        <Box sx={{ p: 2 }}>
            {/* Add Campaign Button */}
            <Button
            fullWidth
            variant="contained"
            startIcon={<Plus size={20} />}
            onClick={handleOpenDialog}
            sx={{ mb: 3 }}
            >
            Add Campaign
            </Button>
            {/* Metric Selector */}
            <FormControl fullWidth variant="outlined" sx={{ mb: 4 }}>
            <InputLabel sx={{ color: "grey.400" }}>Metric</InputLabel>
            <Select
                value={selectedMetric}
                onChange={onMetricChange}
                label="Metric"
                sx={{
                bgcolor: "grey.800",
                color: "white",
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255, 255, 255, 0.1)",
                },
                }}
            >
                <MenuItem value="clicks">Clicks</MenuItem>
                <MenuItem value="impressions">Impressions</MenuItem>
                <MenuItem value="ctr">CTR</MenuItem>
            </Select>
            </FormControl>
            
        </Box>
        {/* Footer */}
        <Box
            sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            p: 2,
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            }}
        >
            <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
            >
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                src="https://avatar.iran.liara.run/public"
                sx={{ width: 32, height: 32 }}
                />
                <Box sx={{ ml: 1 }}>
                <Typography variant="body2">Saar Agrawal</Typography>
                <Typography variant="caption" sx={{ color: "grey.400" }}>
                    Analytics Manager
                </Typography>
                </Box>
            </Box>
            </Box>
        </Box>
        {/* Add Campaign Dialog */}
        <Dialog
            open={openDialog}
            onClose={handleCloseDialog}
            PaperProps={{
            sx: {
                width: "100%",
                maxWidth: "400px",
            },
            }}
        >
            <DialogTitle>Add New Campaign</DialogTitle>
            <DialogContent>
            <Box sx={{ pt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField
                name="campaignId"
                label="Campaign ID"
                value={newCampaign.campaignId}
                onChange={handleInputChange}
                fullWidth
                />
                <TextField
                name="name"
                label="Campaign Name"
                value={newCampaign.name}
                onChange={handleInputChange}
                fullWidth
                />
            </Box>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button
                onClick={handleSubmit}
                variant="contained"
                disabled={!newCampaign.campaignId || !newCampaign.name}
            >
                Add Campaign
            </Button>
            </DialogActions>
        </Dialog>
        {/* Snackbar */}
        <Snackbar
            open={snackbar.open}
            autoHideDuration={6000}
            onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        >
            <Alert
            onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
            severity={snackbar.severity}
            >
            {snackbar.message}
            </Alert>
        </Snackbar>
        </Box>
    );
};

export default Sidebar;
