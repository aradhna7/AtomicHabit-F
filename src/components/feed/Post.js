import React, { useEffect, useState } from 'react'
import { getUserById } from './apiFeed';

const Post = ({title, image="https://archziner.com/wp-content/uploads/2019/07/colourful-anime-characters-split-drawing-anime-boy-drawing-1.jpg", id="200", comments=[], likes=[]}) => {

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
            <img class="card-img-top post-img" src={image} alt="Card image cap" />
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">{title}</li>
            </ul>
            <div class="card-body">
                <a class="card-link">@{user.name}</a>
                <a class="card-link"><i class="fas fa-heart" style={{color: "red"}}></i>{' '}{likes.length}</a>
                <a class="card-link"><i class="fas fa-comments" style={{color: "blue"}}></i>{' '}{likes.length}</a>
            </div>
        </div>
    )
}

export default Post
