import React, { useState, useEffect } from "react";
const Toast = ({ message, duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        backgroundColor: "black",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      {message}
    </div>
  );
};

export default Toast;
