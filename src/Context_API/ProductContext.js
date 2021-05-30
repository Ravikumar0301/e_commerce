import React from 'react';
import  {product_details}  from '../Database/ProductDetails.js'


export const ProductContext = React.createContext();

// class stateContext extends React.Component {
//     render(){
//         return(
//             <ProductContext.provider value = {product_details}>
//                 {this.props.children}
//             </ProductContext.provider>
            
//         )
//     }
// }

// export default stateContext;