import React, { useState, useEffect } from "react";
import { TimelineMax } from "gsap";
import './TitlePage.css'

const TitlePage = () => {
    const [textToShow, setDisplayText] = useState("ElectricalEng.Org");
    const [currText, setText] = useState("");
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setText(textToShow.slice(0, currText.length + 1));
        }, 100);
        return () => {
            clearTimeout(timeout);
        };
    },[currText]);

    return (
        <div id="header-container">
            <div id="title-container">
                <span id="title-span">{currText}</span>
            </div>
        </div>
    );
};


export default TitlePage;