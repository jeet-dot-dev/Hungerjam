# HungerJam - A Full-Stack Food Delivery Website

## 📌 Project Overview
HungerJam is a full-stack food ordering and delivery web application designed to provide users with a seamless food ordering experience. The platform includes user authentication, menu browsing, order placement, and an admin panel for restaurant management. The payment and admin sections are still under development.

## 🚀 Tech Stack
### Frontend (React + Vite)
- **Framework**: React 18 (with Vite for faster development)
- **UI & Styling**: Tailwind CSS, Framer Motion, Lucide React
- **State Management & Routing**: React Router DOM
- **Authentication**: Auth0
- **API Calls & Notifications**: Axios, React Toastify

### Backend (Node.js + Express)
- **Framework**: Express.js
- **Database**: MongoDB (with Mongoose for ORM)
- **Authentication & Security**: JWT, bcryptjs, express-jwt, OAuth2
- **File Uploads**: Multer & Cloudinary
- **Payment Integration**: Stripe
- **Email Notifications**: Nodemailer
- **Validation**: Joi & Validator

## ✨ Features Implemented
### ✅ User Side
- User authentication (Sign in/Sign out using Auth0)
- Responsive UI with smooth animations
- Food menu display with detailed descriptions and images
- Add to cart & checkout functionality (basic setup)
- Toast notifications for better user feedback

### ✅ Backend API
- User authentication & authorization using JWT
- Secure password hashing with bcryptjs
- CRUD operations for food items (Admin access required)
- Image uploads handled via Cloudinary & Multer
- Payment integration (Stripe setup in progress)

### 🛠️ Work in Progress
- **Payment Page**: Integrating Stripe for handling online payments securely.
- **Admin Panel**: A dashboard for restaurant owners to manage orders, inventory, and users.

## ⚡ Challenges & Solutions
### 🔴 Challenge 1: Authentication & Authorization
**Problem:** Managing user authentication while securing admin routes.
**Solution:** Implemented JWT-based authentication for API endpoints and used Auth0 for frontend authentication.

### 🔴 Challenge 2: File Uploads
**Problem:** Storing food images efficiently without affecting performance.
**Solution:** Used Cloudinary for image storage, integrating it with Multer for handling uploads.

### 🔴 Challenge 3: Payment Gateway
**Problem:** Setting up a secure and seamless payment experience.
**Solution:** Started integrating Stripe, handling tokenization, and setting up backend payment routes.

## 🔧 How to Run the Project
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/goustcoder/hungerjam.git
cd hungerjam
```

### 2️⃣ Setup Backend
```sh
cd backend
npm install
npm start
```

### 3️⃣ Setup Frontend
```sh
cd frontend
npm install
npm run dev
```

## 🎯 Future Enhancements
- Complete payment gateway integration
- Admin panel with order tracking & analytics
- User reviews & ratings for food items
- Delivery partner module for real-time tracking



