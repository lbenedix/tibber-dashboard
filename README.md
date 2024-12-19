# Tibber Dashboard

A minimalist e-ink friendly dashboard that displays Tibber power consumption and price data.

## Features

- Real-time power consumption display
- Current and upcoming electricity prices
- Price level indicator (very cheap to very expensive)
- Minimalist black & white design optimized for e-ink displays
- Uses [Satori](https://github.com/vercel/satori) to generate PNGs server-side

![Screenshot](./screenshot.jpg)

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/fgnass/tibber-dashboard.git
   cd tibber-dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file with your Tibber API token:

   ```
   TIBBER_API_TOKEN=your-token-here
   ```

   You can get your token from [developer.tibber.com](https://developer.tibber.com)

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open http://localhost:3000/dashboard.png in your browser

## License

MIT
