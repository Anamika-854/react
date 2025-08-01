import Product from "./product";

function ProductTab() {
    let features = ["feature1", "feature2", "feature3"];
    let features2 = { a:"feature4", b:"feature5", c:"feature6"};
    return (
        <div className="product-tab">
            <Product title = "phone" description="hello" price={6000} features={features}/>
            <Product title = "pen" description="hi" features2={features2.a}/>
            <Product title = "laptop" description= "hhoo"/>
        </div>
    );
}

export default ProductTab;