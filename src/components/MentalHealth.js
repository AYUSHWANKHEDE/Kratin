import React, { useState, useEffect } from "react";
import "../styles/MentalHealth.css";

const MentalHealth = () => {
  const [mood, setMood] = useState("");
  const [timer, setTimer] = useState(0);
  const [quote, setQuote] = useState("");
  const [timerPaused, setTimerPaused] = useState(false);

  const handleMoodChange = (event) => {
    setMood(event.target.value);
  };

  const handleStartTimer = () => {
    // Set the timer to 2 minutes (120 seconds)
    setTimer(120);
    setTimerPaused(false);

    // Fetch a meditation quote
    fetch("https://api.quotable.io/random?tags=meditation")
      .then((response) => response.json())
      .then((data) => setQuote(data.content))
      .catch((error) => console.error("Error fetching quote:", error));
  };

  const handlePauseTimer = () => {
    setTimerPaused(true);
  };

  const handleStopTimer = () => {
    setTimer(0);
    setTimerPaused(false);
  };

  useEffect(() => {
    let interval;

    if (timer > 0 && !timerPaused) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer, timerPaused]);

  return (
    <div className="mental-health-container">
      <h2>Mental Health</h2>
      <div className="mood-tracking">
        <label>How are you feeling today?</label>
        <select value={mood} onChange={handleMoodChange}>
          <option value="">Select</option>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="calm">Calm</option>
        </select>
      </div>
      <p className="meditation-info">
        Take a moment for yourself. Meditation can promote mental well-being.<br />
        "Quiet the mind, and the soul will speak."
      </p>
      <div className="meditation-timer">
        <button onClick={handleStartTimer} disabled={timer > 0 || timerPaused}>
          Start Meditation Timer (2 minutes)
        </button>
        {timer > 0 && (
          <>
            <p>Time remaining: {timer} seconds</p>
            <button onClick={handlePauseTimer}>Pause</button>
            <button onClick={handleStopTimer}>Stop</button>
          </>
        )}
      </div>
      <div className="quote-container">
        {quote && (
          <>
            <h3>Meditation Quote:</h3>
            <p>{quote}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default MentalHealth;
