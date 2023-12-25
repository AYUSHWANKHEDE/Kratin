import React, { useState } from "react";
import "../styles/MedicationList.css";

const MedicationList = ({ medications, removeMedication, addMedication }) => {
  const [medicationName, setMedicationName] = useState("");

  const handleAddMedication = () => {
    if (medicationName.trim() !== "") {
      addMedication(medicationName);
      setMedicationName("");
    }
  };

  return (
    <div className="medication-list">
      <div className="add-medication-form">
        <h2>Add Medication</h2>
        <div>
          <input
            type="text"
            placeholder="Medication name"
            value={medicationName}
            onChange={(e) => setMedicationName(e.target.value)}
          />
          <button onClick={handleAddMedication}>Add</button>
        </div>
      </div>
      <h2>Medications</h2>
      <ul>
        {medications.map((medication) => (
          <li key={medication.id}>
            {medication.name}
            <button onClick={() => removeMedication(medication.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicationList;
