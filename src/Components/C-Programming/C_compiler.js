import React, { useRef, useEffect } from "react";
import C_LeftHandNav from "./C_LeftHandNav";
import "./C_compiler.css";

const Compiler = () => {
  const terminalInput = useRef();
  const terminalHistory = useRef();

  useEffect(() => {
    const initialPrompt = document.createElement("div");
    initialPrompt.innerHTML = "MacBook-Pro-6:Electrical-Eng 20scotts$";
    terminalHistory.current.appendChild(initialPrompt);
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      // Append the entered command to the terminal history
      const command = document.createElement("div");
      command.innerHTML = "MacBook-Pro-6:Electrical-Eng 20scotts$ " + terminalInput.current.value;
      terminalHistory.current.appendChild(command);

      // Clear the textarea
      terminalInput.current.value = "";

      // Scroll the terminal to the bottom
      terminalHistory.current.parentElement.scrollTop =
        terminalHistory.current.parentElement.scrollHeight;
    }
  };

  return (
    <div className="C-compiler-container">
      <C_LeftHandNav />
      <div className="C-compiler-content">
        This is content
        <div className="terminal-window">
          <header>
            <div className="button green"></div>
            <div className="button yellow"></div>
            <div className="button red"></div>
          </header>
          <section className="terminal">
            <div ref={terminalHistory} className="history"></div>
            <textarea
              ref={terminalInput}
              className="typed-cursor"
              placeholder=""
              onKeyDown={handleKeyDown}
            ></textarea>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Compiler;
