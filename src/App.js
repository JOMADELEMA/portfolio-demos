import React from "react";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { useStateContext } from "./contexts/ContextProvider";

function App() {
  const { currentMode, toggleMode } = useStateContext();

  return (
    <>
      <div className={currentMode === "Dark" ? "dark" : ""}>
        <BrowserRouter>
          <div className="h-screen dark:bg-black bg-green-200 text-black dark:text-white">
            <button onClick={() => toggleMode()}> Click</button>
            <h1 className="text-3xl ">{currentMode}</h1>
            <AppRouter />
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
