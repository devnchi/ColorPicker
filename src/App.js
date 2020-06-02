import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColorPicker from "./ColorPicker"
import './ColorPicker.css';

export default function App() {

    const [state, updateState] = React.useState("#fff");

    document.body.style.backgroundColor = state;

    const handleInput = e => {
      updateState(e.target.value);
    }

    return <ColorPicker value={state} onChange={handleInput}/>

}
