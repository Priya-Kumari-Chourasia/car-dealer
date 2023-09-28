import React ,{useEffect} from 'react'
import './Sellers.css'
import sellerImage1 from '../../Assets/imglogo.png'


//import aos for animations and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'

const Sellers = () => {
    useEffect(()=>{
        Aos.init(
            {
                duration:2000
            }
        )
    },[])
    return (
        <div className='sellers section'>
        <div className="secContainer container">
            <div data-aos='fade-up' className="secHeading grid">
                <h3 className="secTitle">
                    Explore top sellers in town
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatem, ut sit quibusdam molestiae tenetur?</p>
            </div>

            <div className="sellersContainer grid">
                {/*Single seller*/}

                <div data-aos='fade-up' className="singleSeller flex">
                    <div className="imgDiv flex">
                        <img src={sellerImage1} alt="" className='img' />
                    </div>
                    <span className="info">
                        <h4 className="name">
                            Mercedes Benz
                        </h4>
                        <p>from $60k</p>
                    </span>
                </div>

                <div data-aos='fade-up' className="singleSeller flex">
                    <div className="imgDiv flex">
                        <img src={sellerImage1} alt="" className='img' />
                    </div>
                    <span className="info">
                        <h4 className="name">
                            Mercedes Benz
                        </h4>
                        <p>from $60k</p>
                    </span>
                </div>

                <div data-aos='fade-up' className="singleSeller flex">
                    <div className="imgDiv flex">
                        <img src={sellerImage1} alt="" className='img' />
                    </div>
                    <span className="info">
                        <h4 className="name">
                            Mercedes Benz
                        </h4>
                        <p>from $60k</p>
                    </span>
                </div>

                <div data-aos='fade-up' className="singleSeller flex">
                    <div className="imgDiv flex">
                        <img src={sellerImage1} alt="" className='img' />
                    </div>
                    <span className="info">
                        <h4 className="name">
                            Mercedes Benz
                        </h4>
                        <p>from $60k</p>
                    </span>
                </div>


            </div>
        </div>

        </div>
    )
}
export default Sellers;