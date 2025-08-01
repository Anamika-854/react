import { useState } from "react";

export default function like() {
 let [like, setlike] = useState(false);
console.log("rerender");

function likein() {
    setlike(!like);
 console.log(!like);
}

let Styles= {color : "red"};
 return(
    <div>
        <h1 onClick={likein}>Like:
             {like ? <i className="fa-solid fa-heart" style={Styles} ></i> : <i className="fa-regular fa-heart"></i>  }</h1>
        </div>
 )}
