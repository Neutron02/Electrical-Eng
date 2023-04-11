import "./C_Home.css"
import React from "react"
import C_LeftHandNav from "./C_LeftHandNav"
import C_text_section from "./C_text_section"
import Code from "./C_Code"
const C_Home = () => {
    return(
        <div className="C-home-container">
            <C_LeftHandNav />
            <div className="C-content"> 

                <h1 style={{color: "Blue"}}>
                    What is C?
                </h1>
                <Code>
                    
                </Code>
                <C_text_section />
            
            </div>
        </div>
    )
}

export default C_Home;