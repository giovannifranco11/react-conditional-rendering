import  React from 'react';

import './product-row.style.css';

const ProductRow = (props) => {
    return (
        <div className="product-row-container">

            {
                props.product.nota < 3
                ?//if true
                    <span >{props.product.name}  <span className="uno"><span id="red">{props.product.nota}</span> {props.product.genero} {props.product.img}</span></span>
                ://else
                    <span>{props.product.name} <span className="uno">{props.product.nota} {props.product.genero} {props.product.img}</span></span>
            }
                       
                      
        </div>
    );
    
}

export default ProductRow;