import  React from 'react';
import ProductCategoryRow from '../product-category-row/product-category-row.comp';
import ProductRow from '../product-row/product-row.comp';




import './product-table.style.css';
import mujer from './imagenes/mujer.png';
import hombre from './imagenes/hombre.png';



const ProductTable = () => {
    return (
        <div className="product-table-container">
           <ProductCategoryRow categoryName="Programación I"/>
           <div className="titulos">
               Nombre  Nota  Género  Foto
            </div>
           
                <ProductRow product={{
                    name:"Giovanni Franco",
                    nota:4.5,
                    genero:"Masculino",
                    img:<img src={hombre} />,        
                }
                }/>
                
                

                <ProductRow product={{
                    name:"Nataly Martínez",
                    nota:5.0,
                    genero:"Femenino",
                    img:<img src={mujer} />,
                }}/>

                <ProductRow product={{
                    name:"Pepito Perez Gil",
                    nota:2.6,
                    genero:"Masculino",
                    img:<img src={hombre} />,
                }}/>
                              

           <ProductCategoryRow categoryName="Programación II"/>
           <div className="titulos">
               Nombre  Nota  Género  Foto
            </div>
                <ProductRow product={{
                    name:"Giovanni Franco",
                    nota:4.8,
                    genero:"Masculino",
                    img:<img src={hombre} />,              
                }
                }/>

                <ProductRow product={{
                    name:"Nataly Martínez",
                    nota:3.5,
                    genero:"Femenino",
                    img:<img src={mujer} />,
                }}/>

                <ProductRow product={{
                    name:"Pepito Perez Gil",
                    nota:2.7,
                    genero:"Masculino",
                    img:<img src={hombre} />,
                }}/>

           <ProductCategoryRow categoryName="Algortimos"/>  
           <div className="titulos">
               Nombre  Nota  Género  Foto
            </div>
                <ProductRow product={{
                    name:"Giovanni Franco",
                    nota:2.9,
                    genero:"Masculino",
                    img:<img src={hombre} />,
                                
                }
                }/>
                

                <ProductRow product={{
                    name:"Nataly Martínez",
                    nota:3.9,
                    genero:"Femenino",
                    img:<img src={mujer} />,
                }}/>

                <ProductRow product={{
                    name:"Pepito Perez Gil",
                    nota:2.5,
                    genero:"Masculino",
                    img:<img src={hombre} />,
                }}/>
                
        </div>
    );    
}

export default ProductTable;