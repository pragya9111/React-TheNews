import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/Navbar.css'

function Navbar() {
    const linkstyle = {
        color: 'white',
        fontFamily: 'roby soho',
        textDecoration: 'none',
        letterSpacing:'.2vmin'
    }    
    return (
        <nav>
            <div className='left' >
                <Link style={linkstyle} to='/' ><i class="ri-home-7-fill"></i></Link>
                <Link style={linkstyle} to='/Business' >Business</Link>
                <Link style={linkstyle} to='/Entertainment' >Entertainment</Link>
                <Link style={linkstyle} to='/Health' >Health</Link>
            </div>
            <h1>khabarilal.com</h1>
            <div className='right' >
                <Link style={linkstyle} to='/Technology' >Technology</Link>
                <Link style={linkstyle} to='/Science' >Science</Link>
                <Link style={linkstyle} to='/Sports' >Sports</Link>
                <i class="ri-search-line"></i>
            </div>
        </nav>
    )
}
export default Navbar