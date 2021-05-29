import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import photo from '../../images/login.png'
import {signup, authenticate} from './apiAuth'

const Signup = () => {
    const [user, setUser]=useState({
        name: '',
        email: '',
        password: ''
    })

    const [error, setError] = useState('');
    const [redirectToReferrer, setRedirectToReferrer] = useState('');

    const {name, email, password} = user;

    const handleChange = (e) =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        setError('');
    }

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(user)
        signup({name, email, password})
        .then((data)=>{
            console.log(data)
            if(data && data.token){
                authenticate(
                    data.token,
                    ()=>{
                        console.log("success lol yipeeeww");
                        setRedirectToReferrer(true);   
                    }
                ) 
                        
            }
            else{
                setError('User Already Exist')
            }
        })
    }

    const redirectUser = () =>{
        if(redirectToReferrer){
            return <Redirect to="/feed" />
        }
    }

    const showError = () =>{
        return <div className="alert alert-danger" style={{display : error ? '' : 'none'}}>
            {error}
        </div>
    }

    return (
        <div className="container-login100">
        <div className="wrap-login100">
        <div className="login-img">
            <img src={photo} alt="IMG"/>
        </div>
        
        

        <form className="login100-form validate-form" onSubmit={e=> handleSubmit(e)}>
            {showError()}
            {redirectToReferrer && <Redirect to="/feed" />}
            <span className="login100-form-title">
                Signup
            </span>
            <div className="wrap-input100 validate-input" data-validate="Valid name is required: abcde">
                <input type="text" name="name" className="form-control" value={name} onChange={e=> handleChange(e)} id="exampleInputEmail1" placeholder="Enter name" required/>
            </div>
            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input type="email" name="email" className="form-control" value={email} onChange={e=> handleChange(e)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                
                
            </div>
            <div className="wrap-input100 validate-input" data-validate="Password is required">
                <input type="password" name="password" value={password}  onChange={e=> handleChange(e)} className="form-control" id="exampleInputPassword1" placeholder="Password" required />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                </span>
            </div>
            <div className="container-login100-form-btn">
                <button className="btn btn-dark btn-block">
                Login
                </button>
            </div>
            <br />
            <div className="text-center p-t-136">
                <Link to="/signup">
                    Create your Account
                </Link>
            </div>
        </form>
        </div>
        </div>
    )
}

export default Signup