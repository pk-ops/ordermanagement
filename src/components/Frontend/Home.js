import { Button,Badge, ButtonGroup } from '@mui/material';

import React, { useEffect } from 'react';
import Navbar from '../../Layout/frontend/Navbar';

import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ProductsList from './productsList';
import "./productList.css"
import { useCart } from 'react-use-cart';
import { API } from '../../global';

const Home=()=> {

    // const [itemCount, setItemCount] = useState(1);
    // const [show, setShow] = useState(true);
    const { addItem } = useCart();
    const [prod,setProd]=useState([])
const getData=()=>{
    fetch(`${API}/admin/allProduct`)
    .then((res)=>res.json())
    .then((data)=>setProd(data))
};useEffect(()=>getData(),[])
   


    return (
       <div>
          <div className='product-list' >
         
                    {
                        prod.map((pr,index)=>(
                        // <div key={pr.id}>

                            <ProductsList key={pr._id}  product={pr}
                              addButton = {<Button onClick={() => addItem(pr)}>Add to cart</Button> }
                            />
                        ))}
                    </div>

                </div>

       
    );
}

export default Home;