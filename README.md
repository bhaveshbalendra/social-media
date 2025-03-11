# Social Media App

## Overview
The Social Media App is a full-stack web application that enables users to create posts, comment on them, and engage in real-time communication. The app is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and incorporates Redux for state management. Real-time features are implemented using WebSockets.

## Features
- User authentication (Sign up, Login, Logout)
- Create, read, update, and delete posts
- Like and comment on posts
- Real-time messaging system
- User profile management
- Responsive design for seamless user experience

## Tech Stack
- **Frontend:** React.js, Redux, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Real-time Communication:** Socket.IO
- **Authentication:** JWT (JSON Web Tokens)
- **Deployment:** Vercel (Frontend), Render/Heroku (Backend)

## Installation

### Prerequisites
- Node.js
- MongoDB (local or cloud instance)
- Git

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/social-media-app.git
   cd social-media-app
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
     MONGO_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     ```

4. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

5. Start the frontend development server:
   ```bash
   cd frontend
   npm start
   ```

## Usage
- Sign up and log in to the application.
- Create and share posts with the community.
- Engage in discussions through comments and likes.
- Chat with other users in real time.

## Contributing
Contributions are welcome! Feel free to fork the repo, make changes, and submit a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any queries or suggestions, contact:
- **Developer:** Bhavesh Balendra
- **Email:** your-email@example.com
- **GitHub:** https://github.com/your-username

