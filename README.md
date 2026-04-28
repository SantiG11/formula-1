# Formula 1

A fan-made Formula 1 web application that displays information about the current season, including the next race, latest race results, championship standings, drivers, teams, circuits, and the race calendar.

## Live Demo

[View the project](https://formula-1-two-omega.vercel.app/)

## Overview

The app is organized into several pages focused on Formula 1 season information. The home page shows a main title, a countdown to the next race, and a table with the latest race result. Other pages allow users to explore race results, the full calendar, driver standings, constructor standings, drivers, teams, and circuits.

## Features

- Home page with a countdown to the next Grand Prix
- Latest race result table
- Race results by round
- Race calendar with individual race pages
- Driver standings table
- Constructor standings table
- Drivers page with individual driver details
- Teams page with individual team details
- Circuits page with individual circuit details
- Responsive navigation for desktop and mobile screens
- Data fetched from an external Formula 1 API

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Radix UI components
- Lucide React icons
- Native Fetch API

## Project Structure

```text
src/
├── assets/              # Driver, team, and circuit images
├── components/          # Reusable UI and layout components
│   ├── sections/        # Main page sections
│   ├── shared/          # Shared components used across pages
│   └── ui/              # Base UI components
├── hooks/               # Custom React hooks
├── lib/                 # Types, constants, and helper functions
├── pages/               # Route-level pages
├── utils/               # Utility functions
├── App.tsx              # App routes
└── main.tsx             # Application entry point
```

## Main Routes

| Route | Description |
| --- | --- |
| `/` | Home page with next race countdown and latest result |
| `/drivers` | List of drivers |
| `/drivers/:driverId` | Driver detail page |
| `/teams` | List of teams |
| `/teams/:teamId` | Team detail page |
| `/circuits` | List of circuits |
| `/circuits/:circuitId` | Circuit detail page |
| `/calendar` | Season race calendar |
| `/calendar/:raceId` | Race detail page |
| `/:resultId` | Race result page by round |
| `/driverStandings` | Driver championship standings |
| `/teamStandings` | Constructor championship standings |

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the project root and add the API base URL:

```bash
VITE_API_BASE_URL=your_api_base_url
```

The app uses this value to build the API requests.

### Run the Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

### Run Linting

```bash
npm run lint
```

## API Usage

The project fetches Formula 1 data using a reusable custom hook located in `src/hooks/useGetData.ts`. The API base URL is read from `VITE_API_BASE_URL`.

Some of the main endpoints used by the app include:

- `/current/next`
- `/current/last/race`
- `/2026`
- `/2026/drivers`
- `/2026/teams`
- `/circuits`
- `/2026/drivers-championship`
- `/2026/constructors-championship`
- `/2026/:raceId`
- `/2026/:round/race`

## Notes

- The project is a client-side React application.
- Images for drivers, teams, and circuits are stored locally in the `src/assets` folder.
- The UI is designed to be responsive and easy to navigate.
- Some API routes are currently tied to the 2026 season.

## Disclaimer

This is a fan-made project created for educational and portfolio purposes. It is not affiliated with, endorsed by, or sponsored by Formula 1 or its related entities.
