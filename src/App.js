import React from "react";
import { useStateContext } from "./contexts/ContextProvider";

function App() {
  const { currentMode, toggleMode } = useStateContext();

  return (
    <>
    <div className={currentMode==="Dark"?"dark":""}>
      <h1 className="text-3xl dark:bg-black bg-green-200 text-black dark:text-white">{currentMode}</h1>
      <button onClick={()=>toggleMode()}> Click</button>
    </div>
    </>
  );
}

export default App;
