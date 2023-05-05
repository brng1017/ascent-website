import React, { useState } from 'react';
import '../styles/mail.css';
import { CSSTransition } from 'react-transition-group';
import { sendForm } from 'emailjs-com';
import { Link } from 'gatsby';
import { RiCloseLine } from 'react-icons/ri';

const Mail = ({ toggleMailForm, showMailForm }) => {
  const [showStatus, setShowStatus] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    sendForm(process.env.GATSBY_EMAIL_ID, 'template_cuqabcg', e.target, process.env.GATSBY_EMAIL_KEY)
      .then((response) => {
        console.log('Email sent', response.status);

        setEmailSent(true);
        setShowStatus(true);
        setTimeout(() => {
          setShowStatus(false);
          setEmailSent(false);
      }, 5000)
      })
      .catch((error) => {
        console.log('Email failed', error);

        setShowStatus(true);
        setTimeout(() => {
          setShowStatus(false);
        }, 5000)
      })
  }

  return (
    <div className='mail'>
      {showMailForm && (
        <div className='overlay' onClick={toggleMailForm} onKeyDown={toggleMailForm}></div>
      )}
      <CSSTransition in={showMailForm} timeout={500} classNames='form' unmountOnExit>
        <div className='form__container'>
          <div className='form__inner-container'>
            <RiCloseLine className='form__close' color='#9C0000' size={40} onClick={toggleMailForm} />
            <div className='form__text'>
              <p>Have a question? Feel free to message us or click <Link to='/book'>here</Link> to book us!</p>
            </div>
            <form className='form__fields' onSubmit={sendEmail}>
              <label htmlFor='name'>Name *</label>
              <input
                type='text'
                name='name'
                placeholder='First and Last Name'
                required
              />
              <label htmlFor='email'>Email *</label>
              <input
                type='email'
                name='email'
                placeholder="Email"
                required
              />
              <label htmlFor='subject'>Subject *</label>
              <input
                type='text'
                name='subject'
                placeholder='Subject Title'
                required
              />
              <label htmlFor='message'>Message *</label>
              <textarea
                name='message'
                placeholder="Message"
                rows='3'
                required
              />
              <div className='form__fields-submit'>
                <input className='form__fields-button' type="submit" value="Submit" />
                {showStatus && (
                  emailSent ?
                  <p className='form__fields-submit_success'>Email sent successfully!</p> : 
                  <p className='form__fields-submit_fail'>Email failed.</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}

export default Mail