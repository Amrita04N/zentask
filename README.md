ZenTask – Task Management Dashboard

ZenTask is a modern Task Management Dashboard built using React.js and Redux Toolkit.
It allows users to manage daily tasks with features like adding, deleting, searching, filtering, task status toggling, and light/dark theme support.
The application uses a mock REST API powered by JSON Server, deployed separately.

Live Demo

Frontend (Vercel):
https://zentask.vercel.app

Backend API (Render – JSON Server):
https://zentask-api-9xyf.onrender.com/tasks

Note: The backend is hosted on Render’s free tier, so the first request may take ~30–50 seconds due to cold start.

Features

View list of tasks

Add a new task (instant UI update)

Delete a task

Mark task as Completed / Pending

Search tasks by title

Filter tasks (All / Pending / Completed)

Light / Dark theme toggle

Persistent data using mock REST API

Responsive UI

Tech Stack
Frontend

React.js (Functional Components & Hooks)

Redux Toolkit (State Management)

React Redux

Tailwind CSS / Custom Styling

Vite

Backend

JSON Server (Mock REST API)

Node.js

Render (Deployment)

Deployment

Frontend: Vercel

Backend: Render

Project Structure
zentask/
│
├── backend/
│   ├── db.json
│   ├── package.json
│   └── server.js
│
├── src/
│   ├── app/
│   │   └── store.js
│   ├── features/
│   │   └── tasks/
│   │       ├── tasksSlice.js
│   │       └── tasksAPI.js
│   ├── components/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md

Local Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/<your-username>/zentask.git
cd zentask

2️⃣ Install frontend dependencies
npm install

3️⃣ Start frontend
npm run dev

4️⃣ Start backend (JSON Server)
cd backend
npm install
npm start


Backend will run at:

http://localhost:5000/tasks

API Endpoints
Method	Endpoint	Description
GET	/tasks	Fetch all tasks
POST	/tasks	Add a new task
PUT	/tasks/:id	Update task
DELETE	/tasks/:id	Delete task
Design Decisions

Redux Toolkit was used to reduce boilerplate and manage predictable global state.

Async Thunks handle API calls cleanly and keep UI components simple.

JSON Server simulates real backend behavior without requiring a database.

Theme state is managed globally to instantly update UI.

Future Improvements (Optional)

Edit task title

Persist theme preference using localStorage

Loading and error states

Unit tests using Jest / React Testing Library

Authentication (JWT)

Loom Video Walkthrough

A Loom video explaining the application and code structure will be attached separately.

Author

Amrita Nirbheek
Final-year B.Tech CSE student
Built as part of a frontend assignment to demonstrate React, Redux Toolkit, and deployment skills.