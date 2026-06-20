# 🚀 SyncBoard

A modern real-time collaborative whiteboard built using **React, TypeScript, Fabric.js, and Socket.IO**. Users can create shared drawing sessions, collaborate live, view participant cursors with usernames, and work together on a synchronized canvas in real time.

---

## 🌐 Live Demo

🔗 **Frontend:** https://your-frontend-url.vercel.app

🔗 **Backend:** https://your-backend-url.onrender.com

🎥 **Demo Video:** https://your-demo-video-link

---

## 📸 Preview

Add screenshots of your application here.

![Preview](./assets/preview.png)

---

## ✨ Features

- 🎨 Freehand Drawing
- 🌐 Real-Time Collaboration
- 👥 Live User Presence Counter
- 🖱️ Live Cursor Tracking with Usernames
- 🧑‍🤝‍🧑 Session-Based Collaboration
- 📋 Copy Session ID
- 📨 Share Invite Link
- 🔄 Undo Functionality
- 🔁 Redo Functionality
- 🧹 Clear Canvas
- ✏️ Add Text Objects
- 🎯 Adjustable Brush Size
- 🌈 Custom Brush Colors
- 🌙 Dark Mode
- 📥 Download Canvas as PNG
- 📱 Fully Responsive Design

---

## 🛠️ Tech Stack

### Frontend

- React
- TypeScript
- Fabric.js
- Bootstrap
- Socket.IO Client

### Backend

- Node.js
- Express.js
- Socket.IO

### Deployment

- Vercel
- Render / Railway

---

## 📂 Project Structure

```text
syncboard/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   └── Whiteboard.tsx
│   │   ├── utils/
│   │   │   └── socket.ts
│   │   ├── App.tsx
│   │   └── main.tsx
│   │
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── server.ts
│   │   └── socket.ts
│   │
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/syncboard.git

cd syncboard
```

---

## ▶️ Run Backend

```bash
cd backend

npm install

npm run dev
```

Backend runs on:

```text
http://localhost:3001
```

---

## ▶️ Run Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## 🎯 How to Use

### Create a Session

1. Enter your name.
2. Click **Create New Session**.
3. A unique session ID will be generated.

### Join a Session

1. Enter your name.
2. Enter the Session ID.
3. Click **Join Session**.

### Share Session

- Copy Session ID
- Copy Invite Link
- Send it to teammates

### Collaborate

- Draw in real time
- View other users' cursors
- See active participant count
- Add text annotations
- Download the whiteboard as PNG

---

## 📡 Real-Time Features

### Live Drawing

All drawings are instantly synchronized across connected users.

### Live Cursor Tracking

Users can see:

- Cursor position
- Username
- Real-time movement

### User Presence

- Online participant count
- Join/Leave updates
- Session-based collaboration

### Session Management

Each whiteboard session is isolated using Socket.IO rooms.

---

## 🚀 Future Improvements

- 💬 Team Chat
- 📌 Sticky Notes
- 📄 Multi-Page Whiteboards
- ☁️ Cloud Storage
- 🖼️ Image Uploads
- 🎤 Voice Collaboration
- 📂 Save Boards
- 🤖 AI Assistant

---

## 👩‍💻 Author

**Khushi Jakhetia**

Built using React, TypeScript, Fabric.js, and Socket.IO to enable seamless real-time collaboration.

---

## ⭐ Support

If you like this project, consider giving it a star ⭐ on GitHub.

Contributions, issues, and feature requests are always welcome.