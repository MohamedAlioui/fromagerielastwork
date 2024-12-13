# Fromagerie Alioui - Backend Architecture

## MongoDB Collections & Models

### User Model
```typescript
interface User {
  _id: ObjectId;
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin' | 'livreur';
  avatar?: string;
  phoneNumber?: string;
  createdAt: Date;
  updatedAt: Date;
  lastLogin?: Date;
  isVerified: boolean;
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
}
```

### Profile Model
```typescript
interface Profile {
  _id: ObjectId;
  userId: ObjectId;
  addresses: [{
    type: string;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    isDefault: boolean;
  }];
  preferences: {
    newsletter: boolean;
    orderNotifications: boolean;
    promotionalEmails: boolean;
  };
  favoriteProducts: ObjectId[];
}
```

### Product Model
```typescript
interface Product {
  _id: ObjectId;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  weight: number;
  stock: number;
  isNew: boolean;
  rating: number;
  reviews: ObjectId[];
  ingredients?: string[];
  nutritionalInfo?: {
    calories: number;
    protein: number;
    fat: number;
    carbohydrates: number;
  };
  createdAt: Date;
  updatedAt: Date;
}
```

### Review Model
```typescript
interface Review {
  _id: ObjectId;
  productId: ObjectId;
  userId: ObjectId;
  rating: number;
  comment: string;
  images?: string[];
  helpful: number;
  createdAt: Date;
  updatedAt: Date;
}
```

### Order Model
```typescript
interface Order {
  _id: ObjectId;
  userId: ObjectId;
  orderNumber: string;
  items: [{
    productId: ObjectId;
    quantity: number;
    weight: number;
    price: number;
  }];
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
  };
  paymentMethod: string;
  paymentStatus: 'pending' | 'paid' | 'failed';
  subtotal: number;
  shippingCost: number;
  discount?: number;
  total: number;
  createdAt: Date;
  updatedAt: Date;
  deliveryDate?: Date;
  trackingNumber?: string;
}
```

### Recipe Model
```typescript
interface Recipe {
  _id: ObjectId;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  prepTime: number;
  cookTime: number;
  servings: number;
  ingredients: [{
    productId?: ObjectId;
    name: string;
    quantity: number;
    unit: string;
  }];
  instructions: string[];
  images: string[];
  category: string;
  author: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
```

### Cart Model
```typescript
interface Cart {
  _id: ObjectId;
  userId: ObjectId;
  items: [{
    productId: ObjectId;
    quantity: number;
    weight: number;
  }];
  createdAt: Date;
  updatedAt: Date;
}
```

### Coupon Model
```typescript
interface Coupon {
  _id: ObjectId;
  code: string;
  type: 'percentage' | 'fixed';
  value: number;
  minPurchase?: number;
  startDate: Date;
  endDate: Date;
  usageLimit?: number;
  usedCount: number;
  isActive: boolean;
}
```

### Loyalty Model
```typescript
interface Loyalty {
  _id: ObjectId;
  userId: ObjectId;
  points: number;
  tier: 'bronze' | 'silver' | 'gold' | 'platinum';
  history: [{
    type: 'earn' | 'redeem';
    points: number;
    description: string;
    orderId?: ObjectId;
    createdAt: Date;
  }];
  createdAt: Date;
  updatedAt: Date;
}

interface LoyaltyTier {
  _id: ObjectId;
  name: 'bronze' | 'silver' | 'gold' | 'platinum';
  minPoints: number;
  multiplier: number;
  benefits: string[];
  isActive: boolean;
}
```

## API Endpoints Structure

```
/api
├── /auth
│   ├── POST /register
│   ├── POST /login
│   ├── POST /logout
│   └── POST /forgot-password
├── /users
│   ├── GET /profile
│   ├── PUT /profile
│   └── GET /orders
├── /products
│   ├── GET /
│   ├── GET /:id
│   ├── POST / (admin)
│   └── PUT /:id (admin)
├── /orders
│   ├── POST /
│   ├── GET /:id
│   └── PUT /:id/status (admin)
├── /cart
│   ├── GET /
│   ├── POST /items
│   └── DELETE /items/:id
├── /recipes
│   ├── GET /
│   ├── GET /:id
│   └── POST / (admin)
└── /loyalty
    ├── GET /points              # Get user's loyalty points and tier
    ├── GET /history            # Get points history
    ├── POST /redeem            # Redeem points for rewards
    └── GET /tiers              # Get all loyalty tiers and benefits
```

## Required Dependencies

```json
{
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.5.0",
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.0.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express-validator": "^7.0.1",
    "multer": "^1.4.5-lts.1",
    "cloudinary": "^1.40.0",
    "nodemailer": "^6.9.4",
    "helmet": "^7.0.0",
    "compression": "^1.7.4",
    "morgan": "^1.10.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.1",
    "@types/express": "^4.17.17",
    "@types/node": "^20.5.7",
    "typescript": "^5.2.2",
    "ts-node": "^10.9.1"
  }
}
```

## Environment Variables

```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_pass
```

## Database Relationships

1. User -> Profile (One-to-One)
2. User -> Orders (One-to-Many)
3. User -> Cart (One-to-One)
4. User -> Loyalty (One-to-One)
5. Product -> Reviews (One-to-Many)
6. Order -> Products (Many-to-Many)
7. Recipe -> Products (Many-to-Many)

## Security Implementations

1. Password hashing with bcrypt
2. JWT authentication
3. Request validation with express-validator
4. CORS configuration
5. Rate limiting
6. Security headers with helmet
7. Input sanitization
8. File upload restrictions

## Error Handling

Implement a centralized error handling middleware with proper error codes and messages:

```typescript
interface ApiError extends Error {
  statusCode: number;
  errors?: any[];
}
```

## Logging

Implement logging for:
1. API requests (morgan)
2. Error tracking
3. User activities
4. System events

## Caching Strategy

1. Product catalog caching
2. User session caching
3. API response caching
4. Database query caching

## Testing Structure

```
tests/
├── unit/
│   ├── models/
│   └── services/
├── integration/
│   └── api/
└── e2e/
```