import React, { useState } from 'react'; 
import ReviewPopup from './CurrentReviews';
import plus_sign from '../assets/images/square-plus-solid.svg';
import './Reviews.css'

export const AddReviewButton = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const handleClick = () => {
  setIsButtonClicked(!isButtonClicked);
  };
  return (
    <div>
      <button onClick={handleClick} style={{
        backgroundColor: '#fc6262',
        fontSize: 15, 
        borderRadius: 30, 
        padding: 15, 
        border: 0,
        }}>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <img src={plus_sign} alt='plus sign' style={{ height: 25, width: 25, marginRight: 5}}/>
          <div style={{
            fontFamily: 'Faculty Glyphic',
            fontWeight: 600,
            color: '#011a18',
            fontStyle: 'normal',
            alignContent: 'center',
            }}>Add a new review!</div>
          </div>
      </button>
      {isButtonClicked && 
        <ReviewPopup/> 
      }
    </div>
  );
};

export default AddReviewButton;