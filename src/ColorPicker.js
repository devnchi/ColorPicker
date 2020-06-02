import React from 'react';

const ColorPicker = ({ value, onChange, ...rest })=> {
  return (
    <div className="PickerContainer">
      <span>Color Picker</span>
      <br/>
      <input className="ColorGradient" type="color" value={value} onChange={onChange} {...rest } />
      <br/>
      <input className="ColorValue" type="text" value={value} onChange={onChange} {...rest }/>
    </div>
  );
}

export default ColorPicker;
