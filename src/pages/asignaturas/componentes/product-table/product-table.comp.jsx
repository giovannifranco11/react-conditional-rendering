import  React from 'react';
import ProductCategoryRow from '../product-category-row/product-category-row.comp';
import ProductRow from '../product-row/product-row.comp';




import './product-table.style.css';
import mujer from './imagenes/mujer.png';
import hombre from './imagenes/hombre.png';



const ProductTable = () => {
    return (
        <div className="product-table-container">
           <ProductCategoryRow categoryName="Programación IV"/>
           <div className="titulos">
               Nombre  Nota  Género  Foto
            </div>
           
                <ProductRow product={{
                    name:"Giovanni Franco",
                    nota:1.5,
                    genero:"Masculino",
                    img:<img src={hombre} />,        
                }
                }/>               

                <ProductRow product={{
                    name:"Natalia Martínez",
                    nota:4.9,
                    genero:"Femenino",
                    img:<img src={mujer} />,
                }}/>

                <ProductRow product={{
                    name:"Felipe Vargas Gil",
                    nota:2.6,
                    genero:"Masculino",
                    img:<img src={hombre} />,
                }}/>
                <ProductRow product={{
                    name:"Sebastian Ruiz T.",
                    nota:1.5,
                    genero:"Masculino",
                    img:<img src={hombre} />,        
                }
                }/>               

                <ProductRow product={{
                    name:"Sandra Rodríguez",
                    nota:4.9,
                    genero:"Femenino",
                    img:<img src={mujer} />,
                }}/>

                <ProductRow product={{
                    name:"Jeronimo Villada.",
                    nota:2.6,
                    genero:"Masculino",
                    img:<img src={hombre} />,
                }}/>

                <ProductRow product={{
                    name:"Esperanza Bernal",
                    nota:4.9,
                    genero:"Femenino",
                    img:<img src={mujer} />,
                }}/>
                              

           <ProductCategoryRow categoryName="Programación II"/>
           <div className="titulos">
               Nombre  Nota  Género  Foto
            </div>
            <ProductRow product={{
                    name:"Juan Frenandez",
                    nota:2.8,
                    genero:"Masculino",
                    img:<img src={hombre} />,        
                }
                }/>               

                <ProductRow product={{
                    name:"Camila Benedet",
                    nota:4.9,
                    genero:"Femenino",
                    img:<img src={mujer} />,
                }}/>

                <ProductRow product={{
                    name:"Fernand Ochoa",
                    nota:2.6,
                    genero:"Masculino",
                    img:<img src={hombre} />,
                }}/>
                <ProductRow product={{
                    name:"Andres Figuera",
                    nota:1.5,
                    genero:"Masculino",
                    img:<img src={hombre} />,        
                }
                }/>               

                <ProductRow product={{
                    name:"Mariana Vargas",
                    nota:4.9,
                    genero:"Femenino",
                    img:<img src={mujer} />,
                }}/>

                <ProductRow product={{
                    name:"Johan Cardona",
                    nota:2.6,
                    genero:"Masculino",
                    img:<img src={hombre} />,
                }}/>

                <ProductRow product={{
                    name:"Manuela Charis",
                    nota:4.9,
                    genero:"Femenino",
                    img:<img src={mujer} />,
                }}/>

           <ProductCategoryRow categoryName="Algoritmos"/>  
           <div className="titulos">
               Nombre  Nota  Género  Foto
            </div>
            <ProductRow product={{
                    name:"Carlos Quintero",
                    nota:4.5,
                    genero:"Masculino",
                    img:<img src={hombre} />,        
                }
                }/>               

                <ProductRow product={{
                    name:"Vannesa Rivera.",
                    nota:4.9,
                    genero:"Femenino",
                    img:<img src={mujer} />,
                }}/>

                <ProductRow product={{
                    name:"Bernardo Perez",
                    nota:2.6,
                    genero:"Masculino",
                    img:<img src={hombre} />,
                }}/>
                <ProductRow product={{
                    name:"Santiago Marti",
                    nota:1.5,
                    genero:"Masculino",
                    img:<img src={hombre} />,        
                }
                }/>               

                <ProductRow product={{
                    name:"Mila Rodríguez",
                    nota:4.9,
                    genero:"Femenino",
                    img:<img src={mujer} />,
                }}/>

                <ProductRow product={{
                    name:"Jose Jairo Zaya",
                    nota:2.6,
                    genero:"Masculino",
                    img:<img src={hombre} />,
                }}/>

                <ProductRow product={{
                    name:"Stefania Bernal",
                    nota:1.9,
                    genero:"Femenino",
                    img:<img src={mujer} />,
                }}/>
                
        </div>
    );    
}

export default ProductTable;