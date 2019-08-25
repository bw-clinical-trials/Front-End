import React from 'react';
import './App.css';


// Import Components
// import TrialData from './components/TrialData';
import UserForm from './components/questionnaire/UserForm.js';
import NavBar from './components/NavBar.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <UserForm />
    </div>
  );
}

export default App;
