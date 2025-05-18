import React, { useState } from "react";


function Eightball({ answers }) {
    const [message, setMessage] = useState("Think of a Question");
    const [color, setColor] = useState("black");

    return (
            <div className="Eightball" style={{backgroundColor: color, color: "white"}} onClick={() => {
                const randomIndex = Math.floor(Math.random() * answers.length);
                const { msg, color } = answers[randomIndex];
                setMessage(msg);
                setColor(color);
            }} >
            <p>{message}</p> {/* <-- This was missing! */}
          </div>
        );
    }

export {Eightball};