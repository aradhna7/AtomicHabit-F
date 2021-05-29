import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {isAuthenticated } from '../auth/apiAuth'

const Profile = () => {

    const [profile, setProfile] = useState({});


    return (
        <div>
          
          <div class="container col-12 col-md-10 profile-about bg-light p-2" style={{textAlign:"left"}}>
          <br/>
            <div className="container mt-4">
                <h3>Account</h3>
                <h6>Name</h6>
                <hr/>
                <div className="row">
                <div className="col-md-4">
                    <p class="copyright "> <img src="/static/media/logo1.7393573c.png" id="aradhna_footer_logo" /> </p>
                    <Link to="/editProfile"><button className="btn btn-block btn-warning mb-4">Edit Profile</button></Link>
                </div>
                <div className="col-md-8">
                    <h3>Profile Details</h3>
                    <table class="table table-borderless table-light">
                        <tbody>
                            <tr>
                            <th scope="row"> Name</th>
                            <td>Name</td>
                            </tr>
                            <tr>
                            <th scope="row"> Gender</th>
                            <td>Gender</td>
                            </tr>
                            <tr>
                            <th scope="row"> Date Of Birth</th>
                            <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
          
        </div>
        </div>
    )
}

export default Profile
