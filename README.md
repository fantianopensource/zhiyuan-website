# Personal Website

A modern personal website built with the latest technology stack, featuring a responsive design and optimized performance.

## Tech Stack

### Frontend

- TypeScript + React + Vite
- Material-UI (MUI) for UI components
- React Router for routing
- Axios for API requests
- ESLint + Prettier for code quality

### Backend

- Python + FastAPI
- SQLAlchemy for database ORM
- Pydantic for data validation
- Python-dotenv for environment management
- PyMySQL for MySQL connection
- Poetry for dependency management

### Database

- MySQL 8.0

## Project Structure

```
├── frontend/                 # Frontend project
│   ├── src/                 # Source code
│   │   ├── components/      # React components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   ├── types/          # TypeScript types
│   │   ├── constants/      # Constants and configurations
│   │   └── assets/         # Static assets (images, fonts, etc.)
│   ├── public/             # Public static assets (favicon, robots.txt, etc.)
│   └── vite.config.ts      # Vite configuration
│
├── backend/                 # Backend project
│   ├── app/                # Application code
│   │   ├── routers/        # API endpoints
│   │   ├── models/         # Database models
│   │   ├── database/       # Database configuration
│   │   └── main.py         # Application entry point
│   ├── Dockerfile          # Docker configuration
│   ├── pyproject.toml      # Python dependencies
│   └── launch.py           # Development server launcher
│
└── README.md
```

## Requirements

- Node.js >= 18
- Python >= 3.13
- MySQL >= 8.0
- Docker (optional, for containerized development)
- Poetry (Python package manager)

## Installation Steps

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install Poetry (if not already installed):
   ```bash
   curl -sSL https://install.python-poetry.org | python3 -
   ```
3. Install dependencies:
   ```bash
   poetry install
   ```
4. Configure environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```
5. Start development server:
   ```bash
   poetry run python launch.py
   ```

### Database Setup

1. Create MySQL database:

   ```sql
   CREATE DATABASE personal_website;
   ```

2. Configure MySQL (optional but recommended):

   ```bash
   # Copy the configuration file
   sudo cp backend/mysql.conf /etc/mysql/conf.d/personal-website.cnf

   # Restart MySQL service
   sudo systemctl restart mysql
   ```

   Or you can set the host cache size directly in MySQL:

   ```sql
   SET GLOBAL host_cache_size=0;
   ```

## Development Guidelines

### Code Style

- Frontend: Follow ESLint and Prettier configurations
- Backend: Follow PEP 8 style guide
- Use meaningful commit messages

### Git Workflow

1. Create feature branch from main
2. Make changes and commit
3. Create pull request
4. Code review
5. Merge to main

### Testing

- Frontend: `npm test`
- Backend: `pytest`

## Deployment

### Frontend

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `dist` directory to your web server

### Backend

1. Set up production environment variables
2. Run with production server (e.g., Gunicorn)
3. Set up reverse proxy (Nginx)

## License

MIT License

## Developer

[zhiyuan]
