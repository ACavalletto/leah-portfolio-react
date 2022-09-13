import NavBar from "../components/NavBar"
import style from '../style/galleryIndex.css'
import {Link} from 'react-router-dom'

const GalleryIndex = () => {
  return (
    <div className={style.galleryIndex}>
      <div className="contentContainer">
        <NavBar />
        <h3>Collections</h3>
        <div className="galleryContainer">
            <Link to='/collection1' className="pictureAnchor">
            <img src={require('../assets/pictures/GracieGriffin/D4B05AD5-825B-479D-A1E8-639282EC37F2.jpeg')} alt='Gracie and Griffin'/>
            </Link>
            <Link to="/collection1">
                Couples
            </Link>
        </div>
        <div className="galleryContainer">
            <Link to="#" className="pictureAnchor">
            <img src={require('../assets/pictures/couple3/9CA83304-F1A3-41D3-9A80-52608A2BBD29.jpeg')} alt ='couple'/>
            </Link>
            <Link to="#">
                Maternity
            </Link>
        </div>
        <div className="galleryContainer">
            <Link to='#' className="pictureAnchor">
            <img src={require('../assets/pictures/individual2/3067ECC6-8E71-4895-82FE-40C5AC264972.jpeg')} alt='girl on a blanket'/>
            </Link>
            <Link to="#">
                Lifestyle
            </Link>
        </div>
        </div>
    </div>
  )
}

export default GalleryIndex