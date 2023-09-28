import React ,{useEffect} from 'react'
import './Review.css'


//import icons
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'

//Imported Images
import car1 from '../../Assets/car1.jpg'
import user from '../../Assets/reviewer.jpg'


//import aos for animations and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'

const Review = () => {

    useEffect(()=>{
        Aos.init(
            {
                duration:2000
            }
        )
    },[])

    return (
        <div className='review section'>
            <div className="secContainer container">
                <div data-aos='fade-up' className="secHeading flex">
                    <h3 className="secTitle">
                        Recent Reviews
                    </h3>

                    <div className="navBtns flex">
                        <BsArrowLeftShort className='icon leftIcon'/>
                        <BsArrowRightShort className='icon rightIcon'/>
                    </div>
                </div>

                {/*review container*/}
                <div className="reviewContainer grid" data-aos='fade-up'>
                    {/*single review*/}
                    <div className="singleReview grid" data-aos='fade-up'>
                        <div className="imgDiv">
                            <img src={car1} alt="Car Image" />
                        </div>
                        <h5 className="reviewTitle">
                            2023 Cadiallac
                        </h5>

                        <span className="desc">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, dolore!
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, est.
                        </span>

                        <div className="reviewerDiv flex">
                            <div className="leftDiv flex">
                                <div className="reviewerImage">
                                    <img src={user} alt="Reviewer Image" />
                                </div>
                                <div className="aboutReviewer">
                                    <span className="name">Jakline Nelson</span>
                                    <p>Chief Editor</p>
                                </div>
                            </div>
                            <div className="rightDiv flex">
                                <AiFillStar className='icon'/>
                                <blockquote>4.84</blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="singleReview grid" data-aos='fade-up'>
                        <div className="imgDiv">
                            <img src={car1} alt="Car Image" />
                        </div>
                        <h5 className="reviewTitle">
                            2023 Cadiallac
                        </h5>

                        <span className="desc">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, dolore!
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, est.
                        </span>

                        <div className="reviewerDiv flex">
                            <div className="leftDiv flex">
                                <div className="reviewerImage">
                                    <img src={user} alt="Reviewer Image" />
                                </div>
                                <div className="aboutReviewer">
                                    <span className="name">Jakline Nelson</span>
                                    <p>Chief Editor</p>
                                </div>
                            </div>
                            <div className="rightDiv flex">
                                <AiFillStar className='icon'/>
                                <blockquote>4.84</blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="singleReview grid" data-aos='fade-up'>
                        <div className="imgDiv">
                            <img src={car1} alt="Car Image" />
                        </div>
                        <h5 className="reviewTitle">
                            2023 Cadiallac
                        </h5>

                        <span className="desc">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, dolore!
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, est.
                        </span>

                        <div className="reviewerDiv flex">
                            <div className="leftDiv flex">
                                <div className="reviewerImage">
                                    <img src={user} alt="Reviewer Image" />
                                </div>
                                <div className="aboutReviewer">
                                    <span className="name">Ojasvi Mehra</span>
                                    <p>Chief Editor</p>
                                </div>
                            </div>
                            <div className="rightDiv flex">
                                <AiFillStar className='icon'/>
                                <blockquote>4.84</blockquote>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Review;