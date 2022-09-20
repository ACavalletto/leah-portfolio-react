import NavBar from '../components/NavBar'
import style from '../style/pricing.css'
import {Link} from 'react-router-dom'

const Pricing = () => {
  return (
    <div className={style.pricing}>
          <div className="contentContainer">
          <NavBar />
            <h3>Investment</h3>
            <p>
                All sessions will include a sneak peak within 24 hours.<br />
                25% deposit due at time of booking.<br />
                Two to three week turnaround time.<br />
                Travel costs upon request.<br />
        </p>
        <Link to='/contact'>
            <button id= 'contact'>
                <u>Book Session</u>
          </button>
        </Link>
            <div className="bronzeTier">
          <img src={require('../assets/pictures/couple4/C964CCD6-F500-4405-B9BD-6112AC132921.jpeg')} alt='couple'/>
                <h5>Bronze</h5>
                <h6>$150</h6>
                <ul>
                    <li>
                        30 minute coverage
                    </li>
                    <li>
                        20+ digital images
                    </li>
                </ul>
            </div>
            <div className="silverTier">
          <img src={require('../assets/pictures/GracieGriffin/802E45A0-F70A-4ABE-BB35-6EF17C93F32E.jpeg')} alt='couple'/>
                <h5>Silver</h5>
                <h6>$225</h6>
                <ul>
                    <li>
                        45-60 minute coverage
                    </li>
                    <li>
                        Black and white photos
                    </li>
                    <li>
                        30+ digital images
                    </li>
                </ul>
            </div>
            <div className="goldTier">
          <img src={require('../assets/pictures/couple5/039130D7-7DC0-4E75-B54E-98C3B1AEC91C.jpeg')} alt='couple'/>
                <h5>Gold</h5>
                <h6>$320</h6>
                <ul>
                    <li>
                        90-120 minute coverage
                    </li>
                    <li>
                        Black and white photos
                    </li>
                    <li>
                        45+ digital images
                    </li>
                    <li>Multiple outfits</li>
                </ul>
            </div>
            <div className="minis">
          <img src={require('../assets/pictures/individual1/7E60EA8C-B54A-4336-BC2C-C76C4D9E8839.jpeg')} alt='a girl and her dog'/>
                <h5>Minis</h5>
                <h6>$75</h6>
                <ul>
                    <li>
                        15 minute coverage
                    </li>
                    <li>
                        10 digital images
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Pricing