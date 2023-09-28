import React, { useState } from 'react'
import './Navbar.css'

//imported images
import logo from '../../Assets/logo.jpg'


//imported icons
import {IoIosCloseCircle} from 'react-icons/io'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
    //statement to hold the navbar state
    const [navbar, setNavbar]=useState('navbar')

    //function to show navbar on smaller width screens
    const showNavbar = ()=> {
        setNavbar('navbar showNavbar');
    }

    //function to remove navbar on smaller width screens
    const removeNavbar = ()=> {
        setNavbar('navbar');
    }

    //function to add a background to the navbar when we scroll a certain height on the window
    const[header,setHeader] = useState('header')
    const addBg = ()=>{
        if(window.screenY >= 20){
            setHeader('header addBg')
        }
    }

    window.addEventListener('scroll', addBg)

    return (
        <div className='header'>
            <div className="logoDiv">
                <img src={logo} alt="logo image" className='logo'/>
            </div>
            <div className={navbar}>
                <ul className="menu">
                    <li onClick={removeNavbar} className="listItem">
                        <a href="" className="link">Used Cars</a>
                    </li>
                    <li onClick={removeNavbar} className="listItem">
                        <a href="" className="link">New Cars</a>
                    </li>
                    <li onClick={removeNavbar} className="listItem">
                        <a href="" className="link">Auctions</a>
                    </li>
                    <li onClick={removeNavbar} className="listItem">
                        <a href="" className="link">Sellers</a>
                    </li>
                </ul>

                {/*icon that will close the navbar on small screens*/}
                <IoIosCloseCircle className='closeIcon' onClick={removeNavbar}/>
            </div>

            <div className="signUp flex" >
                <div className="text">Sign Up</div>
                {/*icon that will open the navbar on small screens*/}

                <TbGridDots className='icon toggleNavbarIcon' onClick={showNavbar}/>
            </div>
        </div>
    )
}
export default Navbar;