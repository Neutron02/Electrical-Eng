import React, { useState, useEffect } from "react";
import { TimelineMax } from "gsap";

const TitlePage = () => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    useEffect(() => {
        let text1 = "Hello World";
            setInterval(() => {
                setIndex(index + 1);
                setText(text1.substring(0, index));
            },200)

    },[]);

    return (
        <div id="title-container">
            <span id="title-span">{text}</span>
        </div>
    );
};


export default TitlePage;