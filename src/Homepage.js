import React from 'react';
import './App.css';
import './image_gallery/ImageGallery.css';
import Header from './Header.js';
import ImageGallery from './image_gallery/ImageGallery.js';
import { AddReviewButton } from './reviews/AddReviewButton.js';

const Homepage = () => {
  return (
    <div className='App'>
      <Header/>
      <ImageGallery/>
      <div style={{paddingTop: 15, paddingLeft: 15}}>
        <AddReviewButton />
      </div>
    </div>
  );
};

export default Homepage;
