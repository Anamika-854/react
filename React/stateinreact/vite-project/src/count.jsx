 import { useState } from "react";
 
 export default function Count(){
    let [count, setcount] = useState(0);

function countin() {
 ;
 setcount(count + 1);
  // setcount(count + 1);
 console.log(count);
}  
    return (    
        <div>
            <h1>Count: {count}</h1>
            <button onClick = {countin}>Decrement</button> 

        </div>  
          );
     

}
