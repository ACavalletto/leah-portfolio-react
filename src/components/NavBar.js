import { Link } from 'react-router-dom'
import style from '../style/navbar.css'
import {Helmet} from 'react-helmet'

function collapsible() {
    let x = document.getElementById('myLinks');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}

const NavBar = () => {
    return (
    <div className={style.nav_bar}>
            <Helmet>
            <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500;600&display=swap"
      rel="stylesheet"
    />
    <script src="https://kit.fontawesome.com/ef037e1fd7.js" crossorigin="anonymous"></script>
    <script src="../public/javascript/menu.js" defer></script>

    <title>Leah Bingham Photography</title>
            </Helmet>        
    <header>
        <div className="topNav">
            <Link to='/' id="homeBtn">
                <i className="fa-solid fa-camera"></i>
            </Link>
            <div id="myLinks">
                <Link to='/pricing'>
                    <div>Pricing</div>
                </Link> 
                <Link to='/gallery'>
                    <div>Gallery</div>
                </Link>
                <Link to='/contact'>
                    <div>Contact</div>
                </Link>
                    </div>
                <Link  to='#' className='icon' onClick={collapsible}>
                    <i className="fa fa-bars"></i>
                </Link>
        </div>
    </header>
    </div>
    )
}

export default NavBar