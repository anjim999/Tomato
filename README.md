# Eternal - A MERN Stack Food Ordering Website

## Overview
Eternal is a full-stack food ordering web application similar to Zomato and Swiggy. This project is built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js) along with **Vite** for a fast and optimized development experience.

With Eternal, users can browse food items, add them to their cart, place orders, and make payments using **Stripe**. It also includes an admin panel for managing food items and orders.

## Features
- 🛒 **User Authentication** (Sign up, Login, Logout)
- 🍔 **Food Listing** with categories and search functionality
- 🛍 **Shopping Cart** (Add, remove, and update food items in the cart)
- 💳 **Stripe Payment Gateway Integration**
- 📦 **Order Management** (View order status, track orders)
- 🔐 **Admin Panel** for managing food items and orders
- 🌎 **Fully Responsive** for mobile and desktop users

## Tech Stack
### Frontend
- **React.js** (with Vite for fast builds)
- **React Router** (for navigation)
- **React Toastify** (for notifications)

### Backend
- **Node.js** + **Express.js** (for API development)
- **MongoDB** + **Mongoose** (for database management)
- **JWT Authentication** (for secure user authentication)
- **Stripe API** (for payment processing)

## Installation & Setup
### Prerequisites
Make sure you have **Node.js** and **MongoDB** installed on your system.

### 1. Clone the Repository
```sh
git clone https://github.com/ALLUVENKATAREDDY/foodDeliveryWebsite
cd eternal
```

### 2. Install Dependencies
#### Backend Setup
```sh
cd backend
npm install
```

#### Frontend Setup
```sh
cd frontend
npm install
```

### 3. Configure Environment Variables
Create a **.env** file in the `backend/` folder and add the following:
```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### 4. Run the Application
#### Start the Backend Server
```sh
cd backend
npm start
```

#### Start the Frontend Development Server
```sh
cd frontend
npm run dev
```

The app will now be accessible at `http://localhost:5173`.

## API Endpoints
### User Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile

### Food Items
- `GET /api/food` - Get all food items
- `POST /api/food/add` - Add a new food item (Admin only)
- `DELETE /api/food/:id` - Delete food item (Admin only)

### Orders
- `POST /api/orders` - Place an order
- `GET /api/orders` - Get user orders
- `PUT /api/orders/:id/status` - Update order status (Admin only)

### Published URL 
- `Frontend:` https://food-del-frontend2-u8pw.onrender.com/



