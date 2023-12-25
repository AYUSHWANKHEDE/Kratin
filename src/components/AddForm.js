import React, { useState } from "react";
import AddMedicationForm from "./AddMedicationForm";
import AddReminder from "./AddReminder";

const AddForm = ({ addMedication, addReminder }) => {
  return (
    <div>
      <AddMedicationForm addMedication={addMedication} />
      <AddReminder addReminder={addReminder} />
    </div>
  );
};

export default AddForm;
