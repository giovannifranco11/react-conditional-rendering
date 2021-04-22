import React from 'react';
import ProductTable from '../product-table/product-table.comp';
import SearchBar from '../search-bar/search-bar.comp';

import './estudiantes.style.css'

const Students = () => {
    return (
        <div className="estudiantes-container">
            <SearchBar/>
            <ProductTable/>
        </div>
    );    
}

export default Students;