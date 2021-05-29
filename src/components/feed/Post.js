import React, { useEffect, useState } from 'react'
import { getUserById } from './apiFeed';

const Post = ({title, image, id, comments, likes, username}) => {

    const [user, setUser]=useState({});

    useEffect(()=>{
        getUserById(id)
        .then((data)=>{
            setUser(data)
        })
        
    }, [])

    return (
        <div class="card post">
            <div>
            <img class="card-img-top post-img" src={image} alt="Card cap" />
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">{title}</li>
            </ul>
            <div class="card-body">
                <a class="card-link" style={{color:"#867ae9"}}>by @ {username}</a>
                <a class="card-link"><i class="fas fa-heart" style={{color: "red"}}></i>{' '}{likes.length}</a>
                <a class="card-link"><i class="fas fa-comments" style={{color: "#867ae9"}}></i>{' '}{likes.length}</a>
            </div>
        </div>
    )
}

export default Post
