import React, { useState } from 'react';
import { Navigate, Route , Routes, useNavigate} from "react-router-dom";
import Login from './components/Frontend/auth/userLogin';
import Register from './components/Frontend/auth/Register';
import Home from './components/Frontend/Home';
// import Dashboard from './components/admin/Dashboard';
// import Profile from './components/admin/Profile';

import 'bootstrap5/src/css/bootstrap.min.css'
import 'bootstrap5/src/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

import MasterLayout from './Layout/admin/MasterLayout';
import Admin from './components/Frontend/auth/adminLogin';
import ViewCategoryColl from './components/Frontend/Collection/ViewCategoryColl';
import ViewProductColl from './components/Frontend/Collection/ViewProductColl';
import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
import CommonContext from './context/commonContext';

import SingleProd from './components/Frontend/Collection/singleProduct';
import { CartProvider, useCart } from 'react-use-cart';
import Cart from './components/Frontend/Collection/cart';
import { useThemeHook } from './GlobalComponent/ThemeProvider';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { AccountCircle } from '@mui/icons-material';

function App() {
const navigate=useNavigate()

const [isLoggedIn, SetIsLoggedIn] = useState(localStorage.getItem("token"))
const [theme] = useThemeHook();
const {totalItems}=useCart();
const [anchorEl, setAnchorEl] = React.useState(null);
const handleMenu = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};


const clearFun=()=>{
  SetIsLoggedIn(false)
}
  return (
  
        <div className="App">
      
      <AppBar position="static" color="inherit" >
        <Toolbar>

          <Button>OrderManagement</Button>
          <div style={{marginLeft:'auto'}}>
          <Button color="inherit"  onClick={()=>navigate("/")} >Home</Button>
          <Button color="inherit" onClick={()=>navigate("/viewCcoll")}>Collection</Button>
          </div>
          
         {isLoggedIn==true? (  
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} >{localStorage.username}</MenuItem>
                <MenuItem onClick={()=>clearFun()} >Logout</MenuItem>
              </Menu>
         </div>


       ):
         <div> <Button color="inherit"  onClick={()=>navigate("/login")}>Login</Button>
           <Button color="inherit"  onClick={()=>navigate("/signup")}>Signup</Button> 
         </div>}
        
        {isLoggedIn==true? <Button onClick={() => navigate(`/cartView`)}><AddShoppingCartIcon/>{totalItems}</Button>:<Button><AddShoppingCartIcon/></Button>
        }  
        
        
         
           {/* onClick={clearFun} */}
        </Toolbar>
      </AppBar>


      <section className="route-container">
      <CommonContext.Provider value={{ isLoggedIn, SetIsLoggedIn }}>
      <Routes>
             <Route path='/' element={<Home/>}/>
             
             <Route path='/login' element={<Login/>}/> 
             <Route path='/Adminnn' element={<Admin/>}/> 
             <Route path='/signup' element={<Register/>}/> 
            <Route path='/admin' element={<MasterLayout flow=""/>}/>
            <Route path='/Dashboard' element={<Navigate replace to="/admin"/>}/>
            <Route path='/Profile' element={<MasterLayout flow="Profile"/>}/>
            <Route path='/category' element={<MasterLayout flow="category"/>}/>
            <Route path='/view-category' element={<MasterLayout flow="view-category"/>}/>
            <Route path='/add-product' element={<MasterLayout flow="add-product"/>}/>
            <Route path='/view-product' element={<MasterLayout flow="view-product"/>}/>
            <Route path='/editpro/:id' element={<MasterLayout flow="editpro"/>}/>
            <Route path='/viewCcoll' element={<ViewCategoryColl />}/> 
            <Route path='/viewCcoll/:slug' element={<ViewProductColl/>}/> 
         
            <Route path='/cart/:id' element={<SingleProd/>}/> 
            <Route path='/cartView' element={<Cart/>}/> 
         
            
            
           
          
       </Routes>
       </CommonContext.Provider>
      </section>
       

    
        </div>

  

  );
}

export default App;
