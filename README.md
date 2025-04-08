https://hungerjam.vercel.app/

# Hungerjam

A modern food delivery web application with a beautiful UI and comprehensive features for both customers and administrators.

## Tech Stack

### Frontend
* **Framework**: React 18 (with Vite for faster development)
* **UI & Styling**: Tailwind CSS, Framer Motion, Lucide React
* **State Management & Routing**: React Router DOM
* **Authentication**: Auth0
* **API Calls & Notifications**: Axios, React Toastify

### Backend
* **Framework**: Express.js
* **Database**: MongoDB (with Mongoose for ORM)
* **Authentication & Security**: JWT, bcryptjs, express-jwt, OAuth2
* **File Uploads**: Multer & Cloudinary
* **Payment Integration**: Stripe
* **Validation**: Joi & Validator

## Features

### User Features
* User authentication (Sign in/Sign out using Auth0)
* Responsive UI with smooth animations
* Food menu display with detailed descriptions and images
* Add to cart & checkout functionality
* Toast notifications for better user feedback
* Secure payment processing via Stripe

### Admin Features
* CRUD operations for food items (Admin access required)
* User authentication & authorization using JWT
* Secure password hashing with bcryptjs
* Image uploads handled via Cloudinary & Multer

## Getting Started

### Prerequisites
* Node.js and npm installed
* MongoDB account
* Auth0 account
* Cloudinary account
* Stripe account (for payment processing)

### Installation

**1️⃣ Clone the Repository**

```
git clone https://github.com/goustcoder/hungerjam.git
cd hungerjam
```

**2️⃣ Setup Backend**

```
cd backend
npm install
npm start
```

**3️⃣ Setup Frontend**

```
cd frontend
npm install
npm run dev
```

## Environment Variables

### Frontend (.env)
```
VITE_API_URL=http://localhost:3000
VITE_CLIENT_ID=your_auth0_client_id
VITE_DOMAIN=your_auth0_domain
VITE_AUDIENCE_URL=your_auth0_audience_url
```

### Backend (.env)
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_KEY_SECRET=your_cloudinary_api_secret
BASE_URL=http://localhost:3000
STRIPE_SECRET_KEY=your_stripe_secret_key
FRONT_END_URL=http://localhost:5173
```

## Challenges and Solutions

### Optimization
To improve performance, the following strategies were implemented:
* React code splitting for faster loading
* Lazy loading components to reduce initial load time
* Converting images to WebP format for better compression and quality

### Authentication
Implementing Auth0 for the first time presented challenges in understanding the authentication flow between frontend and backend. The solution involved:
* Studying Auth0 documentation
* Implementing proper token validation
* Ensuring secure data flow between frontend and backend

## License
This project is licensed under the MIT License
