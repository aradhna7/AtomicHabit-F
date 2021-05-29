import React, { useEffect, useState } from 'react'
import {getActivity} from './apiFeed'

const Activity = () => {

    const [activity, setActivity] = useState({});
    useEffect(()=>{
        getActivity()
        .then((data)=>{
            setActivity(data)
        })
    }, [])
    return (
        <div className="activity">
            <p>What should you do today:</p>
            <p style={{fontWeight:"500"}}>{activity.title}</p>
            <p><i>{activity.desc}</i></p>
            
        </div>
    )
}

export default Activity
