import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [darkModeText, setDarkModeText] = useState("Enable Dark Mode");

  const toggleMode = () => {
    if(darkMode) {
      setDarkModeText("Enable Dark Mode");
      setDarkMode(false);
    } else {
      setDarkModeText("Enable Light Mode");
      setDarkMode(true);
    }
  }

  const handleDarkMode = () => {
    if(darkModeText === "Enable Dark Mode") {
        setDarkModeText("Enable Light Mode");
        setDarkMode(true);
    } else {
        setDarkModeText("Enable Dark Mode");
        setDarkMode(false);
    }
  } 

  return (
    <>
      <Navbar title="TextUtils" aboutText="About Utils" darkMode={darkMode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below"/>
        {/* <About darkMode={darkMode}/> */}
      </div>
      <button type='button' className='btn btn-primary my-3 mx-2' onClick={handleDarkMode}>{darkModeText}</button>
    </>
  );
}

export default App;
