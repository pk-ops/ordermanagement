import React, { useState } from 'react';
import Navbar from '../../../Layout/frontend/Navbar';

// import * as yup from 'yup'
import { Link } from 'react-router-dom';
// import { API } from "./global";

// const formValidationSchema=yup.object({
//     name:yup.string().required(),
//     email: yup.string().min(5,"Need ").required(),
//     password: yup.string().min(8).max(12).required(),
//   });

const Register = () => {
    // const {registerInput,handleInput,errors,touched}=useFormik({
    //     initialValues:{name:"",email:"prathamesh",password:"bbb"},
    //     validationSchema:formValidationSchema,
    //     onSubmit:(value)=>{
    //       console.log("onSubmit",value)
    //     }
    //   })

    const [registerInput, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        role:'',

    });

    const handleInput = (e) => {

        setRegister({ ...registerInput, [e.target.name]: e.target.value })
    }

    const registerSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
            role:registerInput.role,
        }
        // const {fname,email,password}=data;
        // console.log(data)
        fetch(`http://localhost:5000/users/register`, {
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
                if (data.status === "ok")
                    alert("Registration Successful")
            })

        // axios.post(`https://62a97087ec36bf40bdb787e6.mockapi.io/EcomRegi`,data).then(res=>{

        // });
    }
    return (
        <div>
            <Navbar />
            <div className='container py-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4>Register</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={registerSubmit}>
                                    <div className='form-group mb-3'>
                                        <label>Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            onChange={handleInput}
                                            value={registerInput.name}
                                            className='form-control' />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label>Email Id</label>
                                        <input
                                            type="text"
                                            name="email"
                                            onChange={handleInput}
                                            value={registerInput.email}
                                            className='form-control' />
                                        {/* {touched.email && errors.email?errors.email:" "} */}
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label>Password</label>
                                        <input
                                            type=""
                                            name="password"
                                            onChange={handleInput}
                                            value={registerInput.password}
                                            className='form-control' />
                                        {/* { touched.password && errors.password?errors.password:" "} */}
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label>Confirm Password</label>
                                        <input
                                            type=""
                                            name="confirm_password"
                                            onChange={handleInput}
                                            value={registerInput.confirm_password}
                                            className='form-control' />
                                    </div>
                                    <div>

                                    </div>



                                    <div className="form-group dropdown my-2">
                                        <select onChange={handleInput} 
                                                 name="role"
                                                 className='form-control'>
                                            <option value="1" disabled="disabled" selected="selected">Please select a Role</option>
                                            <option 
                                                value="User"
                                                 >User</option>
                                            <option value="Admin">Admin</option>
                                        </select>
                                    </div>


                                    <div className='form-group mb-3 d-grid'>
                                        <button type='submit' className='btn btn-primary'>Register</button>

                                    </div>

                                    <p className='signUp text-end'>
                                        Already Register
                                        <Link to="/login"> Sign In?</Link>
                                    </p>
                                </form>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
}

export default Register;