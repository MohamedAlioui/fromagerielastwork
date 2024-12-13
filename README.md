# Fromagerie Alioui - E-commerce Platform

A modern e-commerce platform for artisanal cheese products built with React, TypeScript, and Tailwind CSS.

## Features

### 🛍️ Product Management
- Product catalog with filtering and sorting
- Detailed product pages with specifications
- Product categories and tags
- New product badges
- Product ratings and reviews
- Related products suggestions

### 🛒 Shopping Cart
- Add/remove products
- Adjust quantities and weights
- Real-time price calculations
- Cart summary with subtotal
- Free shipping threshold (>100 TND)
- Persistent cart storage

### 👤 User Authentication
- User registration and login
- Social authentication options
- Password recovery
- Protected routes
- Session management
- User profile management

### 📱 Dashboard
- User dashboard overview
- Order history and tracking
- Favorite products management
- Address book management
- Profile settings
- Notification preferences

### 🧾 Order Management
- Multi-step checkout process
- Multiple payment methods
- Order confirmation
- Order tracking
- Delivery address management
- Order history

### 🥗 Recipe Section
- Browse cooking recipes
- Filter by difficulty and category
- Recipe details with ingredients
- Cooking instructions
- Recipe sorting options
- Recipe categories

### 📄 Content Pages
- About Us page with company history
- FAQ section with common questions
- Contact information
- Legal documentation
  - Terms and conditions
  - Privacy policy
  - Legal notices

### 💫 UI/UX Features
- Responsive design for all devices
- Interactive product cards
- Loading states and animations
- Form validation
- Error handling
- Toast notifications
- Modal dialogs
- Infinite scroll
- Skeleton loading states

### 🔍 Search & Filter
- Product search functionality
- Category filtering
- Price range filtering
- Sort by various criteria
- Filter by product attributes

### 💰 Pricing Features
- Dynamic price calculations
- Quantity-based pricing
- Weight-based pricing
- Shipping cost calculation
- Coupon code support
- Tax calculations

## Technical Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- React Router DOM
- React Hook Form
- Zustand (State Management)
- Lucide React (Icons)
- Swiper (Carousels)

### Development
- Vite
- ESLint
- TypeScript ESLint
- PostCSS
- Autoprefixer

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── auth/          # Authentication related components
│   ├── cart/          # Shopping cart components
│   ├── checkout/      # Checkout process components
│   ├── dashboard/     # User dashboard components
│   ├── products/      # Product related components
│   ├── recipes/       # Recipe related components
│   └── ui/            # Basic UI components
├── data/              # Mock data and constants
├── hooks/             # Custom React hooks
├── pages/             # Page components
├── types/             # TypeScript interfaces
└── utils/             # Utility functions
```

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url
VITE_PUBLIC_URL=your_public_url
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.