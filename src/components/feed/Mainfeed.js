import React, {useEffect, useState} from 'react'
import Post from './Post'
import ScrollToTop from "react-scroll-to-top";
import {getAllPost} from './apiFeed'

const Mainfeed = () => {
    const [posts, setPosts]=useState([]);

    useEffect(() => {
        getAllPost(localStorage.getItem("token"))
        .then((data)=>{
            setPosts(data)
        })
    }, [])
    return (
        <div className="feed">
                <ScrollToTop smooth />
                <br></br>
                <h1 style={{color:'black', fontWeight:'700', textAlign:'center'}}>Feed</h1>

                <div className='allPosts'>
                  {posts.map((post, i)=>{
                    return <Post key={i} id={post._id} title={post.title} image={post.image} likes={post.likes} comments={post.comments} username={post.username}/>
                })}  
                </div>
        </div>
    )
}

export default Mainfeed
