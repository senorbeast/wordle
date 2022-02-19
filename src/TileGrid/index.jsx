import React from 'react'
import Row from './Row'

// Coponent divison:
//    Row: Every row has diff state, correct word or incorrect dictionary word.
//    Tile: Every Tile has diff state, absent, present, correct.

// Pass 5 letters to 1st Row, which passes 1 letter to each tile 
// Validate the 5 letter word after its "Entered"
// Categorize it to absent, present, correct
// Highlight each Tile Accordingly
// Save the first Row 
// repeat



export default function TileGrid() {
  return (
    <>
    <div className = 'tileGrid'>
      <Row/>
      <Row/>
      <Row/>
      <Row/>
      <Row/>
      <Row/>
    </div>
    </>
  )
}
