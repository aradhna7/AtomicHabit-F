import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import photo from '../../images/fileup.png'
import { createPost } from './apiFeed';

const AddPost = () => {
    const [picture, setPicture] = useState(null);
    const [image, setImgData] = useState(null);
    const [title, setTitle]=useState('')
    const [error, setError] = useState('');
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(image, title)
        createPost({title, image})
        .then((data)=>{
            if(data){
                setRedirectToReferrer(true)
            }
            else{
                setError('Try Again')
            }
        })
    }

    const onChangePicture = e => {
        if (e.target.files[0]) {
          console.log("picture: ", e.target.files);
          setPicture(e.target.files[0]);
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            setImgData(reader.result);
          });
          reader.readAsDataURL(e.target.files[0]);
        }
        setError('')
        
    };
    console.log(image, title)
    

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
            {image ? <img style={{width:"300px"}} className="playerProfilePic_home_tile" src={image} /> : <img src={photo} alt="IMG" style={{width:"300px"}}/>}
            
        </div>
    
        <form className="login100-form validate-form" onSubmit={e=> handleSubmit(e)}>
            {showError()}
            {redirectUser()}
            <span className="login100-form-title">
                Create a Post
            </span>
            <div className="wrap-input100 validate-input" data-validate="title is required">
                <textarea  name="title" value={title}  onChange={e=> {setTitle(e.target.value); setError('')}} className="form-control" id="exampleInputPassword1" placeholder="Title" required />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                </span>
            </div>
            <div className="register_profile_image">
                <input id="profilePic" type="file" onChange={onChangePicture} />
              </div>
              <div className="previewProfilePic">
                
              </div>
              OR
              <input  name="title" value={image}  onChange={e=> {setImgData(e.target.value); setError('')}} className="form-control" id="exampleInputPassword1" placeholder="Image link" required />
                <span className="focus-input100"></span>
                <span className="symbol-input100"></span>
            <br />
            <div className="container-login100-form-btn">
                <button className="btn btn-dark btn-block">
                Post
                </button>
            </div>
           
            <div className="text-center p-t-136">
                <Link to="/feed">
                    Back to Feed
                </Link>
            </div>
        </form>
        </div>
        </div>
    )
}

export default AddPost
