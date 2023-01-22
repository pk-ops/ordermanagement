
import React, { useState } from 'react';

function Category() {

    const [categoryInput,setCategory]=useState({
        id:'',
        slug:'',
        name:'',
        descript:'',
        status:'',
        meta_title:'',
        meta_keyword:'',
        meta_description:'',
});
const handleInput=(e)=>{

    
    setCategory({...categoryInput,[e.target.name]:e.target.value})
}

const submitCategory=(e)=>{
    e.preventDefault();

    const data={
        id:categoryInput.id,
        slug:categoryInput.slug,
        name:categoryInput.name,
        descript:categoryInput.descript,
        status:categoryInput.status,
        meta_title:categoryInput.meta_title,
        meta_keyword:categoryInput.meta_keyword,
        meta_description:categoryInput.meta_description,
        
    }
    console.log(data)
    fetch("http://localhost:5000/admin/category", {
        method: "POST",
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
            if(data.status=='ok'){
                alert("Category Added")
            }
            else{
                alert('Error')
            }
           
        })
}
    
    return (
        <div className='container-fluid px-4'>
            <h1 className='mt-4'>Add Category</h1>
            <form onSubmit={submitCategory}>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link " id="seo-tags-tab" data-bs-toggle="tab" data-bs-target="#seo-tags" type="button" role="tab" aria-controls="seo-tags" aria-selected="false">SEO Tags</button>
                    </li>

                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane card-body border fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" >
                    <div className='form-group mb-3'>
                            <label>ID</label>
                            <input type='text' name='id' onChange={handleInput} value={categoryInput.id} className='form-control w-25 ' />

                        </div>
                        <div className='form-group mb-3'>
                            <label>Slug</label>
                            <input type='text' name='slug' onChange={handleInput} value={categoryInput.slug} className='form-control' />

                        </div>
                        <div className='form-group mb-3'>
                            <label>Name</label>
                            <input type='text' name='name' onChange={handleInput} value={categoryInput.name}  className='form-control' />

                        </div>
                        <div className='form-group mb-3'>
                            <label>Description</label>
                            <textarea type='text' name='descript' onChange={handleInput} value={categoryInput.descript}  className='form-control'></textarea>

                        </div>
                        <div className='form-group mb-3'>
                            <label>Status</label>
                            <input type='checkbox' name='status' onChange={handleInput} value={categoryInput.status}  /> Status 0=shown/1=hidden

                        </div>
                    </div>

                    <div className="tab-pane card-body border fade" id="seo-tags" role="tabpanel" aria-labelledby="seo-tags-tab" >
                        <div className='form-group mb-3'>
                            <label>Meta Title</label>
                            <input type='text' name='meta_title' onChange={handleInput} value={categoryInput.meta_title} className='form-control' />

                        </div>
                        <div className='form-group mb-3'>
                            <label>Meta Keyword</label>
                            <textarea type='text' name='meta_keyword' onChange={handleInput} value={categoryInput.meta_keyword} className='form-control'></textarea>

                        </div>
                        <div className='form-group mb-3'>
                            <label>Meta Description</label>
                            <textarea type='text' name='meta_description' onChange={handleInput} value={categoryInput.meta_description} className='form-control'></textarea>

                        </div>
                    </div>

                </div>
                <button type='submit' className='btn btn-primary px-4 float-end my-2'>Submit</button>
            </form>
        </div>
    );
}

export default Category;