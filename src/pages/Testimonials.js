import NavBar from '../components/NavBar'
import style from '../style/testimonials.css'

const Testimonials = () => {
  return (
      <div className={style.testimonials}>
          <div className="TES_contentContainer">
              <NavBar />
              <h3>Testimonials</h3>
              <img id='testimonialImg' src={require('../assets/pictures/couple5/55A62C70-2168-4CC9-B8C8-1FD7DF81EEDF.jpeg')} alt="couple holding baby's shirt with name on it." />
              <h2 id='TES_names'>Lexy &<br/><span id='TES_span'>Hunter</span></h2>
              <p id='TES_p'>“When I tell you it was the absolute best decision we ever made when we chose Leah for our gender reveal photos! When I messaged her my vision and told her our situation of not knowing the exact day we would get the results back she jumped at the challenge. She really captured Hunter and I so well and went above and beyond. Our gender reveal was nothing like ones I normally see, and that’s why I wanted to do it! And, she made it even better then I could have hoped for! I can not recommend her enough and will definitely be using her again.”</p> 
          </div>
      </div>
  )
}

export default Testimonials