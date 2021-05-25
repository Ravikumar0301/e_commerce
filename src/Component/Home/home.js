import React from 'react';
import './home.css';
import { product_details } from '../../Database/ProductDetails';
import { Card } from 'react-bootstrap';

function Home(){

    const product = product_details.map((prdct)=>{
        return(
            <Card>
                <Card.Title>{prdct.name}</Card.Title>
                {/* <Card.Img>{prdct.img}</Card.Img> */}
                <Card.Text>Price : {prdct.Price}</Card.Text>
            </Card>
        )
    });

    return (
        <div className="home-grid-container">
            <div className="header">
                <p>Shopping Cart</p>
            </div>
            <div className="filter"> 
                    <div className="filter-header">
                        <p>Filters</p>
                    </div>
                    <div className="filter-categories">
                        <p>Categories</p>
                    </div>            
            </div>
            <div className="main">
                {product}
            </div>  
            <div className="footer">
                <p>Pagination</p>
            </div>          
        </div>     
    )
}
        

export default Home;