import { Card, CardActions, CardContent } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import "./productList.css"
function ProductsList({product}) {
    // const sellp=product.price;
    // const orip=product.original_price
    // const navigate=useNavigate()
    


    return (
        <div >
             <Card className="product-container" style={{height:"min-content"}} >
     <Link to={`/cart/${product._id}`}><img src={product.img} alt={product.name}   className="product-poster"></img></Link> 
      <CardContent>
      <div className="product-specs">
        <p className="product-name">{product.brand} </p>
        
    </div>
    <div className='product-descript'>
        <p>{product.descript}</p>
    </div>
    <div className='product-rating'>
        <p>{product.rating}</p>
    </div>
        <div className='product-price'>
            <span className='price '> ₹   {product.price}</span> <s className='original_price'>₹{product.original_price}</s>
        </div>
      </CardContent>
      
     <CardActions>
        
     </CardActions>

   </Card>
        </div>
  
    
    );
}

export default ProductsList;

     