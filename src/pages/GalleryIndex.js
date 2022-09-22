import NavBar from "../components/NavBar"
import style from '../style/galleryIndex.css'


const GalleryIndex = () => {
  return (
    <div className={style.galleryIndex}>
      <div className="contentContainer">
        <NavBar />
        <h3 id='C_title'>Collections</h3>
        <div className="galleryContainer">
            <a href='https://leahbinghamphoto.pixieset.com/' target ='_blank' rel='noreferrer' className="pictureAnchor">
            <img src={require('../assets/pictures/GracieGriffin/D4B05AD5-825B-479D-A1E8-639282EC37F2.jpeg')} alt='Gracie and Griffin'/>
            </a>
            <a id ='GI_linkText' href='https://leahbinghamphoto.pixieset.com/' target ='_blank' rel='noreferrer'>
                Couples
            </a>
        </div>
        <div className="galleryContainer">
            <a id ='GI_linkText' href='https://leahbinghamphoto.pixieset.com/' target ='_blank' rel='noreferrer'>
                Maternity
            </a>
            <a href='https://leahbinghamphoto.pixieset.com/' target ='_blank' rel='noreferrer' className="pictureAnchor">
            <img src={require('../assets/pictures/couple3/9CA83304-F1A3-41D3-9A80-52608A2BBD29.jpeg')} alt ='couple'/>
            </a>
        </div>
        <div className="galleryContainer">
            <a href='https://leahbinghamphoto.pixieset.com/' target ='_blank' rel='noreferrer' className="pictureAnchor">
                      <img src={require('../assets/pictures/individual2/3067ECC6-8E71-4895-82FE-40C5AC264972.jpeg')} alt='girl on a blanket'/>
            </a>
            <a id ='GI_linkText' href='https://leahbinghamphoto.pixieset.com/' target ='_blank' rel='noreferrer'>
                Lifestyle
            </a>
        </div>
        </div>
    </div>
  )
}

export default GalleryIndex