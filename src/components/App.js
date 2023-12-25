// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import MedicationList from "./MedicationList";
import ReminderPage from "./ReminderPage";
import MentalHealth from "./MentalHealth"; // Import the new component
import Home from "./Home";
import "../styles/App.css";

function App() {
  const [medications, setMedications] = useState([
    { id: 1, name: "Vitamin C" },
    { id: 2, name: "Calcium" },
    { id: 3, name: "PainKiller" },
  ]);

  const [reminders, setReminders] = useState([
    {
      id: 1,
      text: "It's time to take your Vitamin C for a healthy immune system!",
      time: new Date("2023-08-25T12:00:00").toISOString(),
    },
    {
      id: 2,
      text: "Don't forget to take your Calcium for strong and healthy bones",
      time: new Date("2023-08-26T15:30:00").toISOString(),
    },
    {
      id: 3,
      text: "Take your Painkiller as needed for relief from discomfort or pain",
      time: new Date("2023-08-27T10:00:00").toISOString(),
    },
  ]);

  const addMedication = (medicationName) => {
    const newMedication = {
      id: new Date().getTime(),
      name: medicationName,
    };
    setMedications([...medications, newMedication]);
  };

  const removeMedication = (medicationId) => {
    const updatedMedications = medications.filter(
      (medication) => medication.id !== medicationId
    );
    setMedications(updatedMedications);
  };

  const addReminder = (reminderText, reminderTime) => {
    const newReminder = {
      id: new Date().getTime(),
      text: reminderText,
      time: reminderTime,
    };
    setReminders([...reminders, newReminder]);
  };

  const removeReminder = (reminderId) => {
    const updatedReminders = reminders.filter(
      (reminder) => reminder.id !== reminderId
    );
    setReminders(updatedReminders);
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home reminders={reminders} medications={medications} />}
          />
          <Route
            path="/medications"
            element={
              <MedicationList
                medications={medications}
                removeMedication={removeMedication}
                addMedication={addMedication}
              />
            }
          />
          <Route
            path="/reminders"
            element={
              <ReminderPage
                reminders={reminders}
                addReminder={addReminder}
                removeReminder={removeReminder}
              />
            }
          />
          {/* Add the route for the MentalHealth component */}
          <Route path="/mental-health" element={<MentalHealth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
