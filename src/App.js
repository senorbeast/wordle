import "./App.css";
import TileGrid from "./TileGrid/index";
import { useState, useEffect } from 'react';

function App() {
    const [word, setWord] = useState('');

    useEffect(() => {

    const log = document.getElementById('log');

    document.addEventListener('keypress', logKey);
    var letter;
    
   
    function logKey(e) {
        var letter = `${e.key}`
        setWord((prev => prev + letter))
    console.log(letter)
        
  }
  return ()=>{
  }
    }, [])

    return (
        <div className="App" id="log">
            <header className="App-header">
            </header>
            <TileGrid></TileGrid>
        </div>
    );
}



export default App;
