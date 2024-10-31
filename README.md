

# Minnesota Weather Updates 🌦️

Welcome to the **Minnesota Weather Updates** project! This is a simple web application that provides real-time weather information for select cities in Minnesota. With a clean, user-friendly design, this project fetches weather data from the OpenWeatherMap API and displays it on the page.

## Example Screenshot
<img width="941" alt="Screenshot 2024-10-31 at 2 51 38 PM" src="https://github.com/user-attachments/assets/db082436-96fd-4e84-a190-b6948ae3c5d7">


## Project Features

- **Live Weather Data**: Fetches and displays real-time weather information, including temperature, humidity, and general weather conditions.
- **City Selection**: Users can select a city from a dropdown menu to get the latest weather updates for that specific location.
- **Responsive Design**: The application is fully responsive and optimized for different screen sizes.
- **Sky-Blue Themed Background**: Gives a bright, weather-inspired aesthetic.
- **Decorative Elements**: Includes flower emojis on each side for a pleasant and unique look.

## Technologies Used

- **HTML**: Structure of the webpage.
- **CSS**: Styling for layout and appearance.
- **JavaScript**: Handles user interaction and fetches data from the API.
- **OpenWeatherMap API**: Provides real-time weather data.

## Installation & Setup

1. **Clone the repository** or download the files directly.

    ```bash
    git clone https://github.com/your-username/minnesota-weather-updates.git
    cd minnesota-weather-updates
    ```

2. **Get an API Key from OpenWeatherMap**: 
   - Go to [OpenWeatherMap](https://openweathermap.org/) and sign up (if you haven’t already).
   - Generate a free API key from your dashboard.

3. **Set up your API key**:
   - Open `script.js`.
   - Replace `YOUR_API_KEY` with your actual OpenWeatherMap API key:

     ```javascript
     const apiKey = "YOUR_API_KEY";
     ```

4. **Open `index.html`** in your web browser to view the project.

## Usage

1. Select a city from the dropdown menu.
2. Click the **"Get Weather"** button.
3. The application will display:
   - **Temperature** in Fahrenheit 🌡️
   - **Humidity** percentage 💧
   - **Weather condition** with description and icon ☁️

## Project Structure

```
project-folder/
├── index.html       # Main HTML file
├── styles.css       # CSS for styling
└── script.js        # JavaScript for fetching weather data
```

## Acknowledgments

- **OpenWeatherMap** for providing free access to weather data.
- **Google Fonts** for the Poppins font, which gives the application a clean, modern look.

## Future Enhancements

- **Additional Cities**: Add more universal cities or allow users to search any city.
- **Extended Forecast**: Display a 5-day weather forecast for selected cities.
- **Improved UI**: Add animations or transitions for a smoother user experience.
