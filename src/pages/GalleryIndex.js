import NavBar from "../components/NavBar"
import style from '../style/galleryIndex.css'
import {Link} from 'react-router-dom'

const GalleryIndex = () => {
  return (
    <div className={style.galleryIndex}>
      <div class="contentContainer">
        <NavBar />
        <h3>Gallery</h3>
        <div class="galleryContainer">
            <Link to='/gallery1' class="pictureAnchor">
            <img src={require('../assets/pictures/GracieGriffin/D4B05AD5-825B-479D-A1E8-639282EC37F2.jpeg')} />
            </Link>
            <Link to="/gallery1">
                Gracie and Griffin
            </Link>
        </div>
        <div class="galleryContainer">
            <Link to="#" class="pictureAnchor">
            <img src={require('../assets/pictures/couple2/6FF4E0B7-6801-4CF8-AE01-E5103F7961E7.jpeg')} />
            </Link>
            <Link to="#">
                Gracie and Griffin
            </Link>
        </div>
        <div class="galleryContainer">
            <Link to="#" class="pictureAnchor">
            <img src={require('../assets/pictures/couple3/9CA83304-F1A3-41D3-9A80-52608A2BBD29.jpeg')} />
            </Link>
            <Link to="#">
                Gracie and Griffin
            </Link>
        </div>
        <div class="galleryContainer">
            <Link to="#" class="pictureAnchor">
            <img src={require('..//assets/pictures/couple4/9EEBCCBF-D2F3-45FA-90EB-9362CF20DAC5.jpeg')} />
            </Link>
            <Link to="#">
                Gracie and Griffin
            </Link>
        </div>
        <div class="galleryContainer">
            <Link to="#" class="pictureAnchor">
            <img src={require('../assets/pictures/couple5/55A62C70-2168-4CC9-B8C8-1FD7DF81EEDF.jpeg')} />
            </Link>
            <Link to="#">
                Gracie and Griffin
            </Link>
        </div>
        <div class="galleryContainer">
            <Link to='#' class="pictureAnchor">
            <img src={require('../assets/pictures/couple6/84B93C58-91BB-48F7-953A-33BC9D492CCB.jpeg')} />
            </Link>
            <Link to="#">
                Gracie and Griffin
            </Link>
        </div>
        <div class="galleryContainer">
            <Link to='#' class="pictureAnchor">
            <img src={require('../assets/pictures/individual2/3067ECC6-8E71-4895-82FE-40C5AC264972.jpeg')} />
            </Link>
            <Link to="#">
                Gracie
            </Link>
        </div>
        <div class="galleryContainer">
            <Link to='#' class="pictureAnchor">
                <img src={require('../assets/pictures/individual1/27DC8BC6-2A7F-405B-8028-F5F820D7B888.jpeg')}/>
            </Link>
            <Link to="#">
                Gracie
            </Link>
        </div>
    </div>
    </div>
  )
}

export default GalleryIndex