import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../../global';


function ViewCategoryColl() {
    
    const [loading,setLoading]=useState(true);
    const [cat,setCat] = useState([]);
    
    const getCategory=()=>{
        fetch(`${API}/admin/getCategory`)
        .then((res)=>res.json())
        .then((data)=>{
             if(data.status==200){
        
             }
          setLoading(false)
          
          setCat(data)
        //  
        });
        
    };useEffect(()=>getCategory(),);

   var showCategoryList ="";
    if(loading){
        return <h4>Loading Categories...</h4>
    }else{
         
         showCategoryList = cat.map((item,idx) => {
            return (
                <div className='col-md-4' key={idx}>
                <div className='card'>
                    <div className='card-body'>
                    <Link to={`/viewCcoll/${item.slug}`}>
                         {item.name} 
                    </Link>
                             <h5></h5>
                        
                      </div>
                </div>
            </div>
            )
        })
    }

    return (
        <div>
            <div className='py-3 bg-warning'>
                <div className='container'>
                    <h6>Category Page</h6>
                </div>
            </div>

            <div className='py-3 '>
                <div className='container'>
                    <div className='row'>
                       
                        {showCategoryList}
                    </div>
                </div>
            </div>


  
        </div>
    );
}

export default ViewCategoryColl;