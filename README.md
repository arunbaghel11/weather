
# Weather Monitoring System

## Project Overview
This is a real-time data processing system for monitoring weather conditions in various metro cities in India, 
using data from the OpenWeatherMap API. The system provides daily weather summaries, alerting mechanisms, 
and visualizations to track historical weather trends.

## Features
- **Real-Time Weather Monitoring**: Fetches and processes weather data every 5 minutes.
- **Daily Summaries**: Provides daily averages, max/min temperatures, and dominant weather conditions.
- **Alerting System**: Configurable alert thresholds for extreme weather conditions.
- **Historical Data Visualization**: Graphs for tracking trends over time.

## Project Structure
```
weather-monitoring-system/
├── backend/
│   ├── config/               # Database configuration
│   ├── controllers/          # API request handlers
│   ├── models/               # MongoDB models
│   ├── routes/               # Express routes
│   └── utils/                # Utility functions
└── frontend/
    └── src/
        ├── components/       # React components
        ├── pages/            # React pages
        └── utils/            # Frontend utility functions
```

## Backend Setup

1. **Install Dependencies**:
   ```bash
   cd backend
   npm install express mongoose axios dotenv nodemailer
   ```

2. **Configure Environment Variables**:
   Create a `.env` file with the following contents:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/weatherMonitoring
   OPENWEATHER_API_KEY=YOUR_API_KEY
   ALERT_EMAIL=your_alert_email@example.com
   ALERT_EMAIL_PASSWORD=your_email_password
   ```

3. **Run the Server**:
   ```bash
   npm start
   ```

## Frontend Setup

1. **Install Dependencies**:
   ```bash
   cd frontend
   npm install axios chart.js react-chartjs-2
   ```

2. **Run the Frontend**:
   ```bash
   npm start
   ```

## Testing
- Run unit tests for temperature conversions, data retrieval, and alerting.
- Mock API responses for predictable testing.

## Dockerization
Ensure Docker and Docker Compose are installed. Build and start the containers:
```bash
docker-compose up --build
```

## Additional Notes
- **API Key**: Register at [OpenWeatherMap](https://openweathermap.org/) to obtain an API key.
- **Email Alerts**: Configure a valid email for sending alerts (using Gmail or another provider with SMTP settings).

## License
This project is licensed under the MIT License.
