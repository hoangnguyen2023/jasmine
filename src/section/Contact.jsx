import React from 'react';
import "../css/contact.css"



const Contact = () => {

  return (
    <div>
      <div className='contact__main'>

        <div className="header__title mgbottom-200 text-center ">
          <h4 className='text-muted'>Contact Me </h4>
          <h3>My email: jasminevo@jasmine.com</h3>
          <div className="form">
            <form action="" className='form__contact'>
              <input type="text" name='Name' placeholder='Name' />
              <input type="text" name='email' placeholder='Email' />
              <div className="comment">
                <textarea name="comment" id="comment" cols="90" rows="15" placeholder='Comment'></textarea>
                
              </div>
              <button type="submit" >Submit</button>
            </form>

          </div>


        </div>


      </div>

    </div>
  )
}

export default Contact
