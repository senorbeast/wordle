import Tile from "./Tile"
import { useState, useEffect } from "react"
import {getArray} from '../utils/tilestate'


export default function Row({guess}){
  // guess is a state -> if guess changes rerender
  // but if guessArray changes no rendering happens

  const [gArr, setgArr] = useState(getArray(guess))
  useEffect(() => {
    setgArr(getArray(guess))
    // console.log({guess}, {gArr})
  }, [guess])
  
  return(
    <>
      <div className = 'row'>
        <Tile letter={gArr[0]}/>
        <Tile letter={gArr[1]}/>
        <Tile letter={gArr[2]}/>
        <Tile letter={gArr[3]}/>
        <Tile letter={gArr[4]}/>
      </div >
    </>
  )
}
