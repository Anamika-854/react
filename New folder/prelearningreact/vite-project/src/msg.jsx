import "./msg.css";

function Msg({ username, textcolor }){
    // let styles = { color: textcolor};

    return <h1 style = {{ color: textcolor }}>This is a message for you "hello !" , {username}</h1>
   
}
export default Msg;