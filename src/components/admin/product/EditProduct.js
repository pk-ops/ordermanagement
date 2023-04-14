import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { API } from '../../../global';

function EditProduct(props) {

    const navigate=useNavigate();

    const [categoryList,setCategoryList]=useState([]);
    
    const [productInput,setProductInput]=useState([]);


    const handleInput=(e)=>{
        setProductInput({...productInput,[e.target.name]:e.target.value})
    }



    const getProduct=()=>{
        fetch(`${API}/admin/viewcategory`)
        .then((res)=>res.json())
        .then((data)=>{
                setCategoryList(data);
        });
        
    };useEffect(()=>getProduct(),)


    const {id}=useParams();
   
    // console.log(id)

    const getDetails=()=>{
        fetch(`${API}/admin/editpro/${id}`,{
          method:"GET"
        })
        .then((res)=>res.json())
        .then((data)=>{
             setProductInput(data);
        })
      };
      useEffect(()=>getDetails(),[]);



    const  updateProduct=(e)=>{
        e.preventDefault();
        // const {id}=useParams();
        const data={
            img:productInput.img,
            category_name:productInput.category_name,
            slug:productInput.slug,
            name:productInput.name,
            descript:productInput.descript,

            meta_title:productInput.meta_title,
            meta_keyword:productInput.meta_keyword,
            meta_description:productInput.meta_description,

            price:productInput.price,
            original_price:productInput.original_price,
            qty:productInput.qty,
            brand:productInput.brand,
            featured:productInput.featured,
            popular:productInput.popular,
            status:productInput.status,

        }
        // console.log(data);
        fetch(`${API}/admin/updateProduct/${id}`, {
            method: "PUT",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(data),
        }).then((res) => res.json())
            .then((data) => {
                console.log(data)
                if(data.status==='ok'){
                    alert("Product Updated")
                    navigate('/view-product')
                    
                }
                else{
                    alert('Error')
                }
               
            })

    }


    return (
        <div className='container-fluid px-4'>
            <div className='card mt-4'>
                <div className='card-header'>
                    <h4>Edit Product
                        <Link to="/view-product" className="btn btn-primary btn-sm float-end">View Product</Link>
                    </h4>
                </div>
                <div className='card-body'>
                    <form onSubmit={updateProduct} encType='multipart/form-data'>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="seotags-tab" data-bs-toggle="tab" data-bs-target="#seotags" type="button" role="tab" aria-controls="seotags" aria-selected="false">SEO Tags</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="otherdetails-tab" data-bs-toggle="tab" data-bs-target="#otherdetails" type="button" role="tab" aria-controls="otherdetails" aria-selected="false">OtherDetails</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                          <div className="tab-pane card-body border fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" >
                        <div className='form-group mb-3'>
                            <label>Select Category</label>
                            <select name='category_name' onChange={handleInput} value={productInput.category_name} className='form-group'>
                                <option>Select Category</option>
                                {
                                    categoryList.map((item)=>{
                                        return(
                                            <option value={item.id} key={item.id}>{item.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className='form-group mb-3'>
                            <label>Slug</label>
                            <input type='text' name='slug' onChange={handleInput} value={productInput.slug} className='form-control' />

                        </div>
                        <div className='form-group mb-3'>
                            <label>Name</label>
                            <input type='text' name='name' onChange={handleInput} value={productInput.name}  className='form-control' />

                        </div>
                        <div className='form-group mb-3'>
                            <label>Description</label>
                            <textarea type='text' name='descript' onChange={handleInput} value={productInput.descript}  className='form-control'></textarea>

                        </div>
                               


                          </div>

                          <div className="tab-pane card-body border fade" id="seotags" role="tabpanel" aria-labelledby="seotags-tab">
                            
                        <div className='form-group mb-3'>
                            <label>Meta Title</label>
                            <input type='text' name='meta_title' onChange={handleInput} value={productInput.meta_title} className='form-control' />

                        </div>
                        <div className='form-group mb-3'>
                            <label>Meta Keyword</label>
                            <textarea type='text' name='meta_keyword' onChange={handleInput} value={productInput.meta_keyword} className='form-control'></textarea>

                        </div>
                        <div className='form-group mb-3'>
                            <label>Meta Description</label>
                            <textarea type='text' name='meta_description' onChange={handleInput} value={productInput.meta_description}  className='form-control'></textarea>

                        </div>

                          </div>
                       
                          <div className="tab-pane card-body border fade" id="otherdetails" role="tabpanel" aria-labelledby="otherdetails-tab">
                            <div className='row'>
                                <div className='col-md-4 form-group mb-3'>
                                    <label>Selling price</label>
                                    <input type="text" name="price" onChange={handleInput} value={productInput.price} className="form-control"/>
                                </div>
                                <div className='col-md-4 form-group mb-3'>
                                    <label>Original price</label>
                                    <input type="text" name="original_price" onChange={handleInput} value={productInput.original_price} className="form-control"/>
                                </div>  

                                <div className='col-md-4 form-group mb-3'>
                                    <label>Quantity</label>
                                    <input type="text" name="qty" onChange={handleInput} value={productInput.qty} className="form-control"/>

                                </div>   <div className='col-md-4 form-group mb-3'>
                                    <label>Brand</label>
                                    <input type="text" name="brand" onChange={handleInput} value={productInput.brand} className="form-control"/>

                                </div>   <div className='col-md-4 form-group mb-3'>
                                    <label>Image</label>
                                    <input type="url" name="img" onChange={handleInput} value={productInput.img} className="form-control"/>
                                </div>
                                <div className='col-md-4 form-group mb-3'>
                                    <label>Featured (checkbox=shown)</label>
                                    <input type="checkbox" name="featured" onChange={handleInput} value={productInput.featured}  className="w-50 h-50"/>
                                </div>
                                <div className='col-md-4 form-group mb-3'>
                                    <label>Popular (checkbox=shown)</label>
                                    <input type="checkbox" name="popular" onChange={handleInput} value={productInput.popular} className="w-50 h-50"/>
                                </div>
                                <div className='col-md-4 form-group mb-3'>
                                    <label>Status (checked=Hidden)</label>
                                    <input type="checkbox" name="status" onChange={handleInput} value={productInput.status} className="w-50 h-50"/>
                                </div>

                            </div>
                          </div>

                         </div>
                         <button className='btn btn-primary px-4 mt-2' type='submit' >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditProduct;