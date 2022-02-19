import Row from './Row'

export default function TileGrid({guess}) {
  return (
    <>
    <div className = 'tileGrid'>
      <Row guess ={guess}/>
      <Row/>
      <Row/>
      <Row/>
      <Row/>
      <Row/>
    </div>
    </>
  )
}
