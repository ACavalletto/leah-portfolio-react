import NavBar from "../components/NavBar"
import style from '../style/galleryshow.css'

const Gallery1 = () => {
  return (
    <div className={style.galleryshow}>
      <div className="contentContainer">
            <NavBar />
            <h3>Couple</h3>
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
                <img className='galleryImage'
                src={require('../assets/pictures/couple2/116F7CF8-3937-4324-94B0-B52037027AE5.jpeg')} alt='couple'/>
                <img className='galleryImage'
                src={require('../assets/pictures/couple2/43630532-5126-44C9-975A-684324167624.jpeg')} alt='couple' />
                <img className='galleryImage'
                src={require('../assets/pictures/couple2/6FF4E0B7-6801-4CF8-AE01-E5103F7961E7.jpeg')} alt='couple' />
                <img className='galleryImage'
                src={require('../assets/pictures/couple2/B51EFEAF-8E0D-418D-A479-CBA087EF2CA7.jpeg')} alt='couple' />
                <img className='galleryImage'
                src={require('../assets/pictures/couple4/00A79160-C996-4423-A790-BF56B2D20BBC.jpeg')} alt='couple' />
                <img className='galleryImage'
                src={require('../assets/pictures/couple4/9EEBCCBF-D2F3-45FA-90EB-9362CF20DAC5.jpeg')} alt='couple' />
                <img className='galleryImage'
                src={require('../assets/pictures/couple4/AF19AC1E-147F-4FA7-9118-588AE6D9C4ED.jpeg')} alt='couple' />
                <img className='galleryImage'
                src={require('../assets/pictures/couple4/C964CCD6-F500-4405-B9BD-6112AC132921.jpeg')} alt='couple'/>
            </div>
        </div>
    </div>
  )
}

export default Gallery1

