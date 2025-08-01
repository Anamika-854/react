import "./ludo.css"
import { useState } from "react";

export default function Ludoboard(){
    let[count, setcount] = useState({blue: 0, yellow: 0, green: 0, red: 0})

let incrementblue = () => {
{count.blue +=1;
console.log(count);
setcount({...count})
  }
};

let incrementyellow = () => {
{count.yellow +=1;
console.log(count);
setcount({...count})
  };
}
let incrementgreen = () => {
{count.green +=1;
console.log(count);
setcount({...count})
  };
}
let incrementred = () => {
{count.red +=1;
console.log(count);
setcount({...count})
  };
}

    return(
        <div className= "board">
          <p >Blue moves : {count.blue}</p>
          <button onClick={incrementblue} style={{backgroundColor: "blue"}}>+1</button>

          <p>Yellow moves : {count.yellow}</p>
          <button onClick={incrementyellow} style = {{backgroundColor: "yellow"}}>+1</button>

          <p>Green moves : {count.green}</p>
          <button onClick={incrementgreen} style = {{backgroundColor: "green"}}>+1</button>

          <p>Red moves : {count.red}</p>
          <button onClick={incrementred} style = {{backgroundColor: "red"}}>+1</button>
        </div>
    )
}
