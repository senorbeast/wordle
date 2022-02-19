import "./App.css";
import TileGrid from "./TileGrid/index";
import { useEffect, useState } from "react";

const LETTER_LENGHT = 5;

// Coponent divison:
//    Row: Every row has diff state, correct word or incorrect dictionary word.
//!       Row state can be checked on input no need for separate row component
//    Tile: Every Tile has diff state, absent, present, correct.

// TODO:
// [  ] Keyboard listener, control backspace, enter, other keys
// [  ] Validate the 5 letter word after its "Entered"
// [ ] Pass 5 letters to 1st Row, which passes 1 letter to each tile
// [  ] Categorize it to absent, present, correct
// [  ] Highlight each Tile Accordingly
//? Save the first Row, new state for each row
// repeat
//  After enter is pressed and if text is valid, new 5 letters are stored in guess2 state and so on.

function App() {
    const [guess, setGuess] = useState("");

    function handleKeyUp(e) {
        var letter = `${e.key}`;
        setGuess((prev) => {
            // Handle Enter, Backspace
            // 5 letters Only
            // return _____ if empty( easier to split into array for each Row)
            // return ab___
            // allow only alphabets

            if (prev.length === LETTER_LENGHT) {
                return prev;
            }
            var newGuess = prev + letter;
            // console.log(guess, prev);
            return prev + letter;
        });
        // console.log(guess);
    }
    //? Possible Conclusion: React state not accessible in non react components (vanilla javascript fxn)
    // But setState is accessible

    useEffect(() => {
        document.addEventListener("keyup", handleKeyUp);

        return () => {
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, []);
    //? Empty array, run many times
    //If no array, runs only once
    //state dependency array -> runs if state changes (State sideEffect)

    return (
        <div className="App">
            <TileGrid guess={guess}></TileGrid>
        </div>
    );
}

export default App;
