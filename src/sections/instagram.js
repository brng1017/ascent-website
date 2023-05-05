import React, { useState, useEffect, useRef } from 'react';
import { srConfig } from '../config';
import sr from '../utils/sr';

import fetchInstagramPosts from '../utils/api/instagram';
import '../styles/instagram.css';

const Instagram = () => {
  const [photos, setPhotos] = useState([]);
  const revealTitle = useRef(null);
  const revealPhotos = useRef([]);

  useEffect(() => {
    const getPhotos = async () => {
      const data = await fetchInstagramPosts();
      setPhotos(data);
    }
    getPhotos();
  }, []);
  
  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealPhotos.current, srConfig(100));
  }, []);

  return (
    <section className='instagram'>
      <h2 className='instagram__header' ref={revealTitle}>GALLERY</h2>

      <div className='instagram__photos' ref={revealPhotos}>
        {
          photos && photos.slice(0, 9).map(photo => (
            <a key={photo.id} href={photo.permalink} target='_blank' rel='noopener noreferrer'>
              <img src={photo.media_url} alt={photo.caption} />
            </a>
          ))
        }
      </div>

      <a className='instagram__link' href='https://www.instagram.com/ascent.ld/' target='_blank' rel='noopener noreferrer'>More...</a>
    </section>
  )
};

export default Instagram;