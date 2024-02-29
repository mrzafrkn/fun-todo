import { useState } from "react"
function ImportanceLevel({select}) {

  const [selected, setSelected] = useState('Low');

  const bgColor = {
    low: selected === 'Low' && '#81b29a',
    medium:selected === 'Medium' && '#ffc300',
    high:selected === 'High' && '#c1121f',
  } 

  const handleLevelChange = (e) => {
    setSelected(e.target.value)
    select(e.target.value)
  }

  return (
    <ul className="importance"> 
      <li style={{backgroundColor:bgColor.low}}>
        <input
          
          type="radio"
          value="Low"
          id="lvl1"
          name="level"
          onChange={handleLevelChange}
       />
       <label htmlFor="lvl1">Low</label> 
      </li>

      <li style={{backgroundColor:bgColor.medium}}>
        <input
          type="radio"
          value="Medium"
          id="lvl2"
          name="level"
          onChange={handleLevelChange}
       />
       <label htmlFor="lvl2">Medium</label> 
      </li>
      
      <li style={{backgroundColor:bgColor.high}}>
        <input
          type="radio"
          value="High"
          id="lvl3"
          name="level"
          onChange={handleLevelChange}
       />
       <label htmlFor="lvl3">High</label> 
      </li>
    </ul>
  )
}



export default ImportanceLevel