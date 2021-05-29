import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import photo from '../../images/login.png'
import {signin, authenticate} from './apiAuth'


const Signin = () => {
    const [user, setUser]=useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState('');
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);

    const {email, password} = user;

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
        signin({email, password})
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
                setError('Invalid Credentials')
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
            {redirectUser()}
            <span className="login100-form-title">
                Log In
            </span>
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
                <button className="btn btn-block" style={{background:"#23049d", color:'white'}}>
                Log In
                </button>
            </div>
            <br />
            <div className="text-center p-t-136">
                <Link to="/signup">
                    New User? Create your Account
                </Link>
            </div>
        </form>
        </div>
        </div>
    )
}

export default Signin
