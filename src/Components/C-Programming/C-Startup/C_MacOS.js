import React from "react";
import C_LeftHandNav from "../C_LeftHandNav";
import "./C_MacOS.css"
import Code from "../C_Code";
import C_text_section from "../C_text_section";

const linux = "gcc --version"
const C_MacOS = () => {
    return(
        <div className="C_MacOS-container">
            <C_LeftHandNav />
            <div className="C_MacOS-content">
                <h1>How to start C on MAC OS (Its pretty easy)</h1>
                <Code code={linux} title={"You already have it"}>
                </Code>
                <p>
                    You more than likely already have the Clang compiler, aliased with `gcc` <br></br>
                    Just type the above command into the terminal
                </p>
                <Code code={"Apple clang version 14.0.0 (clang-1400.0.29.202)\nTarget: arm64-apple-darwin22.3.0\nThread model: posix\nInstalledDir: /Library/Developer/CommandLineTools/usr/bin"} title={"Output if you already have it"}></Code>
                <p>
                    Any variation of this means that you have gcc
                </p>
                <h1>
                    What is gcc?
                </h1>
                <p>
                    gcc is the compiler developed by GNU, however, for the MacOS software, it is actually Clang disguised as GNU.
                </p>
            </div>
        </div>
    )

}

export default C_MacOS;