# NeoTech Solutions — Final Year Project (FYP)

NeoTech Solutions is a comprehensive web application for an IT Education Institute and Software House. It handles course cataloging, online enrollments, cart management, Stripe payments, and student administration.

# 🌟 Key Features

**Course Catalog & Interactive Curriculums:**
 Browse IT courses, search by category, and view detailed module outlines.
 **Online Cart & Flexible Payment Plans:** Add multiple courses to cart with options for Full Fee or Installments.
**Stripe Checkout Integration:** Card payment gateway flow that updates status across MongoDB and Sanity CMS.
**Admin Dashboard & CMS Studio:** Embedded Sanity CMS (`/admin`) and custom metrics dashboard (`/admin/dashboard`) tracking enrollments and students.
**Software House Portfolio:** Service showcases for Web Development, AI, Cybersecurity, DevOps, and UI/UX Design.

# 🛠️ Technology Stack

Frontend:
* React 18 (TypeScript) + Vite
* Tailwind CSS & ShadCN UI
* Sanity Studio v3
* TanStack Query & React Router v6

Backend:
* Node.js & Express.js (TypeScript)
* MongoDB with Mongoose ODM
* Stripe API Payment Gateway

## System Architecture & Data Flow

1. User Interaction: Students browse courses and add them to the React frontend cart.
2. Payment Processing: Cart checkout invokes Express backend (`/api/payments/create-checkout-session`) to generate a Stripe Checkout session.
3. Automated Sync: Upon successful payment redirect (`/payment-success`), record documents are generated in both local **MongoDB and **Sanity CMS**.
4. Admin Dashboard: Admin panel listens in real-time to Sanity & MongoDB collections to present real-time student analytics.

## API Endpoints:

Payments (`/api/payments`)
- `POST /api/payments/create-checkout-session` — Generate Stripe Hosted Checkout Session
- `POST /api/payments` — Record completed transaction in MongoDB
- `GET /api/payments` — Fetch all transaction records
- `PATCH /api/payments/status` — Update payment & enrollment status

Enrollments (`/api/enrollments`)**
- `POST /api/enrollments` — Save student course enrollment
- `GET /api/enrollments` — List all student enrollments

Authentication (`/api/auth`)**
- `POST /api/auth/register` — Register new user
- `POST /api/auth/login` — User authentication & JWT issuance
- `GET /api/auth/users` — Fetch registered platform users



# 📁 Folder Structure

neotech/
├── frontend/
│   ├── public/              (Course images, icons, static assets)
│   ├── src/
│   │   ├── components/      (UI components & page sections)
│   │   ├── pages/           (Course, Cart, LMS, About, & Dashboard pages)
│   │   ├── sanity/          (CMS schemas & Admin Dashboard)
│   │   └── App.tsx          (Route definitions)
│   └── package.json
│
└── backend/
    ├── src/
    │   ├── controllers/     (Auth, Enrollment, Payment handlers)
    │   ├── models/          (MongoDB schemas)
    │   ├── routes/          # Express API endpoints
    │   └── server.ts        # Express App entry point
    └── package.json

Quick Start Guide

1. Backend Setup
   * Navigate to backend directory: `cd backend`
   * Install packages: `npm install`
   * Start dev server: `npm run dev` (Runs on http://localhost:5000)

2. Frontend Setup
   * Open a new terminal and navigate to frontend directory: `cd frontend`
   * Install packages: `npm install`
   * Start dev server: `npm run dev` (Runs on http://localhost:8080)

⚙️ Environment Configuration

Backend (.env):
env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/neotech
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=sk_test_...
FRONTEND_URL=http://localhost:8080
```

Frontend (.env):
env
VITE_API_URL=http://localhost:5000
VITE_SANITY_PROJECT_ID=d9m1wvck
VITE_SANITY_DATASET=production
VITE_SANITY_TOKEN=your_sanity_token


© 2026 NeoTech Solutions (Pvt. Ltd.). All rights reserved.
