import NavBar from '../components/NavBar'
import style from '../style/contact.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import swal from 'sweetalert'


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jq3nvpq', 'template_b6cbqse', form.current, 'ZDZt2cuMzCpiESNtJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text)
            });
        swal('Thank you for contacting me!', 'success')
    };
        
    return (
      <div className={style.contact}>
        <div className='contentContainer'>
          <NavBar />
          <h3>Contact Me</h3>
                <form name='contact' ref={form} onSubmit={sendEmail}>

            <p>
              <label><input id='textInput' type='text' name='name' placeholder='Name'/></label>
            </p>
            <p>
              <label><input id='textInput' type='email' name='email' placeholder='Email' /></label>
            </p>

            <p>
              <label className='labelText'> Investment Tier: <br/>
                <div id='investmentBtns'>
                  <input type='radio' id='bronze' name='tier' value='Bronze'/>
                  <label style={{ color: '#A97142' }} htmlFor='bronze'>Bronze</label>
                  <input type="radio" id="silver" name="tier" value="Silver"/>
                  <label style={{ color:"#aaa9ad"}}  htmlFor="silver">Silver</label>
                  <input type="radio" id="gold" name="tier" value="Gold"/>
                  <label style={{ color: '#D4aF37' }} htmlFor="gold">Gold</label>
                  <input type="radio" id="mini" name="tier" value="Mini"/>
                  <label style={{ color: '#819283' }}  htmlFor="mini">Mini</label>
                  <input type="radio" id="custom" name="tier" value="Custom"/>
                  <label style={{ color: '#819283' }}  htmlFor="custom">Custom</label>
                </div>
              </label>
            </p>
            <p>
              <label className='labelText'> Type of Shoot: <br/>
                <div id='radioBtns'>
                  <input type='radio' id='couples' name='type' value='Couples'/>
                  <label htmlFor='couples'>Couples</label>
                  <input type="radio" id="seniors" name="type" value="Seniors"/>
                  <label htmlFor="seniors">Seniors</label>
                  <input type="radio" id="Wedding" name="type" value="Wedding"/>
                  <label htmlFor="wedding">Wedding</label>
                  <input type="radio" id="lifestyle" name="type" value="Lifestyle"/>
                  <label htmlFor="lifestyle">Lifestyle</label>
                  <input type="radio" id="justForFun" name="type" value="JustForFun"/>
                  <label htmlFor="justForFun">Just for fun</label>
                </div>
              </label>
            </p>
            <p>
              <label><input id='textInput' type='text' name='instagram' placeholder=' Instagram Handle' /></label>
            </p>
            <p>
              <label className='labelText'>Shoot Details: <br />
                <textarea name='details' placeholder='Tell me about your vision.'></textarea>
              </label>
            </p>
            <p id='btn'>
              <button type='submit'>Send</button>
            </p>
          </form>
        </div>
      </div>
    )
  }
  
  export default Contact