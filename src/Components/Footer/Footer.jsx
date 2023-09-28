import React ,{useEffect} from 'react'
import './Footer.css'


//import aos for animations and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {
    useEffect(()=>{
        Aos.init(
            {
                duration:2000
            }
        )
    },[])
    return (
        <div className='footer'>
            <div className="footerContainer container">
                <div className="footerMenuDiv grid">
                {/*Single grid*/}
                    <div className="singleGrid" data-aos='fade-up'>
                        <span className="footerTitle">
                            About
                        </span>
                        <ul className="footerUl grid">
                            <li className="footerLi">
                                How it works
                            </li>
                            <li className="footerLi">
                                Careers
                            </li>
                            <li className="footerLi">
                                Affliates
                            </li>
                            <li className="footerLi">
                                Media
                            </li>
                        </ul>
                    </div>

                    {/*Single grid*/}
                    <div className="singleGrid" data-aos='fade-up'>
                        <span className="footerTitle">
                            Become Seller
                        </span>
                        <ul className="footerUl grid">
                            <li className="footerLi">
                                Add Vehicles
                            </li>
                            <li className="footerLi">
                                Resource center
                            </li>
                            <li className="footerLi">
                                Bonds
                            </li>
                            <li className="footerLi">
                                Release Dates
                            </li>
                        </ul>
                    </div>

                    {/*Single grid*/}
                    <div className="singleGrid" data-aos='fade-up'>
                        <span className="footerTitle">
                        Community
                        </span>
                        <ul className="footerUl grid">
                            <li className="footerLi">
                                Recommendations
                            </li>
                            <li className="footerLi">
                                Gift Cards
                            </li>
                            <li className="footerLi">
                                Top Ups
                            </li>
                            <li className="footerLi">
                                Selling
                            </li>
                        </ul>
                    </div>

                    {/*Single grid*/}
                    <div className="singleGrid" data-aos='fade-up'>
                        <span className="footerTitle">
                            Booking Support
                        </span>
                        <ul className="footerUl grid">
                            <li className="footerLi">
                                Updates for Covid-19
                            </li>
                            <li className="footerLi">
                                Help Center
                            </li>
                            <li className="footerLi">
                                Garages
                            </li>
                            <li className="footerLi">
                                Trust and Safety
                            </li>
                        </ul>
                    </div>
                </div>

                {/*Footer Lower Section*/}
                <div className="lowerSection grid">
                    <p>2023 All right reserved</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;