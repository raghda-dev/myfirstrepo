import React,{useState} from 'react'
import './Table.css';

const setFont = {
  textDecoration: 'line-through 2px red',
}
const font ={
color:"black"
}

function Row(props = {}) {
  const [state,setState] = useState(false);
  const {id,name} = props;
  return(
    <table>
    <tr>
      
      <td>{props.id}</td>
          {state === true? 
      <td style={setFont}>{props.name}</td>:
      <td style={font}>{props.name}</td>
          }
      <td>
        <button onClick={() => setState(state => !state)}>
          change
        </button>
      </td>
    </tr>
 
    </table>
  )
}

export default Row



