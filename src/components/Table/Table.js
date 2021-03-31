import React, { Component } from "react";
import Row from './Row'
import './Table.css';


export class Table extends Component {

  constructor(props) {
    super(props) 
    this.state = { 
      clicked:false,
       Row: [
          {id:1,name: 'Raghda'},
          {id:2,name: 'Jihad'},
          {id:3,name: 'Haneen'}
       ]
    };
  }


 renderTableData() {
  return this.state.Row.map((eachItem, index) => {
    
     return (
      <tr key={eachItem.id}>
        <Row id={eachItem.id} name={eachItem.name}/>
        </tr>
     )
})}

renderTableHeader() {
  let header = Object.keys(this.state.Row[0])
  return header.map((key, index) => {
     return <th key={index}>{key}</th>
  })
}
render() {
    return (   
      <div>
          {this.renderTableHeader()} 
          <tr>
         {this.renderTableData()} 
          </tr>
   </div>
   )
  }
}

export default Table;
