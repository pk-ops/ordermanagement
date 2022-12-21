import React from 'react';
import Navbar from './Navbar'

import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';

import Sidebar from './Sidebar';
import Footer from './Footer';
// import routes from '../../routes/routes';
// import { Route, Routes,Navigate } from 'react-router-dom';
import Dashboard from '../../components/admin/Dashboard';
import Profile from '../../components/admin/Profile';
import Category from '../../components/admin/category/Category';
import ViewCategory from '../../components/admin/category/ViewCategory';
import AddProduct from '../../components/admin/product/AddProduct';
import ViewProduct from '../../components/admin/product/ViewProduct';

const MasterLayout=({flow})=> {
    return (
        <div className='sb-nav-fixed'>
            <Navbar/>

            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                        <Sidebar/>
                </div> 
                <div id="layoutSidenav_content">
                    <main className='routes-container'>
                        <section className='routes-container'>
                            {
                                {
                                    "":<Dashboard/>,
                                    "Profile":<Profile/>,
                                    "category":<Category/>,
                                    "view-category":<ViewCategory/>,
                                    "add-product":<AddProduct/>,
                                    "view-product":<ViewProduct/>,
                                }[flow]
                            }
                        </section>
                        
                    </main>
                    <Footer/>
                </div>       
            </div>
        </div>
    );
}

export default MasterLayout;


