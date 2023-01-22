import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../../Layout/frontend/Navbar';

function ViewProductColl() {
    const [loading,setLoading]=useState(true);
    const [product,setProduct]=useState();
    const [cat,setCat] = useState([]);

    const {slug}=useParams();

const getProduct=()=>{
      fetch(`http://localhost:5000/admin/getProd/${slug}`)
      .then((res)=>res.json())
      .then((data)=>{
        if(data.status==200){
          
          
            
            // setLoading(false); 
         }
       
         setCat(data)
         setProduct(data)
         console.log(data);
         console.log(data)
        setLoading(false); 
          
     }).catch((err) => {
        console.log(err);
      });
      
    
};useEffect(()=>getProduct(),)
   

if(loading)
     {
        return <h4>Loading products..</h4>
    }
     else 
    {
        
        var showProductList = "";
        showProductList = product.map((item, idx)=>{
            return (
                <div className='col-md-3' key={idx}>
                    <div className='card'>
                        <div className='card-body'>
                            <Link>
                                <h5>{item.name}</h5>
                            </Link>
                            <Link>
                                    <h5>{item.slug}</h5>
                            </Link>
                        </div>
                    </div>

                </div>
            )
        })
        
    }

    return (
        <div>
            <Navbar />
            <div className='py-3 bg-warning'>
                <div className='container'>
                    <h6>Collections /</h6>
                </div>
            </div>

            <div className='py-3 '>
                <div className='container'>
                    <div className='row'>
                        {showProductList}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewProductColl;