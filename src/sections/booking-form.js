import React, { useState, useEffect, useRef } from 'react';
import { sendForm } from 'emailjs-com';
import { srConfig } from '../config';
import sr from '../utils/sr';

import { Package } from '../components';
import '../styles/booking-form.css';

const eventOptions = [
  { value: '', label: 'Select an Event Type' },
  { value: 'newyears', label: 'New Years Celebration' },
  { value: 'grandopening', label: 'Grand Opening' },
  { value: 'wedding', label: 'Wedding' },
  { value: 'house', label: 'House Event' },
  { value: 'cbg', label: 'Company/Banquet/Gala Event' },
  { value: 'other', label: 'Other' }
];

const eventPackages = {
  'New Years Celebration': [
    ['4 lions', '20 minutes', 'Scrolls', 'Store blessing', 'Set routine', 'Lettuce kick', 'Drumline Performance']
  ],
  'Grand Opening': [
    ['2 lions', '10 minutes', 'Scrolls', 'Store blessing', 'Set routine'],
    ['4 lions', '20 minutes', 'Scrolls', 'Store blessing', 'Set routine', 'Lettuce kick']
  ],
  'Wedding': [
    ['2 lions *', '15 minutes', 'Scrolls', 'Set routine', 'Orange toss', 'Pictures']
  ],
  'House Event': [
    ['2 lions', '10 minutes', 'Bow', 'House blessing', 'Audience interaction']
  ],
  'Company/Banquet/Gala Event': [
    ['2 lions', '20 minutes', 'Special custom routine', 'Scrolls', 'Drumline performance']
  ]
};

const eventAddons = [
  { value: 'addLion', label: 'Additional lions (specify number below)' },
  { value: 'addTime', label: 'Additional time (specify amount below)' },
  { value: 'monkey', label: 'Monkey king' },
  { value: 'drunkReplace', label: 'Drunken lion (in replacement of set routine)' },
  { value: 'drunkAddition', label: 'Drunken lion (in addition to set routine)' },
  { value: 'storyReplace', label: 'Story routine (in replacement of set routine)' },
  { value: 'benches', label: 'Benches' },
  { value: 'confetti', label: 'Confetti' },
]

const BookingForm = () => {
  const [eventOption, setEventOption] = useState('');
  const [showStatus, setShowStatus] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const revealTitle = useRef(null);
  const revealDescription = useRef(null);
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealDescription.current, srConfig());
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    sendForm(process.env.GATSBY_EMAIL_ID, 'template_m2ttjzq', e.target, process.env.GATSBY_EMAIL_KEY)
      .then((response) => {
        console.log('Email sent', response.status);
        console.log(e.target);

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
    <section className='booking'>
      <h2 className='booking__header'ref={revealTitle}>
        BOOK US TODAY!
      </h2>

      <p className='booking__description' ref={revealDescription}>
        If you would like to book us for a performance, please fill out the form below as detailed as possible about your event and desired outcome. Also, please make sure to explore the services and add-ons that we offer on our <a href='/services'>website</a>.
        <br/><br/>
        You can expect to receive a complimentary performance consultation from us within 2-5 business days, where we will consider your needs, schedule, and budget. Our goal is to provide you with exceptional service and ensure your satisfaction.
      </p>

      <form className='booking__form' onSubmit={sendEmail} ref={revealContainer}>
        <div className='booking__form-name'>
          <div>
            <label htmlFor='firstname'>First Name *</label>
            <input
              type='text'
              name='firstname'
              placeholder='First Name'
              required
            />
          </div>
          <div>
            <label htmlFor='lastname'>Last Name *</label>
            <input
              type='text'
              name='lastname'
              placeholder='Last Name'
              required
            />
          </div>
        </div>
        <label htmlFor='email'>Email *</label>
        <input
          type='email'
          name='email'
          placeholder='Email'
          required
        />
        <label htmlFor='phone'>Phone Number</label>
        <input
          type='tel'
          name='phone'
          placeholder='Phone Number'
        />
        <label htmlFor='subject'>Event Name *</label>
        <input
          type='text'
          name='subject'
          placeholder='Name of your event'
          required
        />
        <label htmlFor='date'>Event Date and Time *</label>
        <input
          type='datetime-local'
          name='date'
          required
        />
        <label htmlFor='address'>Event Address *</label>
        <input
          type='text'
          name='address'
          placeholder='Event Address'
          required
        />

        <label htmlFor='eventtype'>Event Type *</label>
        <select name='eventtype' value={eventOption} required onChange={(e) => setEventOption(e.target.value)}>
          {eventOptions.map((option) => (
            <option key={option.value} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>

        {
          eventOption &&
          eventOption !== 'Select an Event Type' &&
          eventOption !== 'Other' &&
          <Package packages={eventPackages[eventOption]} />
        }

        {
          eventOption &&
          eventOption !== 'Select an Event Type' &&
          eventOption !== 'Wedding' &&
          (
            <div className='booking__form-addons'>
              <h4>Select Add-ons</h4>
              <div className='booking__form-addons_container'>
                {
                  eventAddons.map((addon) => (
                    <div>
                      <input
                        type='checkbox'
                        id={addon.value}
                        name={addon.value}
                        value={addon.label}
                      />
                      <label htmlFor={addon.value}>{addon.label}</label>
                    </div>
                  ))
                }
              </div>
            </div>
          )
        }

        <label htmlFor='message'>Additional Information</label>
        <textarea
          name='message'
          placeholder="Message"
          rows='3'
        />

        <div className='booking__form-submit'>
          <input className='booking__form-button' type="submit" value="Submit" />
            {showStatus && (
              emailSent ?
              <p className='booking__form-submit_success'>Email sent successfully!</p> : 
              <p className='booking__form-submit_fail'>Email failed.</p>
            )}
        </div>
      </form>
    </section>
  )
};

export default BookingForm;