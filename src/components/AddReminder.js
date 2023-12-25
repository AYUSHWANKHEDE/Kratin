import React, { useState } from "react";
import "../styles/AddReminder.css"; // Updated CSS file name

const AddReminder = ({ addReminder }) => {
  const [reminderText, setReminderText] = useState("");
  const [reminderTime, setReminderTime] = useState(""); // Store reminder time

  function handleSubmit(event) {
    event.preventDefault();

    if (reminderText.trim() !== "" && reminderTime) {
      addReminder(reminderText, new Date(reminderTime).toISOString());
      setReminderText("");
      setReminderTime("");
    }
  }

  return (
    <div className="add-reminder-container"> {/* Updated class name */}
      <h2>Add Reminder</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter reminder text" 
          value={reminderText}
          onChange={(event) => setReminderText(event.target.value)}
        />
        <input
          type="datetime-local"
          placeholder="Select reminder time" 
          value={reminderTime}
          onChange={(event) => setReminderTime(event.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default AddReminder;
