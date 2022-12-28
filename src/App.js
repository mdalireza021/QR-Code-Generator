import './App.css';
import React,{useState}from 'react';
import {QRCodeCanvas} from 'qrcode.react';
function App() {
  const [url,setUrl]=useState("");
  const [value,setValue]=useState("");
  
  const handleOnChange=(e)=>
  {
    setUrl(e.target.value);
  }
  const handleClick=()=>
  {
    setValue(url);
  }
  const qrcode = (
    <QRCodeCanvas id="qrCode" value={value} size={260} bgColor={"#0000"} level={"M"}
    />
  );
  return (
    <div className='app'>
                <h1>QR Code Generator</h1>
                <p>Paste a url or entire text to create a QR code</p>
            
            <div className="form">
                <input type="text" onChange={handleOnChange} placeholder="Enter text or url"/>
                <button onClick={handleClick} >Generate QR Code</button>
            </div>
            <div className="qr-code">
                {qrcode}
            </div>
    </div>
  );
}
export default App;
