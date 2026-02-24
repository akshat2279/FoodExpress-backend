# Food Delivery Order Management Backend

A production-ready Node.js backend for managing food delivery orders with real-time status updates using Socket.io.

## Tech Stack

- **Node.js** - Runtime environment
- **Express** - Web framework
- **TypeScript** - Type safety
- **Socket.io** - Real-time updates
- **Joi** - Request validation
- **UUID** - Unique order IDs
- **Jest** - Testing framework
- **In-memory storage (Map)** - Data persistence

## Architecture

```
src/
├── feature/
│   └── orders/
│       ├── controllers/     # Request handlers
│       ├── services/        # Business logic
│       ├── models/          # TypeScript interfaces
│       ├── validations/     # Joi schemas
│       ├── routes/          # API routes
│       └── sockets/         # Socket.io handlers
├── middleware/              # Express middleware
└── index.ts                 # Server entry point
```

## Installation

```bash
npm install
```

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm test` - Run tests

## API Endpoints

### Menu API

#### GET /api/menu
Get all menu items.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "item-1",
      "name": "Margherita Pizza",
      "description": "Classic pizza with tomato sauce, mozzarella, and fresh basil",
      "price": 12.99,
      "image": "https://..."
    }
  ]
}
```

### Order APIs

#### POST /api/orders
Create a new order.

**Request Body:**
```json
{
  "items": [
    {
      "menuItemId": "item-1",
      "quantity": 2
    }
  ],
  "customer": {
    "name": "John Doe",
    "address": "123 Main St",
    "phone": "555-0123"
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid-here",
    "items": [
      {
        "menuItemId": "item-1",
        "quantity": 2,
        "name": "Margherita Pizza",
        "price": 12.99
      }
    ],
    "customer": {
      "name": "John Doe",
      "address": "123 Main St",
      "phone": "555-0123"
    },
    "total": 25.98,
    "status": "Order Received",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

#### GET /api/orders/:id
Get order details by ID.

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid-here",
    "items": [...],
    "customer": {...},
    "total": 25.98,
    "status": "Preparing",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

## Real-Time Updates (Socket.io)

### Connection
```javascript
const socket = io('http://localhost:3000');
```

### Join Order Room
```javascript
socket.emit('joinOrder', orderId);
```

### Listen for Status Updates
```javascript
socket.on('orderStatusUpdated', (order) => {
  console.log('Order status:', order.status);
  // order contains the full updated order object
});
```

### Leave Order Room
```javascript
socket.emit('leaveOrder', orderId);
```

## Order Status Flow

After an order is created, the status automatically progresses:

1. **Order Received** (initial)
2. **Preparing** (after 5 seconds)
3. **Out for Delivery** (after 10 seconds)
4. **Delivered** (after 15 seconds)

Each status change triggers a Socket.io event to all clients in that order's room.

## Error Handling

All errors are handled by centralized error handling middleware. Responses follow this format:

```json
{
  "success": false,
  "message": "Error message here",
  "stack": "Stack trace (only in development)"
}
```

## Validation

Request validation is handled using Joi middleware. Invalid requests return:

```json
{
  "success": false,
  "message": "Validation error",
  "errors": "Detailed validation errors"
}
```

## Environment Variables

Create a `.env` file based on `.env.example`:

```
NODE_ENV=development
PORT=3000
```

## Testing

This project includes comprehensive test coverage (33 tests) following TDD principles.

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

See [TESTING.md](./TESTING.md) for detailed testing documentation.

## Development

Start the development server:

```bash
npm run dev
```

The server will start on `http://localhost:3000` with Socket.io enabled.

## Production Build

```bash
# Build TypeScript to JavaScript
npm run build

# Start production server
npm start
```
