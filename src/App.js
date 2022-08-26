import React from "react";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { useStateContext } from "./contexts/ContextProvider";
import {FiSun, FiMoon} from 'react-icons/fi'


function App() {
  const { currentMode, toggleMode } = useStateContext();

  return (
    <>
      <div className={currentMode === "Dark" ? "dark" : ""}>
        <BrowserRouter>
          <div className="h-screen dark:bg-black bg-f-bg text-black dark:text-white overflow-auto">
            <button
              onClick={() => toggleMode()}
              className="flex justify-center items-center border-2 rounded-full h-12 w-12 fixed z-10 bottom-5 right-5  dark:text-white text-black shadow hover:bg-gray-100 hover:dark:bg-fdark-selected bg-f-bg dark:bg-fdark-bg"
            >
              {currentMode ==="Dark"? <FiSun size={30} strokeWidth={1.5}/> : <FiMoon size={30} strokeWidth={1.5}/>}
            </button>

            <AppRouter />
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
