import React ,{useEffect} from 'react'
import './Trending.css'

//import icons
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'

//import images
import car1 from '../../Assets/car3.jpg'
import nexon from '../../Assets/Nexon.jpg'
import truebil from '../../Assets/truebil.jpg'
import Jeep1 from '../../Assets/Jeep1.jpg'

//import aos for animations and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'


const Trending = () => {

    useEffect(()=>{
        Aos.init(
            {
                duration:2000
            }
        )
    },[])

    return (
        <div className='trending section'>
            <div className="secContainer container">
                <div data-aos='fade-up' className="secHeading flex">
                    <h3 className="secTitle">
                        Trending Near You
                    </h3>

                    <div className="navBtns flex">
                        <BsArrowLeftShort className='icon leftIcon'/>
                        <BsArrowRightShort className='icon rightIcon'/>
                    </div>
                </div>

                <div className="carContainer grid">
                    <div data-aos='fade-up' data-aos-duration='2000' className="singleCar grid">
                        <div className="imgDiv">
                            <img src={car1} alt="Car Image" />
                        </div>
                        <h5 className="carTitle">
                            Used 2019 Audi S4 Premium Plus
                        </h5>
                        <span className="miles">
                            11457 Miles
                        </span>
                        <span className="AWD">

                        </span>

                        <div className="price_seller flex">
                            <span className="price">
                                $41,2400
                            </span>
                        </div>
                    </div>


                    <div data-aos='fade-up' data-aos-duration='2000' className="singleCar grid">
                        <div className="imgDiv">
                            <img src={nexon} alt="Car Image" />
                        </div>
                        <h5 className="carTitle">
                            Used 2019 Audi S4 Premium Plus
                        </h5>
                        <span className="miles">
                            11457 Miles
                        </span>
                        <span className="AWD">

                        </span>

                        <div className="price_seller flex">
                            <span className="price">
                                $41,2400
                            </span>
                        </div>
                    </div>


                    <div data-aos='fade-up' data-aos-duration='2000' className="singleCar grid">
                        <div className="imgDiv">
                            <img src={truebil} alt="Car Image" />
                        </div>
                        <h5 className="carTitle">
                            Used 2019 Audi S4 Premium Plus
                        </h5>
                        <span className="miles">
                            11457 Miles
                        </span>
                        <span className="AWD">

                        </span>

                        <div className="price_seller flex">
                            <span className="price">
                                $41,2400
                            </span>
                        </div>
                    </div>


                    <div data-aos='fade-up' data-aos-duration='2000' className="singleCar grid">
                        <div className="imgDiv">
                            <img src={Jeep1} alt="Car Image" />
                        </div>
                        <h5 className="carTitle">
                            Used 2019 Audi S4 Premium Plus
                        </h5>
                        <span className="miles">
                            11457 Miles
                        </span>
                        <span className="AWD">

                        </span>

                        <div className="price_seller flex">
                            <span className="price">
                                $41,2400
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Trending;