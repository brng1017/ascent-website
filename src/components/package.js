import React from 'react';

import '../styles/package.css';

const Package = ({ packages }) => {
  return (
    <div className='package'>
      {
        packages.length > 1 ? (
          <div className='package__multi'>
            <h4>Select a Package: *</h4>
            <div className='package__multi-container'>
              {
                packages.map((pack, index) => (
                  <div className='package__multi-radio'>
                    <input type='radio'
                      id={'package' + (index + 1)}
                      className='package__multi-radio_input'
                      name='package'
                      value={'Package ' + (index + 1)}
                      required
                    />
                    <label htmlFor={'package' + (index + 1)}>
                      <h4>Package {index + 1}</h4>
                      <ul>
                      {
                        pack.map((content) => (
                          <li>{content}</li>
                        ))
                      }
                      </ul>
                    </label>
                  </div>
                ))
              }
            </div>
          </div>
        ) : (
          <div className='package__single'>
            <h4>Package Contents</h4>
            <ul>
              {
                packages[0].map((content) => (
                  <li>{content}</li>
                ))
              }
            </ul>
          </div>
        )
      }
    </div>
  )
};

export default Package;