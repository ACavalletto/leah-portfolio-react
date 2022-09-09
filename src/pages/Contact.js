import NavBar from '../components/NavBar'
import style from '../style/contact.css'


const Contact = () => {
  return (
    <div className={style.contact}>
      <div className='contentContainer'>
        <NavBar />
        <h3>Contact Me</h3>
        <form name='contact' method='post' data-netlify='true' onSubmit='submit'>
          <input type='hidden' name='form-name' value='contact' />
          <p>
            <label><input id='textInput' type='text' name='name' placeholder='Name'/></label>
          </p>
          <p>
            <label><input id='textInput' type='email' name='email' placeholder='Email' /></label>
          </p>
          <p>
            <label className='labelText'> Price Tier: <br/>
              <div id='radioBtns'>
                <input type='radio' id='bronze' name='tier' value='Bronze'/>
                <label style={{ color: '#A97142' }} htmlFor='bronze'>Bronze</label>
                <input type="radio" id="silver" name="tier" value="Silver"/>
                <label style={{ color:"#aaa9ad"}}  htmlFor="silver">Silver</label>
                <input type="radio" id="gold" name="tier" value="Gold"/>
                <label style={{ color: '#D4aF37' }} htmlFor="gold">Gold</label>
                <input type="radio" id="mini" name="tier" value="Mini"/>
                <label style={{ color: '#819283' }}  htmlFor="mini">Mini</label>
              </div>
            </label>
          </p>
          <p>
            <label><input id='textInput' type='text' name='instagram' placeholder=' Instagram Handle' /></label>
          </p>
          <p>
            <label className='labelText'>Shoot Details: <br />
              <textarea name='details' placeholder='Let me know about your shoot. ANy inspiration, details, or ideas.'></textarea>
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