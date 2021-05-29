import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import photo from '../images/download.png'

const Home = () => {
    return (
            <div class="hs-item set-bg" data-setbg={photo}>
				<div class="hs-text">
					<div class="container">
						<h2 id="slider-heading">ATOMIC HABITS</h2>
					</div>
				</div>
			</div>
    )
}

export default Home
