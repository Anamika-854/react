import "./product.css";
import Price from"./price.jsx";
import Button from "./button.jsx";

function Product({title, idx}) {
let oldprice = ["12,456", "11,655", "1,545", "898"];
let newprice = ["8,999", "4,545" , "456", "555"];
let description = [["8,000 DPI", "Logitech Flow", "Multi-device connectivity"],
      ["Apple Pencil (2nd Gen)", "Magnetic attachment", "Wireless charging"],
        ["Zebronics Zeb-transformer", "Stylish design", "Bluetooth 5.0"],
        ["boat Rocker 450", "40mm drivers", "Up to 15 hours battery life"]];
    
      

    return (
        <>
         <div className="product" >            
            <p><b>{title}</b></p>
            <li>{description[idx][0]}</li>
            <li>{description[idx][1]}</li>
            <li>{description[idx][2]}</li>
            
            <Price oldprice= {oldprice[idx]} newprice={newprice[idx]} />
            <Button/>   
        </div>
        </>
       
    );
    }

    export default Product;