# Session Musician Match

A comprehensive web platform connecting musicians, artists, and studios for recording session bookings and collaboration.

## Overview

Session Musician Match is a modern web application designed to streamline the process of finding, booking, and managing session musicians for recording projects. The platform serves as a marketplace that connects recording artists, producers, and studios with qualified session musicians, handling scheduling, payments, and communication in one unified system.

## Key Features

### For Musicians
- Create detailed profiles showcasing skills, experience, and audio samples
- Set availability schedules and manage bookings
- Display ratings and testimonials from previous clients
- Receive secure payments through escrow system
- Communicate directly with potential clients

### For Artists & Producers
- Find qualified musicians based on instrument, genre, location, and availability
- Compare rates and portfolios
- Book musicians for specific time slots
- Share project materials securely
- Provide feedback and ratings

### For Studios
- Maintain a roster of preferred session musicians
- Coordinate multiple musicians for complex recording sessions
- Maximize studio time efficiency
- Track payments and generate reports

## Technology Stack

### Frontend
- React.js with Next.js for SSR
- Redux Toolkit for state management
- Material UI with custom theming
- Socket.io for real-time messaging
- Web Audio API for sample playback

### Backend
- Node.js with Express
- JWT authentication with OAuth integration
- MongoDB for flexible schema and PostgreSQL for relational data
- Elasticsearch for advanced musician searching
- Stripe Connect for marketplace payments

### DevOps
- AWS Elastic Beanstalk or Vercel for hosting
- GitHub Actions for CI/CD
- Sentry for error tracking
- Google Analytics for user behavior insights

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn
- MongoDB
- PostgreSQL
- Redis (for session management and caching)

### Installation

1. Clone the repository
```
git clone https://github.com/dxaginfo/session-musician-match.git
cd session-musician-match
```

2. Install dependencies
```
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Configure environment variables
```
# Copy example env files
cp server/.env.example server/.env
cp client/.env.example client/.env

# Edit the .env files with your configuration
```

4. Start development servers
```
# Start backend server
cd server
npm run dev

# In another terminal, start frontend
cd client
npm run dev
```

5. Access the application
```
Frontend: http://localhost:3000
Backend API: http://localhost:8000
```

## Project Structure

```
session-musician-match/
├── client/                # Frontend React application
│   ├── components/        # Reusable UI components
│   ├── pages/             # Next.js pages
│   ├── hooks/             # Custom React hooks
│   ├── state/             # Redux store and slices
│   ├── styles/            # Global styles and theme
│   └── utils/             # Helper functions
│
├── server/                # Backend Node.js application
│   ├── api/               # API routes and controllers
│   ├── models/            # Database models
│   ├── services/          # Business logic
│   ├── middleware/        # Express middleware
│   ├── utils/             # Helper functions
│   └── config/            # Configuration files
│
├── docs/                  # Documentation
└── scripts/               # Utility scripts
```

## API Documentation

API documentation is available at `/api/docs` when running the server locally, or at the deployed API URL.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Project Link: [https://github.com/dxaginfo/session-musician-match](https://github.com/dxaginfo/session-musician-match)