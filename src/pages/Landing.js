import NavBar from '../components/NavBar'
import {useState, useEffect} from 'react'
import style from '../style/landing.css'
import {Link} from 'react-router-dom'

const Landing = () => {
    function getWindowDimensions() {
        const { innerWidth: width } = window;
        return {
            width
        };
    }
    
    const [windowWidth, setWindowWidth] = useState(getWindowDimensions())
    useEffect(() => {
        function handleResize() {
            setWindowWidth(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
                  {windowWidth > '480px' && 
                  <img id='L_tabletImg' src={require("../assets/pictures/couple4/AF19AC1E-147F-4FA7-9118-588AE6D9C4ED.jpeg")} alt='Couple'/>}
            </div>
            <div id='leftAboutL'>
                    <h5 id='aboutHeaderL'>Hello<br /><span>There...</span></h5>
                    <div id='aboutTextL'>
                        <Link to='/contact'>
                            <button >
                                <u>Contact Me</u>
                            </button>
                        </Link>
                    </div>  
            </div>
            <div className="aboutSection">
                  <img src={require('../assets/pictures/leahheadshot.jpeg')} alt='Leah Bingham' />
                  <div id="instagramHandle">
                        <i className="fa-brands fa-instagram fa-xl">  
                        </i>
                        <a href='https://www.instagram.com/leahbinghamphoto/' target='_blank' rel='noreferrer'>
                            leahbinghamphoto
                        </a>  
                    </div>
              </div>
              <p id='L_aboutP'>I am Knoxville native and recent graduate from Middle Tennessee State University. I have dabbled in photography since I was a teenager, but never saw it as my career. My last year in college I fell back in love with photos and realized just how much joy it brings me to capture raw, authentic moments. After moving back to Knoxville, I started working towards my goal of becoming a full time photographer and here I am today. I am very grateful and I hope we get to work together!</p>
    </div>
    </div>
  )
}

export default Landing