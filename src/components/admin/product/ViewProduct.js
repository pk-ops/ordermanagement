import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ViewProduct() {

    const [loading,setLoading]=useState(true);
    const [ViewProduct,setProduct]=useState([]);

    const getProduct=()=>{
        fetch(`http://localhost:5000/admin/viewproduct`)
        .then((res)=>res.json())
        .then((data)=>{
            // if(data.status==200){
                setProduct(data); 
                
            // }
                   
        });
        setLoading(false)
    };useEffect(()=>getProduct(),)

    var display_Productdata="";

    if(loading){
        return <h4>View Product Loading...</h4>
    }else{
        display_Productdata= ViewProduct.map((item)=>{
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.brand}</td>
                        <td>{item.selling_price}</td>
                        <td><img src={item.image} width="50px" height="50px" alt={item.name} /></td>
                        <td>
                            <Link to={`/editpro/${item.id}`} className='btn btn-success btn-sm'>Edit</Link>
                            </td>
                        <td><Link to='delete-product' className='btn btn-danger btn-sm'>Delete</Link></td>
                    </tr>
                )
        })
    }

    return (
        <div className="card px-4 mt-3">
            <div className='card-header'>
                <h4>View Product
                    <Link to='/add-product' className='btn btn-success btn-sm float-end'>Add Product</Link>
                </h4>
            </div>
            <div className="card-body">
                <div className='table-responsive'>
                    <table className='table table-bordered table-striped'>
                        <thead> 
                            <tr>
                                <th>ID</th>
                                <th>Category_Name</th>
                                <th>Product Name</th>
                                <th>Selling price</th>
                                <th>Image</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                                {display_Productdata}
                        </tbody>
                     </table>
                </div>
            </div>
        </div>
    );
}

export default ViewProduct;