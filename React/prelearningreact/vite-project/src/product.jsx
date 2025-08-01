import "./product.css";

function Product({ title ,description ,price=0, features, features2 }) {
let isdiscount = price > 3000;
let styles = { backgroundColor: isdiscount ? "pink" : ""};


    return (
        <div className="product" style={styles}>
            <h3>{title} </h3>
            <h3>product Description{description}</h3>
            <h3>Price: {price}</h3>
            <h3> feature array :{features}</h3>
            {isdiscount && <p>Discounted Price</p>}
        <button>Add to Cart</button>
        </div>
    );
    }

    export default Product;