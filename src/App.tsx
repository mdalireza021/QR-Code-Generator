import "./App.css";
import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const App: React.FC = () => {
  const [url, setUrl] = useState<string>("");
  const [value, setValue] = useState<string>("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleClick = () => {
    setValue(url);
    setUrl("");
  };

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={value}
      size={260}
      bgColor={"#0000"}
      level={"M"}
      aria-label="Generated QR Code"
    />
  );

  return (
    <div className="card-container">
      <h1>QR Code Generator</h1>
      <p>Paste a url or entire text to create a QR code</p>

      <input
        type="text"
        onChange={handleOnChange}
        value={url}
        placeholder="Enter text or url"
      />

      <button onClick={handleClick} disabled={!url.trim()}>
        Generate QR Code
      </button>

      <div className="qr-code">{qrcode}</div>
    </div>
  );
};
export default App;
