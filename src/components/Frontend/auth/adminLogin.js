import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../../Layout/frontend/Navbar';

const Admin = () => {

    let navigate = useNavigate();
    const [Input, setInput] = useState({
        email: '',
        password: '',


    });

    const handleInput = (e) => {

        setInput({ ...Input, [e.target.name]: e.target.value })
    }

    const Submit = (e) => {
        e.preventDefault();

        const data = {
            email: Input.email,
            password: Input.password,
        }
       
        fetch("${API}/users/login-admin", {
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
                // console.log(data.user)
                if(data.role=='Admin'){
                        alert("Login successful");
                        localStorage.setItem("x-auth-token",data.token)
                        localStorage.setItem("id", data.id);
                        localStorage.setItem("adminname", data.name);
                        navigate('/Dashboard')
                 }
               else{
                    alert("error");
                }
               
            })
    }


    return (
        <div>
     
            <div className='container py-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header row'>
                                <div className='col'>
                                    <h4 className='text-center'>Admin Login</h4>
                                </div>
                        
                            </div>
                            <div className="card-body">
                                <form onSubmit={Submit}>
                                    <div className='form-group mb-3'>
                                        <label>Email Id</label>
                                        <input
                                            type="text"
                                            name="email"
                                            onChange={handleInput}
                                            value={Input.email}
                                            className='form-control' />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label>Password</label>
                                        <input
                                            type=""
                                            name="password"
                                            onChange={handleInput}
                                            value={Input.password}
                                            className='form-control'
                                        />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <button type='submit' className='btn btn-primary'>Login</button>

                                    </div>

                                    <div className='card-footer row'>
                                        <div className='col'>
                                            <p className='signUp text-first'>
                                                <Link to="/login" className='text-decoration-none'>User Login</Link>
                                            </p>
                                        </div>
                                        <div className='col'>
                                            <p className='signUp text-end'>
                                                <Link to="/register"> Sign Up</Link>
                                            </p>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Admin;