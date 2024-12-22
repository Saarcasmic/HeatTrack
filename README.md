# HeatTrack - Campaign Performance Visualization

HeatTrack is a web application that visualizes campaign performance metrics using interactive heatmaps. It allows users to track and analyze campaign metrics like clicks, impressions, and CTR (Click-Through Rate) across different days and hours.

## Preview
[screen-capture (3).webm](https://github.com/user-attachments/assets/b165bb5c-2675-49e9-b7a6-7ad6ed2a63d4)


## Features

- Interactive heatmap visualization of campaign metrics
- Support for multiple campaigns
- Real-time metric switching between Clicks, Impressions, and CTR
- Day-wise filtering
- Add new campaigns dynamically
- Responsive design with dark mode sidebar

## Tech Stack

### Frontend
- React.js
- Material-UI (MUI)
- Axios for API calls
- Lucide React for icons

### Backend
- Flask
- Python's random module for sample data generation

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   ```
   **Activate the virtual environment:**
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the Flask server:
   ```bash
   python app.py
   ```

   The backend server will start on `http://127.0.0.1:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`

## Sample Data Generation Logic

The backend generates sample campaign data with the following structure:

### Campaign Structure
```json
{
  "campaigns": [
    {
      "campaignId": "1",
      "name": "Summer Sale 2024",
      "metrics": {
        "clicks": [[...], [...]],
        "impressions": [[...], [...]],
        "ctr": [[...], [...]]
      }
    }
  ]
}
```

### Data Generation Process

1. **Predefined Campaigns:**
   - System initializes with 5 preset campaigns.
   - Each campaign has a unique ID and name.

2. **Metric Matrices:**
   - Each campaign contains three 7x24 matrices (7 days × 24 hours).
   - Metrics generated:
     - **Clicks:** Random values between 0-1000.
     - **Impressions:** Calculated as `clicks × (random value between 10-20)`.
     - **CTR:** Calculated as `clicks/impressions` (rounded to 3 decimal places).

3. **Generation Code Example:**
   ```python
   for each campaign:
       clicks = [[0 for _ in range(24)] for _ in range(7)]
       impressions = [[0 for _ in range(24)] for _ in range(7)]
       ctr = [[0 for _ in range(24)] for _ in range(7)]
       
       for day in range(7):
           for hour in range(24):
               clicks[day][hour] = round(random.random() * 1000)
               impressions[day][hour] = clicks[day][hour] * round(random.uniform(10, 20))
               ctr[day][hour] = round(clicks[day][hour] / impressions[day][hour], 3)
   ```

## API Endpoints

### GET /data
- Returns the complete campaign dataset with metrics.
- **Response format:** JSON containing all campaign data.

### POST /data
- Adds a new campaign.
- **Required fields in request body:**
  - `campaignId`: string
  - `name`: string
- Automatically generates random metrics for the new campaign.
- **Returns:** Newly created campaign data.

## Project Structure
```
heattrack/
├── backend/
│   ├── app.py
│   └── requirements.txt
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── utils/
    │   ├── types/
    │   └── App.js
    └── package.json
```

## Contributing

1. Fork the repository.
2. Create your feature branch:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Create React App** for the initial project setup.
- **Material-UI** for the component library.
- **Flask** for the backend framework.

