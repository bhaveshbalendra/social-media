# Social Media App

## Overview
The Social Media App is a full-stack web application that enables users to create posts, comment on them, and engage in real-time communication. The app is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and incorporates Redux for state management. Real-time features are implemented using WebSockets. Cloudinary is used for media storage.

## Features
- User authentication (Sign up, Login, Logout)
- Create, read, update, and delete posts
- Like and comment on posts
- Real-time messaging system using Socket.IO
- User profile management
- Media uploads via Cloudinary
- Responsive design for seamless user experience

## Tech Stack
- **Frontend:** React.js, Redux, Tailwind CSS, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Real-time Communication:** Socket.IO
- **Authentication:** JWT (JSON Web Tokens)
- **Media Storage:** Cloudinary
- **Deployment:** Vercel (Frontend), Render/Heroku (Backend)

## Installation

### Prerequisites
- Node.js
- MongoDB (local or cloud instance)
- Git

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/bhaveshbalendra/social-media.git
   cd social-media
   ```

2. Install dependencies for backend and frontend:
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `backend` directory and add:
     ```
     FRONTEND_URL=http://localhost:5173
     MONGODB_URL=
     CLOUDINARY_CLOUD_NAME=
     CLOUDINARY_API_KEY=
     CLOUDINARY_SECRET_KEY=
     ```

4. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

5. Start the frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```

## Usage
- Sign up and log in to the application.
- Create and share posts with the community.
- Engage in discussions through comments and likes.
- Upload and manage media files using Cloudinary.
- Chat with other users in real time via Socket.IO.

