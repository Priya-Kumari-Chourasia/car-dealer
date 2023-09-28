import React ,{useEffect} from 'react'
import './Auction.css'

//import icons
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'

//import images
import car2 from '../../Assets/car2.jpg'
import nexon from '../../Assets/Nexon.jpg'
import truebil from '../../Assets/truebil.jpg'
import Jeep1 from '../../Assets/Jeep1.jpg'


//import aos for animations and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'

const Auction = () => {

    useEffect(()=>{
        Aos.init(
            {
                duration:2000
            }
        )
    },[])

    return (
        <div className='auction section'>
        <div className="secContainer container">
            <div data-aos='fade-up' className="secHeading flex">
                <h3 className="secTitle">
                    Active Auctions
                </h3>

                <div className="navBtns flex">
                    <BsArrowLeftShort className='icon leftIcon'/>
                    <BsArrowRightShort className='icon rightIcon'/>
                </div>
            </div>

            <div className="carContainer grid">

                <div className="singleCar grid" data-aos='fade-up'>
                    <div className="imgDiv">
                        <img src={car2} alt="Car Image" />
                    </div>
                    <h5 className="carTitle">
                        Used 2019 Audi S4 Premium Plus
                    </h5>
                    <span className="miles">
                        11457 Miles
                    </span>
                    <span className="AWD">
                    AWD 4-cylinder Turbo

                    </span>

                    <div className="price_buyBtn flex">
                        <span className="price">
                            $41,2400
                        </span>
                        <span className="buyBtn">
                            Buy Now
                        </span>
                    </div>

                </div>


                <div className="singleCar grid singleCarActive" data-aos='fade-up'>
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
                    AWD 4-cylinder Turbo

                    </span>

                    <div className="price_buyBtn flex">
                        <span className="price">
                            $41,2400
                        </span>
                        <span className="buyBtn">
                            Buy Now
                        </span>
                    </div>

                </div>


                <div className="singleCar grid" data-aos='fade-up'>
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
                    AWD 4-cylinder Turbo

                    </span>

                    <div className="price_buyBtn flex">
                        <span className="price">
                            $41,2400
                        </span>
                        <span className="buyBtn">
                            Buy Now
                        </span>
                    </div>
                </div>


                <div className="singleCar grid singleCarActive" data-aos='fade-up'>
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
                    AWD 4-cylinder Turbo

                    </span>

                    <div className="price_buyBtn flex">
                        <span className="price">
                            $41,2400
                        </span>
                        <span className="buyBtn">
                            Buy Now
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Auction