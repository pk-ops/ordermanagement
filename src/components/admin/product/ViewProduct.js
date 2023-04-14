import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { API } from '../../../global';

function ViewProduct() {

    const [loading,setLoading]=useState(true);
    const [ViewProduct,setProduct]=useState([]);


    const deleteProduct=(id)=>{
        fetch(`${API}/admin/${id}`,{
                method:'DELETE'
              }).then(()=>getProduct())
        };

    const getProduct=()=>{
        fetch(`${API}/admin/viewproduct`)
        .then((res)=>res.json())
        .then((data)=>{
                setLoading(false)
                setProduct(data); 
                // console.log(data)
        });
       
    };
    
    useEffect(()=>getProduct(),)

    var display_Productdata="";

    if(loading){
        return <h4>View Product Loading...</h4>
    }else{
        display_Productdata= ViewProduct.map((item,index)=>{
                return(
                    <tr key={index+1}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.brand}</td>
                        <td>{item.price}</td>
                        <td><img src={item.img} width="50px" height="50px" alt={item.name} /></td>
                        <td>
                            <Link className='btn btn-outline-primary p-2 mx-2' to={`/editpro/${item._id}`}><EditIcon/></Link>
                        </td>
                        <td>
                        <Link className="btn btn-danger p-2" onClick={()=>deleteProduct(item._id)}><DeleteIcon/></Link>
                        </td>
                        
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