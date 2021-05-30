import React, {useEffect, useState } from 'react'
import {isAuthenticated} from '../auth/apiAuth'
import { getUserById } from '../feed/apiFeed';
import Moment from 'react-moment';
import AnimationYoga from '../animation/AnimationYoga';



const Profile = () => {

    const [profile, setProfile] = useState({});

    useEffect(()=>{
        getUserById(100)
        .then((data)=>{
            setProfile(data)
        })
    }, [])


    return (
        <div class="container" id="page-content">
        <div class="row container d-flex justify-content-center mt-4">
            <div class="col-xl-10 col-md-12">
                <div class="card user-card-full">
                    <div class="row m-l-0 m-r-0">
                        <div class="col-sm-4 bg-c-lite-green user-profile">
                            <div class="card-block text-center text-white">
                                <div class="m-b-25"> <img src={profile.avatar} style={{width:"200px"}} class="img-radius" alt="User-Profile-Image" /> </div>
                               
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="card-block">
                                <h2 class="m-b-20 p-b-5 b-b-default f-w-600">Profile Information</h2>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Name</p>
                                        <h6 class="text-muted f-w-400">{profile.name}</h6>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Email</p>
                                        <h6 class="text-muted f-w-400">{profile.email}</h6>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Streak</p>
                                        <h6 class="text-muted f-w-400">{profile.streak}{' '}<i class="fas fa-fire"></i></h6>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Profile created on</p>
                                        <h6 class="text-muted f-w-400"><Moment format="YYYY/MM/DD">{profile.time}</Moment></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AnimationYoga />
        </div>
</div>
    )
}

export default Profile
