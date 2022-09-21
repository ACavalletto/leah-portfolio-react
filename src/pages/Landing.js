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
                <button id= 'contactLanding'>
                    <u>Book Session</u>
                </button>
            </Link>
        </div>
          <div className="contentContainer">
        <div id='landingSlogan'>
            <p id='landingSloganLine1'>
                Capturing moments and <br/>
            </p>
            <p id='landingSloganLine2'>creating a safe space for all.</p>
        </div>
            <div className="gallerySection">
                  <img src={require("../assets/pictures/GracieGriffin/E48CF2F0-D2D4-47E7-870A-555D4853C60C.jpeg")} alt='Couple' />
                <div className='linkBtns'>
                    <Link to='/collections'>
                        <div className = "galleryBtn">
                            <button>
                                <u>Collections</u>
                            </button>
                        </div>
                    </Link>
                    <div className="testimonialsSection">
                        <Link to='/testimonials'>
                            <button><u>Testimonials</u></button>
                        </Link>
                    </div>
                </div>
              </div>
              <div id='leftAboutL'>
                    <h5 id='aboutHeaderL'>Hello<br /><span>There...</span></h5>
                    <div id='aboutTextL'>
                        <p>I am Knoxville native and recent graduate from Middle Tennessee State University.</p>
                        <Link to='/contact'>
                            <button >
                                <u>Contact Me</u>
                            </button>
                        </Link>
                    </div>
                </div>
              <div className="aboutSection">
                  <img src={require('../assets/pictures/36A42AF2-8EB1-4C15-AFC6-7260E3CAA6EA.jpeg')} alt='Leah and Nathan' />
                  <div id="instagramHandle">
                        <i className="fa-brands fa-instagram fa-xl">  
                        </i>
                        <a href='https://www.instagram.com/leahbinghamphoto/' target='_blank' rel='noreferrer'>
                            leahbinghamphoto
                        </a>  
                    </div>
            </div>
    </div>
    </div>
  )
}

export default Landing