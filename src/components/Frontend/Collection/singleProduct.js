import { Button, Card, CardActions, CardContent } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './singleProduct.css'
import { API } from '../../../global';

function SingleProd() {
    const {addItem} = useCart();
    // console.log(addItem)
    const navigate = useNavigate();
    const [product , setProduct] = useState({})
    const { id } = useParams();
    const[isLoggedIn,SetIsLoggedIn]=useState(localStorage.getItem("token"))
    const {totalItems}=useCart();

    const getProduct = () => {
        fetch(`${API}/admin/cart/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
    }; useEffect(() => getProduct(), [])
    return (
        <div className='singleProduct'>
            <Card className='card d-flex' style={{ height: "550px" }}>
                <div className='cart-icon' >
                   <Button onClick={()=>navigate(-1)}><ArrowBackIcon/></Button> 
                </div>
                <CardContent >
                    <div className='d-flex mt-4'>
                        <div className='card-body image col-6 d-flex'>  
                           <img src={product.img} alt={product.name} className="product-poster" style={{margin:"auto"}}/>
                        </div>
                        <div className='col-6'>
                            <div className='card-body mt-4'>
                                <p className="product-name text-center">{product.brand} </p>
                                {/* <p className="product-price">{product.price} </p> */}
                            </div>
                            {/* <div className='card-body'>
                                <p className="product-price">{product.price}</p>
                            </div> */}
                          <div className='cart-button d-flex' >
                                <Button onClick={()=>addItem(product)}>Add to cart</Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
                <CardActions>


                </CardActions>
            </Card>
        </div>
    );
}

export default SingleProd;