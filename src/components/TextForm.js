import React, {useState} from 'react'
import { toggleCase } from './Utils';

export default function TextForm(props) {
  
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
    }
  }

  const handleCopy = () => {
    var copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("Text copied!");
  }

  const handleExtraSpaces = () => {
    setText(text.split(/[ ]+/).join(" "));
  }

  const [text, setText] = useState("");
  return (
    <>
      <div className='container'>
        <h2>{props.heading}</h2>
          <div className="mb-3">
              <textarea className="form-control outline" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-2" onClick={handleToggleClick}>Toggle Case</button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
      </div>
      <div className='container my-3'>
        <h2>Your text summary: </h2>
        <p>{text ? text.split(" ").length : 0} words, {text.length} characters</p>
        <p>{0.008 * (text ? text.split(" ").length : 0)} minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  )
}
