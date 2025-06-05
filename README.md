# ClimaSync

ClimaSync is a modern weather dashboard web application built with React and Tailwind CSS. It provides real-time weather information and air quality data for any city or your current location, using the [WeatherAPI](https://www.weatherapi.com/).

## Features

- 🌤️ **Current Weather:** View temperature, real feel, humidity, wind, pressure, and more.
- 🌍 **Location Search:** Search weather by city name or use your current location.
- 🌫️ **Air Quality Index:** See detailed air quality metrics (CO, NO2, O3, SO2, PM2.5, PM10, and indexes).
- 📱 **Responsive Design:** Works on desktop and mobile devices.
- ⚡ **Live Updates:** Fetches the latest data on demand.

## Screenshots

<!-- Add screenshots here if available -->

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/ClimaSync.git
   cd ClimaSync
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up your WeatherAPI key:**
   - Create a `.env` file in the project root:
     ```
     VITE_API_KEY=your_weatherapi_key_here
     ```
   - You can get a free API key from [WeatherAPI](https://www.weatherapi.com/).

4. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in your browser:**
   - Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Project Structure

```
src/
  api/             # API calls to WeatherAPI
  components/      # React components (Navbar, SearchBar, Card, etc.)
  context/         # React Context for global state
  App.jsx          # Main app component
  main.jsx         # Entry point
```

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [WeatherAPI](https://www.weatherapi.com/)
- [Axios](https://axios-http.com/)

## License

This project is licensed under the MIT License.

---

**Made with ❤️ by [Your Name]**