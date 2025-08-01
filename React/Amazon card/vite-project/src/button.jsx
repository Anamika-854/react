import './productTab.css';

function hi() {
    console.log("Button clicked!");
}
function handleClick(event) {
  console.log(event);         // SyntheticEvent object
  console.log(event.type);    // e.g., "click"
  console.log(event.target);  // the actual DOM element clicked
}

function InputBox() {
  const handleChange = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Typed:", e.type);
  };

  return <input onChange={handleChange} />;
}

export default function Button() {
     return(
        <>
        <div className = "button-box"> 
            <button onClick={hi} >Click me!</button>
            <button onMouseOver={InputBox} >Click me!</button>
        </div>
        {/* <div className = "button-box">
            <button onMouseEnter={hi} >Click me!</button>
        </div>
        <div className = "button-box">
            <button onMouseEnter={handleClick} >Click me!</button>
        </div> */}
        
         </>
     );
}