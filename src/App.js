import "./App.css";
import TileGrid from "./TileGrid/index";
import { useEffect, useState } from "react";

function App() {
    const [guess, setGuess] = useState("");

    function handleKeyUp(e) {
        var letter = `${e.key}`;
        setGuess((prev) => prev + letter);
    }

    useEffect(() => {
        document.addEventListener("keyup", handleKeyUp);

        return () => {
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, []);
    //Empty array, run many times
    //If no array, runs only once
    //state dependency array -> runs if state changes (State sideEffect)

    return (
        <div className="App" id="log">
            <TileGrid guess={guess}></TileGrid>
        </div>
    );
}

export default App;
