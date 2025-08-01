import "./productTab.css";
import Product from "./product";
import Button from "./button";

function ProductTab() {

    return (
        <>
        <div className="main-box"> <h2>Block buster deal</h2>
         <div className="product-tab">
            <Product title = "Logitech Mx Master" idx={[0]}/>
            <Product  title ="Apple Pencil (2nd Gen)" idx={1}/>
            <Product title = "Zebronics Zeb-transformer"idx={2} />
            <Product title = "boat Rocker 450" idx={3}/>
        </div>
        <Button/>
        </div>
        </>
        
       
       
    );
}

export default ProductTab;