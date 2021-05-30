import React from 'react';
import { Card } from 'react-bootstrap';
import  { product_details }  from '../../Database/ProductDetails.js';


function Main(){

    const product = product_details.map((prdct)=>{
        return(
            <div key={prdct.id}>
                <Card>
                    <Card.Title>{prdct.name}</Card.Title>
                    {/* <Card.Img>{prdct.img}</Card.Img> */}
                    <Card.Text>Price : {prdct.Price}</Card.Text>
                </Card>
            </div>
            
        )
    });

    return(
        <>
            {product}
        </>
    )
}

export default Main;