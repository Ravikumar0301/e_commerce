import React from 'react';
import {Link} from 'react-router-dom';
import './home.css'

function Home(){
    return (
        <div className="home-grid-container">
            <div className="header">
                <p>Shopping Cart</p>
            </div>
            <div className="filter"> 
                <div className="filter-container"> 
                    <div className="filter-header">
                        <p>Filters</p>
                    </div>
                    <div className="filter-categories">
                        <p>Categories</p>
                    </div>
                </div>                
            </div>
            <div className="content">
                <p>Content............................................................
                Content............................................................
                Content............................................................
                Content............................................................
                Content............................................................
                Content............................................................
                Content............................................................
                </p>
            </div>            
        </div>     
    )
}
        

export default Home;