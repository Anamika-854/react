import './price.css';

export default function Price({oldprice, newprice}){
     return(
        <>
         <div className="pricecard">
            <div className="last">
                <span className="price">{oldprice}</span>&nbsp;&nbsp;&nbsp;
            <span>{newprice}</span> 
            </div>
                    
        </div>
        </>
       
     )
}