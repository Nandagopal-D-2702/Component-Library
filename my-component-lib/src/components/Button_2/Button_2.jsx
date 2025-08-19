import { useState } from "react";
import "./Button_2.css"

const GlassButton = ({ initialLabel = 'Click Me', clickedLabel = 'Clicked!', variant = 'glass', disabled = false}) => {

    const [label, setLabel] = useState(initialLabel);
    const [clicked, setClicked] = useState(false);

    const handelClick = () => {
        if(!clicked){
            setLabel(clickedLabel);
            setClicked(true);
        }
    };

    return (
        <button className={`btn ${variant}`} onClick={handelClick} disabled={disabled}>
            {label}
        </button>
    );
}; 

export default GlassButton;