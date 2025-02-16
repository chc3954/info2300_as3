# Yuber Eats

This project is an Uber Eats clone created for the purpose of learning NestJS.

## Key features implemented in this project

- User order flow: Menu selection, real-time tracking
- Restaurant manager dashboard: Menu and order management, promotion payment
- Rider location tracking: WebSocket + Google Maps API

## Tech Stack

| Role     | Technology                                        |
| -------- | ------------------------------------------------- |
| Frontend | React, Typescript, Tailwind CSS                   |
| Backend  | Nestjs, PostgreSQL, GraphQL                       |
| API      | AWS EC2, Mailgun API, Paddle API, Google Maps API |
| Testing  | Jest                                              |

## How to Run

### Environment Variables (for Backend)

```env
# Database
DB_HOST=localhost
DB_PORT=27017
DB_USER=your_db_username
DB_PASS=your_db_password
DB_NAME=uber_eats_clone

# JWT
SECRET_KEY=your_jwt_secret_key

# Mailgun
MAILGUN_API_KEY=your_mailgun_api_key
MAILGUN_DOMAIN=your_mailgun_domain
MAILGUN_FROM_EMAIL=noreply@yourdomain.com

# AWS S3
AWS_S3_BUCKET_NAME=your_aws_bucket_name
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
```

### Frontend

```bash
cd client
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm run start
```

## License

- MIT License: Purpose of allowing reuse and modification of open source software
