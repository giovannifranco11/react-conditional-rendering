import  React from 'react';
import ProductCategoryRow from '../product-category-row/product-category-row.comp';
import ProductRow from '../product-row/product-row.comp';


import './product-table.style.css';

const ProductTable = () => {
    return (
        <div className="product-table-container">
           <ProductCategoryRow categoryName="Nombre de Estudiante"/>
                <ProductRow product={{
                    name:"Giovanni Franco",
                    nota:4,               
                }}/>

                <ProductRow product={{
                    name:"Nataly Martínez",
                    nota:5,
                }}/>

                <ProductRow product={{
                    name:"Pepito Perez",
                    nota:2,
                }}/>
                

           <ProductCategoryRow categoryName="Curso"/>
                <ProductRow product={{
                    name:"Programación I",
                    creditos:4,               
                }}/>

                <ProductRow product={{
                    name:"Programación II",
                    creditos:4,               
                }}/>

                    <ProductRow product={{
                    name:"Algoritmos",
                    creditos:2,               
                }}/>

           <ProductCategoryRow categoryName="Nota"/>  

                <ProductRow product={{
                    name:"1",              
                }}/>    
                <ProductRow product={{
                    name:"2",              
                }}/> 
                <ProductRow product={{
                    name:"3",              
                }}/> 
                <ProductRow product={{
                    name:"4",              
                }}/> 
                <ProductRow product={{
                    name:"5",              
                }}/>  
        </div>
    );    
}

export default ProductTable;