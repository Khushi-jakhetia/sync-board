import React, { useState } from "react";

interface NavbarProps {
  sessionId?: string;
  userCount?: number;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}


const Navbar: React.FC<NavbarProps> = ({
  sessionId,
  userCount = 1,
  darkMode,
  setDarkMode,
}) => {
  const [copied, setCopied] = useState(false);
const copySessionId = async () => {
  if (!sessionId) return;

  await navigator.clipboard.writeText(sessionId);

  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000);
};
const copyInviteLink = async () => {
  if (!sessionId) return;

  const inviteLink =
    `${window.location.origin}?session=${sessionId}`;

  await navigator.clipboard.writeText(inviteLink);

  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000);
};
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <span className="navbar-brand">🧑‍🎨 SyncBoard</span>

      <div className="ms-auto d-flex align-items-center gap-2">
        {sessionId && (
          <>
            <span className="text-white">
              <strong>Session:</strong> {sessionId}
            </span>
            <span className="text-white me-3">
  👥 {userCount} Online
</span>

            <button
                className="btn btn-outline-info btn-sm"
                onClick={copySessionId}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
              <button
                className="btn btn-outline-success btn-sm"
                onClick={copyInviteLink}
              >
                {copied ? "Copied!" : "Invite Link"}
              </button>
              <button
                className="btn btn-outline-light btn-sm"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? "☀️ Light" : "🌙 Dark"}
              </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
