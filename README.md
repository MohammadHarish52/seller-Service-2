# Seller Service Backend

A backend service for seller management using Prisma ORM and Express.js.

## Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Configure environment variables:

- Copy `.env.example` to `.env`
- Update the `DATABASE_URL` with your PostgreSQL database credentials
- Set a secure `JWT_SECRET`

3. Initialize the database:

```bash
npx prisma migrate dev
```

4. Start the server:

```bash
node src/server.js
```

## API Endpoints

### Authentication

#### Signup

- **POST** `/api/signup`
- Body:
  ```json
  {
    "phone": "1234567890",
    "password": "yourpassword"
  }
  ```

#### Signin

- **POST** `/api/signin`
- Body:
  ```json
  {
    "phone": "1234567890",
    "password": "yourpassword"
  }
  ```

### Seller Details

#### Update Seller Details

- **POST** `/api/[sellerId]/details`
- Headers:
  - `Authorization: Bearer [token]`
- Body:
  ```json
  {
    "shopName": "My Shop",
    "ownerName": "John Doe",
    "address": "123 Main St",
    "city": "Sample City",
    "state": "Sample State",
    "pincode": "123456",
    "openTime": "09:00",
    "closeTime": "18:00",
    "categories": ["category1", "category2"]
  }
  ```

## Security

- Passwords are hashed using bcrypt
- JWT authentication for protected routes
- Input validation and error handling
