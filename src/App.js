import React from 'react';
import {BrowserRouter as Router, Navigate, Route , Routes} from "react-router-dom";
import Login from './components/Frontend/auth/Login';
import Register from './components/Frontend/auth/Register';
import Home from './components/Frontend/Home';
// import Dashboard from './components/admin/Dashboard';
// import Profile from './components/admin/Profile';

import 'bootstrap5/src/css/bootstrap.min.css'
import 'bootstrap5/src/js/bootstrap.bundle.min.js'


import MasterLayout from './Layout/admin/MasterLayout';
import Admin from './components/Frontend/auth/Admin';
import ViewCategoryColl from './components/Frontend/Collection/ViewCategoryColl';
import ViewProductColl from './components/Frontend/Collection/ViewProductColl';

function App() {
  return (
  
        <div className="App">
      
      <Router>
        <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/viewCcoll' element={<ViewCategoryColl/>}/> 
             <Route path='/viewCcoll/:slug' element={<ViewProductColl/>}/> 
             <Route path='/login' element={<Login/>}/> 
             <Route path='/Adminnn' element={<Admin/>}/> 
             <Route path='/register' element={<Register/>}/> 
            <Route path='/admin' element={<MasterLayout flow=""/>}/>
            <Route path='/Dashboard' element={<Navigate replace to="/admin"/>}/>
            <Route path='/Profile' element={<MasterLayout flow="Profile"/>}/>
            <Route path='/category' element={<MasterLayout flow="category"/>}/>
            <Route path='/view-category' element={<MasterLayout flow="view-category"/>}/>
            <Route path='/add-product' element={<MasterLayout flow="add-product"/>}/>
            <Route path='/view-product' element={<MasterLayout flow="view-product"/>}/>
            <Route path='/editpro/:id' element={<MasterLayout flow="editpro"/>}/>
           
          
       </Routes>

      </Router>
        </div>

  

  );
}

export default App;
