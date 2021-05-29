import React, {useEffect, useState} from 'react'
import Post from './Post'
import ScrollToTop from "react-scroll-to-top";
import Activity from './Activity';
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
            <div className="container col-12 col-md-6 centerDiv">
                <ScrollToTop smooth />
                <br/>
                <Activity />

                
                {posts.map((post, i)=>{
                    return <Post key={i} id="post.user" title="daily post" image={post.image} likes={post.likes} comments={post.comments}/>
                })}
                <Post title="Drew my fav anime" image="https://archziner.com/wp-content/uploads/2019/07/colourful-anime-characters-split-drawing-anime-boy-drawing-1.jpg" />
                <Post title="baked cake" image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DR_xDiShk" />
                <Post title="click picture with family" image="https://image1.masterfile.com/getImage/NjMwLTAxNzA4NjA4ZW4uMDAwMDAwMDA=ALdK6U/630-01708608en_Masterfile.jpg" />
            </div>
        </div>
    )
}

export default Mainfeed
