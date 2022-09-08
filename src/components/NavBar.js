import { Link } from 'react-router-dom'
import style from '../style/navbar.css'

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
            <Link className='icon' onClick={collapsible}>
                <i className="fa fa-bars"></i>
            </Link>
        </div>
    </header>
    </div>
    )
}

export default NavBar