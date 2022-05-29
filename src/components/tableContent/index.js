import {Component} from "react"

import PopUp from "../PopUpContainer/popUpButton"
import './index.css';

export default class TableContent extends Component {
  state = {
    userList: [],
  }

  componentDidMount(){
    this.getData()
  }

  getData = async() => {
   const response = await fetch("https://jsonplaceholder.typicode.com/users") 
   if(response.ok) {
    const data = await response.json()
    this.setState({userList: data})
    console.log(data)
   }
   
  }
  render() {
    let data = this.state.userList.map(each => {
      return (
        <tr key={each.id} className="table-primary text-dark font">
          <td>{each.id}</td>
          <td>{each.name}</td>
          <td>{each.username}</td>
          <td>{each.address.city}</td>
          <td>{each.address.suite}</td>
          <td>{each.address.zipcode}</td>
        </tr>
      )
    })
   
    return (
      <div className="App container"> 
      <div className="pop-render-container">
      <PopUp />
          </div>  
      
       <table className="table table-bordered table-dark">
         <thead className="thead-dark">
           <tr className="bg-primary text-white">
             <td >ID</td>
             <td>NAME</td>
             <td>USERNAME</td>
             <td>CITY</td>
             <td>SUITE</td>
             <td>ZIPCODE</td>
           </tr>
         </thead>
        <tbody>
          {data}
        </tbody>
      </table>
      </div>
    )
  }
  
}
