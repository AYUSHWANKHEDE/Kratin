// Reminder.js
import React from "react";
import "../styles/Reminder.css";

const Reminder = ({ reminders, removeReminder }) => {
  return (
    <div className="reminder-container">
      <h2>Reminder</h2>
      <ul>
        {reminders.map((reminder) => (
          <li key={reminder.id}>
            <p>
              <strong>Reminder:</strong> {reminder.text}
            </p>
            <p>
              <strong>Time:</strong>{" "}
              {new Date(reminder.time).toLocaleString()}
            </p>
            <button onClick={() => removeReminder(reminder.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reminder;
