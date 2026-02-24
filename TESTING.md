# Testing Documentation

## Test Coverage

This project includes comprehensive test coverage for all critical components following Test-Driven Development (TDD) principles.

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Test Structure

Tests are organized alongside the code they test in `__tests__` directories:

```
src/
├── feature/
│   ├── menu/
│   │   └── __tests__/
│   │       ├── menuService.test.ts
│   │       └── menuController.test.ts
│   └── order/
│       └── __tests__/
│           ├── orderService.test.ts
│           └── orderController.test.ts
└── validations/
    └── __tests__/
        └── orderValidation.test.ts
```

## Test Suites

### 1. Menu Service Tests (`menuService.test.ts`)
- ✅ Get all menu items
- ✅ Menu items structure validation
- ✅ Get menu item by ID
- ✅ Handle non-existent menu items

### 2. Menu Controller Tests (`menuController.test.ts`)
- ✅ GET /api/menu endpoint
- ✅ Response structure validation
- ✅ HTTP status codes

### 3. Order Service Tests (`orderService.test.ts`)
- ✅ Create order with valid data
- ✅ Calculate total price correctly
- ✅ Include item details in order
- ✅ Handle invalid menu items
- ✅ Generate unique order IDs
- ✅ Set timestamps
- ✅ Retrieve order by ID
- ✅ Update order status
- ✅ Handle non-existent orders

### 4. Order Controller Tests (`orderController.test.ts`)
- ✅ POST /api/orders endpoint
- ✅ GET /api/orders/:id endpoint
- ✅ Input validation
- ✅ Error handling
- ✅ HTTP status codes (200, 201, 400, 404)

### 5. Validation Tests (`orderValidation.test.ts`)
- ✅ Valid order data acceptance
- ✅ Empty items array rejection
- ✅ Quantity validation (min 1)
- ✅ Required customer fields
- ✅ Order ID validation

## Test Results

```
Test Suites: 5 passed, 5 total
Tests:       33 passed, 33 total
```

## Coverage Areas

- **Unit Tests**: Services and business logic
- **Integration Tests**: API endpoints with Express
- **Validation Tests**: Joi schema validation
- **Edge Cases**: Error handling and invalid inputs

## Technologies Used

- **Jest**: Test framework
- **ts-jest**: TypeScript support for Jest
- **Supertest**: HTTP assertions for API testing
- **@types/jest**: TypeScript definitions

## Best Practices Followed

1. **Arrange-Act-Assert Pattern**: Clear test structure
2. **Descriptive Test Names**: Self-documenting tests
3. **Isolated Tests**: Each test is independent
4. **Edge Case Coverage**: Invalid inputs and error scenarios
5. **Integration Testing**: Real HTTP requests to endpoints
