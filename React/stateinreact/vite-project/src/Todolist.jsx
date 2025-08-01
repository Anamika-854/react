import "./todolist.css";

import { useState } from "react";

export default function Todolist() {
    let [Todos, setTodos] = useState(["simple task"]);


return(
    <>
<div className= "list">
    <input placeholder="Add the work you want to do"></input>
    <br></br>

    <button>Add</button> 
    <br></br>
    <hr></hr>
    <ul>{
       Todos.map((Todos) => (
         <li>{Todos}</li>
       
       )) };   
    

    </ul>
</div>
    </>
)
}
