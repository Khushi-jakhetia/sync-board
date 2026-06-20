import React, { useEffect, useState } from 'react';

import Whiteboard from './components/Whiteboard';
import { socket } from "./utils/socket";

import Navbar from './components/Navbar';

const App = () => {
  const [authenticated, setAuthenticated] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(true);
  const [sessionId, setSessionId] = useState<string>("");
  const [inputSessionId, setInputSessionId] = useState<string>("");
  //const initializedRef = useRef<Boolean>(false); 
  const [userCount, setUserCount] = useState(1);
  const [username, setUsername] = useState("");
  const [notification, setNotification] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
  setAuthenticated(true);
  setLoading(false);
}, []);

useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const sessionFromUrl = params.get("session");

  if (sessionFromUrl) {
    setSessionId(sessionFromUrl);
  }
}, []);
useEffect(() => {
  socket.on("users-count", (count) => {
    console.log("Users:", count);
    setUserCount(count);
  });

  return () => {
    socket.off("users-count");
  };
}, []);

useEffect(() => {
  socket.on("user-joined", (name) => {
    setNotification(`🎉 ${name} joined the session`);

    setTimeout(() => {
      setNotification("");
    }, 3000);
  });

  socket.on("user-left", (name) => {
    setNotification(`👋 ${name} left the session`);

    setTimeout(() => {
      setNotification("");
    }, 3000);
  });

  return () => {
    socket.off("user-joined");
    socket.off("user-left");
  };
}, []);

  const handleCreateSession = () => {
    if (!username.trim()) {
      alert("Please enter your name");
      return;
    }

    const newSessionId = Math.random().toString(36).substr(2, 9);
    setSessionId(newSessionId);
  };

  const handleJoinSession = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username.trim()) {
      alert("Please enter your name");
      return;
    }

    if (inputSessionId.trim()) {
      setSessionId(inputSessionId.trim());
    }
  };

  if (loading) return <div>Loading...</div>;

return (
  <div
    className={
      darkMode
        ? "bg-dark text-light min-vh-100"
        : "bg-light text-dark min-vh-100"
    }
  >
<Navbar
  sessionId={sessionId}
  userCount={userCount}
  darkMode={darkMode}
  setDarkMode={setDarkMode}
/>
{notification && (
  <div
    className="alert alert-info text-center m-3"
    role="alert"
  >
    {notification}
  </div>
)}
    <div className="container mt-4">
      <h3 className="mb-3">Real-time Whiteboard</h3>

      {authenticated && !sessionId && (
        <div className="session-controls">
           <input
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control mb-3"
              style={{ maxWidth: "250px" }}
            />
          <button className="btn btn-primary me-2" onClick={handleCreateSession}>
            Create New Session
          </button>
          <form onSubmit={handleJoinSession} style={{ display: 'inline-block' }}>
            <input
              type="text"
              placeholder="Enter Session ID"
              value={inputSessionId}
              onChange={e => setInputSessionId(e.target.value)}
              className="form-control d-inline-block"
              style={{ width: 180, marginRight: 8 }}
            />
            <button className="btn btn-success" type="submit">
              Join Session
            </button>
          </form>
        </div>
      )}

      {authenticated && sessionId && <Whiteboard
  sessionId={sessionId}
  username={username}
/>}
      {!authenticated && <div>Please log in to access the whiteboard.</div>}
    </div>
  </div>
);

};

export default App;