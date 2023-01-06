
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ViewCategory(props) {

    const [loading,setLoading]=useState(true);
    const [categoryList,setCategoryList]=useState([]);

    // useEffect(()=>{
    //     fetch("http://localhost:5000/admin/viewcategory", {//options => (optional)
    //         method: 'GET' 
    //     }).then((res) => res.json())
    //     .then((data) => {
    //         if(data.status==="ok"){
    //             setCategoryList(data)
    //         } 
            
    //     });
    //     setLoading(false);
        
    // },[]);
    const getCategory=()=>{
        fetch(`http://localhost:5000/admin/viewcategory`)
        .then((res)=>res.json())
        .then((data)=>{
                setCategoryList(data)
             
            
        });
        setLoading(false)
    };useEffect(()=>getCategory(),)

    var viewCategory_HTMLTABLE="";

    if(loading){
        return <h4>Loading Category</h4>
    }else{
        viewCategory_HTMLTABLE=
        categoryList.map((item)=>{
            return(
                <tr >
                    <td>{item.name}</td>
                    <td>{item.slug}</td>
                    <td>{item.status}</td>
                    <td>{item.descript}</td>
                    <td>
                        <Link to={`edit-category/${item.id}`} className='btn btn-success btn-sm'>Edit</Link>
                    </td>
                    <td>
                        <button type='button' className='btn btn-danger btn-sm'>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    return (
      <div className='container px-4'>
         <div className='card mt-4'>
            <div className='card-header'>
                <h4>
                    Category List
                    <Link to="/category" className='btn btn-primary btn-sm float-end'>Add Category</Link>
                </h4>
            </div>
            <div className='card-body'>
                <table className='table table-borderd table-striped'>
                    <thead>
                        <tr>
                          
                            <th>Name</th>
                            <th>Slug</th>
                            <th>Status</th>
                            <th>Description</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                            {viewCategory_HTMLTABLE}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    );
}

export default ViewCategory;