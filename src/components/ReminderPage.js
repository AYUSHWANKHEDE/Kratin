// ReminderPage.js
import React from "react";
import Reminder from "./Reminder";
import AddReminder from "./AddReminder";

const ReminderPage = ({ reminders, addReminder, removeReminder }) => {
  return (
    <div>
      <h2>Reminders</h2>
      <AddReminder addReminder={addReminder} />
      <Reminder reminders={reminders} removeReminder={removeReminder} />
    </div>
  );
};

export default ReminderPage;
