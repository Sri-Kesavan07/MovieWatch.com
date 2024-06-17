import React, { useState } from "react";
function ColorPicker() {
  let [color, setColor] = useState("#FFFFFF");
  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <>
      <div className="container">
        <h1>Color Picker</h1>
        <div className="color-display" style={{ backgroundColor: color }}>
          <p>selected color: {color}</p>
        </div>
        <label>Select a Color:</label>
        <input type="color" value={color} onChange={handleColorChange} />
      </div>
    </>
  );
}
export default ColorPicker;
