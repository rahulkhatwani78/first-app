import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [alert, setAlertMsg] = useState(null);

  const toggleMode = () => {
    if(darkMode) {
      setDarkMode(false);
      document.body.style.backgroundColor = 'white';
    } else {
      setDarkMode(true);
      document.body.style.backgroundColor = 'black';
    }
  }

  const showAlertMsg = (message, type) => {
    setAlertMsg({
        message: message,
        type: type
      });

    setTimeout(() => setAlertMsg(null), 2000);
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About Utils" darkMode={darkMode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" darkMode={darkMode} showAlertMsg={showAlertMsg}/>
        <About darkMode={darkMode}/>
      </div>
    </>
  );
}

export default App;
