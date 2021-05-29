import React, { useEffect, useState } from 'react'
import { Container} from "react-bootstrap";
import {getActivity} from './apiFeed'
import imgstat from '../../images/meditating.jpeg'

const Activity = () => {

    const [activity, setActivity] = useState({title:'', desc:''});
    useEffect(()=>{
        getActivity()
        .then((data)=>{
            setActivity(data)
        })
    }, [])
    return (
        <Container>
        <div className="activity">
            <p>What should you do today?</p>
            <h5 style={{fontWeight:"700"}}>{activity.title}</h5>
            <p>Why this Task ?</p>
            <h5 style={{fontWeight:"500"}}><i>{activity.desc}</i></h5> 
        </div>
        <button className='btn btn-block task-btn' style={{background:"#23049d"}}><a href='/post' style={{color:'white'}}>Upload A Photo</a></button> <br />
        <img src={imgstat} className='center'></img>
        </Container>
    )
}

export default Activity
