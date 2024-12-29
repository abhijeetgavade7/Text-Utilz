import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes, // Use Routes instead of Switch
//   Route, // Route remains the same but with a new syntax
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode is off", "success");
    } else {
      setMode('dark');
      document.body.style.backgroundColor = "#F0F8FF";
      showAlert("Dark mode is on", "success");
    }
  };

  return (
    <>
     
        <Navbar title="TextUtilz" Home="Home" mode={mode} togglemode={toggleMode} />
        <Alert alert={alert} />
        <TextForm showAlert={showAlert} mode={mode} heading="Enter the text here" />
      
        {/* <Router>
        
          <Routes>
            <Route exact path="/" element={ } />
            <Route exact path="/about" element={<About />} />
          </Routes>
      
      </Router> */}
    </>
  );
}

export default App;
