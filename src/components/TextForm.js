import React, {useState} from 'react'
import { toggleCase } from './Utils';

export default function TextForm(props) {
  let myStyle = {};
    if(props.darkMode) {
        myStyle = {
            color: 'white',
            backgroundColor: 'black'
        };
    } else {
        myStyle = {};
    }
  const handleUpClick = () => {
    setText(text.toUpperCase());
  }

  const handleLoClick = () => {
    setText(text.toLowerCase());
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleToggleClick = () => {
    setText(toggleCase(text));
  }

  const handleClear = () => {
    if(window.confirm("Are you sure you want to clear the text?")) {
      setText("");
      props.showAlertMsg("Text Cleared!", "danger");
    }
  }

  const handleCopy = () => {
    var copyText = document.getElementById("myBox");
    copyText.select();
    try {
      document.execCommand("copy");
      props.showAlertMsg("Text Copied!", "success");
    } catch (err) { 
      console.log('Error while copying to clipboard'); 
      navigator.clipboard.writeText(copyText.value);
      props.showAlertMsg("Text Copied!", "success");
    }
  }

  const handleExtraSpaces = () => {
    setText(text.split(/[ ]+/).join(" "));
  }

  const [text, setText] = useState("");
  return (
    <>
      <div className='container' style={myStyle}>
        <h2>{props.heading}</h2>
          <div className="mb-3">
              <textarea className="form-control outline" onChange={handleOnChange} value={text} id="myBox" rows="8" style={myStyle}></textarea>
          </div>
          <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleToggleClick}>Toggle Case</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear Text</button>
      </div>
      <div className='container my-3' style={myStyle}>
        <h2>Your text summary: </h2>
        <p>{text ? text.split(" ").length : 0} words, {text.length} characters</p>
        <p>{0.008 * (text ? text.split(" ").length : 0)} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text : "Enter something in the textbox above to preview it here!"}</p>
      </div>
    </>
  )
}
