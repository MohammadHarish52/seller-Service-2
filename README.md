# Seller Service API

This is the backend service for the seller functionality of the FastFab e-commerce platform.

## Project Structure

```
seller Service 2/
├── src/
│   ├── controllers/       # Business logic
│   ├── middleware/        # Auth and validation middleware
│   ├── routes/            # API route definitions
│   │   ├── auth.routes.js     # Authentication routes
│   │   ├── product.routes.js  # Product management routes
│   │   └── public.routes.js   # Public-facing routes
│   ├── server.js          # Main server entry point
│   └── ...
├── prisma/                # Database schema and migrations
└── ...
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   cd seller\ Service\ 2
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:

   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/fastfab"
   JWT_SECRET="your-secret-key"
   PORT=8000
   ```

4. Run database migrations:

   ```
   npx prisma migrate dev
   ```

5. Start the server:
   ```
   npm start
   ```

## API Endpoints

### Authentication

- `POST /auth/signup` - Register a new seller
- `POST /auth/signin` - Login with credentials
- `GET /auth/profile` - Get seller profile (requires authentication)

### Products

- `POST /product` - Create a new product (requires authentication)
- `GET /product` - Get all products for the authenticated seller
- `GET /product/:productId` - Get a specific product
- `PUT /product/:productId` - Update a product
- `DELETE /product/:productId` - Delete a product

### Public Routes

- `GET /products/active` - Get all active products
- `GET /products/:productId` - Get a specific product by ID
- `GET /products/category/:category` - Get products by category

## Running in Development

```
npm run dev
```

This will start the server with nodemon for automatic reloading during development.

## Important Note

This project has been consolidated to use a single server entry point (`server.js`). The previous files `index.js` and `app.js` are no longer used and should be removed to avoid confusion.
