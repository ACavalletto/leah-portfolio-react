import NavBar from "../components/NavBar"
import style from '../style/galleryshow.css'

const Gallery1 = () => {
  return (
    <div className={style.galleryshow}>
      <div className="contentContainer">
            <NavBar />
            <h3>Gracie and Griffin</h3>
            <div className="imageContainer">
                <img className='galleryImage' 
                src={require('../assets/pictures/GracieGriffin/1720B22D-3BFE-4759-8775-40F179985C63.jpeg')} alt='couple'/>
                <img className='galleryImage'
                src={require('../assets/pictures/GracieGriffin/4A50E269-00EF-44EE-A0E3-7FF2CBCF044B.jpeg')} alt='couple'/>
                <img className='galleryImage'
                src={require('../assets/pictures/GracieGriffin/802E45A0-F70A-4ABE-BB35-6EF17C93F32E.jpeg')} alt='couple'/>
                <img className='galleryImage'
                src={require('../assets/pictures/GracieGriffin/D4B05AD5-825B-479D-A1E8-639282EC37F2.jpeg')} alt='couple'/>
                <img className='galleryImage'
                src={require('../assets/pictures/GracieGriffin/E48CF2F0-D2D4-47E7-870A-555D4853C60C.jpeg')} alt='couple'/>
                <img className='galleryImage'
                src={require('../assets/pictures/GracieGriffin/EA0350E1-92BD-4201-A2AC-956ACF9E5B16.jpeg')} alt='couple'/>
            </div>
        </div>
    </div>
  )
}

export default Gallery1

