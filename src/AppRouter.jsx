import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';

function WorkoutTracker() {
  return <div><h2>Workout Tracker</h2><p>Details about the Workout Tracker project.</p></div>;
}

function Translations() {
  return <div><h2>Translations</h2><p>Details about the Translations project.</p></div>;
}

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/workout-tracker" element={<WorkoutTracker />} />
        <Route path="/translations" element={<Translations />} />
      </Routes>
    </Router>
  );
}
