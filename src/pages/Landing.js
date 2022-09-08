import NavBar from '../components/NavBar'
import style from '../style/landing.css'
import {Link} from 'react-router-dom'


const Landing = () => {
  return (
    <div className={style.landing}>
        <NavBar />
        <div className="cover">
            <div id="coverTitle">
                LEAH BINGHAM
                <br />PHOTOGRAPHY
            </div>
            <Link to='/contact'>
                <button id= 'contact'>
                    <u>Book Session</u>
                </button>
            </Link>
        </div>
        <div className="contentContainer">
            <div className="gallerySection">
                <img src={require("../assets/pictures/GracieGriffin/E48CF2F0-D2D4-47E7-870A-555D4853C60C.jpeg")} />
                <Link to='/gallery'>
                    <div className = "galleryBtn">
                        <button>
                            <u>Gallery</u>
                        </button>
                    </div>
                </Link>
            </div>
            <div className="testimonialsSection">
                <h5>Testimonials</h5>
                <p>“When I tell you it was the absolute best decision we ever made when we chose Leah for our gender reveal photos! When I messaged her my vision and told her our situation of not knowing the exact day we would get the results back she jumped at the challenge. She really captured Hunter and I so well and went above and beyond. Our gender reveal was nothing like ones I normally see, and that’s why I wanted to do it! And, she made it even better then I could have hoped for! I can not recommend her enough and will definitely be using her again.”</p>
            </div>
            <div className="aboutSection">
                <img src={require('../assets/pictures/36A42AF2-8EB1-4C15-AFC6-7260E3CAA6EA.jpeg')}/>
                <div>
                    <h5>About Me</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim. Pellentesque habitant morbi tristique senectus et netus et.</p>
                    <Link to='/contact'>
                        <button >
                            <u>Contact Me</u>
                        </button>
                    </Link>
                    <div id="instagramHandle">
                        <i className="fa-brands fa-instagram fa-xl">  
                        </i>
                        <a href='https://www.instagram.com/leahbinghamphoto/' target='_blank'>
                            leahbinghamphoto
                        </a>
                        
                    </div>
                </div>
            </div>
    </div>
    </div>
  )
}

export default Landing