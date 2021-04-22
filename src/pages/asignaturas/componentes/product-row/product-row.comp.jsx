import  React from 'react';

import './product-row.style.css';

const ProductRow = (props) => {
    return (
        <div className="product-row-container">

            {
                props.product.nota < 3
                ?//if true
                    <span className="product-grade-bad">{props.product.name}</span>
                ://else
                    <span>{props.product.name}</span>
            }
                       
                      
        </div>
    );
    
}

export default ProductRow;