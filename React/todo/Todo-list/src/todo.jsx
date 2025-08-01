import { useState } from "react";
import "./todo.css";
import { v4 as uuidv4 } from 'uuid';

let Todo = () => {
    let [Tasks, setTasks] = useState([{ tasks: "sample task", id: uuidv4(), marks: false }]);
    let [newTodo, setNewTodo] = useState("");

    let ClickAdd = () => {
        setTasks([...Tasks, { tasks: newTodo, id: uuidv4() }]);
        setNewTodo("");
    };

    let Delete = (id) => {
        setTasks((pretool) => Tasks.filter((pretool) => pretool.id != id));

    }
    let uppercase = () => {
        setTasks((prevTask) =>
            prevTask.map((Tasks) => {

                return {
                    ...Tasks,
                    tasks: Tasks.tasks.toUpperCase(),

                }
            }
            ))
    };


    // let uppercaseforone = (id) => {
    //     setTasks((prevTask) =>
    //         prevTask.map((Tasks) => {
    //             if (Tasks.id === id) {

    //                 return {
    //                     ...Tasks,
    //                     tasks: Tasks.tasks.toUpperCase(),

    //                 }
    //             } else {
    //                 return Tasks;
    //             }

    //         }
    //         ))
    // };

let mark = (id) => {
setTasks((prevTask) =>{
    prevTask.map((Tasks) => {
        if(Tasks.id === id){
        
            return {
                ...Tasks,
                marks: true,

            }            
        }
    })
})
}

    let AddTask = (event) => {
        setNewTodo(event.target.value);
    }

    return (
        <>
            <div className="main-box">
                <input className="input" placeholder="Add the Task " value={newTodo} onChange={AddTask}></input>
                <button onClick={ClickAdd}>Add</button>
                <br></br>
                <hr></hr>
                <ul>{
                    Tasks.map((Task) =>
                    (<li key={Task.id}>
                        <span>{Task.tasks}</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="delete" onClick={() => Delete(Task.id)}>Delete</button>
                        {/* <button onClick={()  => uppercaseforone(Task.id) }>uppercaseforone</button> */}
                        <button onClick={() => mark(Task.id)} style={Task.marks ? { textDecoration: "line-through" } : {}}>Done</button>
                    </li>

                    )
                    )

                }


                </ul>
                <button onClick={uppercase}>uppercase</button>
            </div>
        </>
    )
}

export default Todo;