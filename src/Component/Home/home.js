import React from 'react';
import './home.css';
import Filter  from '../Filter/filter.js';
import Main from '../Main/main.js'
import {ProductContext} from '../../Context_API/ProductContext.js'

function Home(){

    return (
        <div className="home-grid-container">
            <div className="header">
                <p>Shopping Website</p>
            </div>
            {/* <ProductContext.consumer> */}
                <div className="filter"> 
                    <Filter></Filter>           
                </div>
                <div className="main">
                    <Main></Main>
                </div>
            {/* </ProductContext.consumer> */}
            <div className="footer">
                <p>Pagination</p>
            </div>          
        </div>     
    )
}
        

export default Home;