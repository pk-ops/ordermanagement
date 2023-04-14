import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Cart from './cart';
import { API } from '../../../global';


function ViewProductColl() {
    const[pp,setPp]=useState([]);

    const {slug}=useParams();
    // console.log(slug)
    
    const getData=()=>{
        fetch(`${API}/admin/getProd/${slug}`)
        .then((res)=>res.json())
        .then((data)=>setPp(data.prod))
    };useEffect(()=>getData(),[])


    return (
        <div>
        
            <div className='py-3 bg-warning'>
                <div className='container'>
                    <h6>Collections /{slug}</h6>
                </div>
            </div>

            <div className='py-3 '>
                <div className='container'>
                <div className='row' >
                    {
                        pp.map((pr,index)=>(
              
                        <div className='card w-25 m-4'>
                            <div className='card-body' key={index}>
                            <div className='card-body data '>
                                <img src={pr.img} style={{objectFit:"cover",height:"250px",marginLeft:"15px"}}/>

                                    <p style={{textAlign:"center",marginTop:"10px"}}>{pr.brand}</p>
                                    
                                </div>

                            </div>
                           
                           
                        </div>
                       
                     ))}
                     </div>
                </div>
            </div>
        </div>
    );
}

export default ViewProductColl;