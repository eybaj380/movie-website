import React, { useState } from 'react';
import '../App.css';
import './Reviews.css';
import profile_pic from '../assets/images/circle-user-solid.svg';

const CurrentReviews = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [formData, setFormData] = useState({userName: '', userReview: ''});
  const [reviewCards, setReviewCards] = useState([]);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const [userName, setUserName] = useState('');
  const handleUserName = (event) => {
    setUserName(event.target.value);
  };
  
  const [userReview, setUserReview] = useState('');
  const handleUserReview = (event) => {
    setUserReview(event.target.value);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowPopup(false);
    setFormData({userName: userName, userReview: userReview});
    setReviewCards([...reviewCards, formData]);
    setUserName('');
    setUserReview('');
  };

  const handleDelete = (cardToRemove) => {
    const updatedReviewCards = reviewCards.filter(reviewCard => reviewCard !== cardToRemove)
    if(reviewCards.length !== 0) {
      setReviewCards(updatedReviewCards);
    }
  };

  return (
    <div>
      {showPopup && (
        <ReviewPopup 
          userName={userName} 
          userReview={userReview} 
          togglePopup={togglePopup} 
          handleUserName={handleUserName} 
          handleUserReview={handleUserReview}
          handleSubmit={handleSubmit}
        />)}
      {formData && (
        <div className='Homepage-header'>
          <h1 className='Homepage-title'>User Reviews</h1>
        </div>
      )}
      <div className='Homepage-header'>
        {reviewCards.map((reviewCard, index) => (
          <ReviewCard 
            key={index} 
            reviewCard={reviewCard}
            formData={formData}
            handleDelete={handleDelete}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export const ReviewPopup = ({ 
  userName, 
  userReview, 
  togglePopup, 
  handleUserName, 
  handleUserReview, 
  handleSubmit 
  }) => {
  return (
    <div className='card-container'>
        <div className='card-content'>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <input 
              type='text' 
              value={'Movie'}
              placeholder='Enter movie/show title'
              className='card-content'
              style={{
                display: 'flex',
                textAlign: 'center',
                flexWrap: 'wrap',
                wordBreak: 'break-word',
                margin: 0, 
                border: 0, 
                maxHeight: 30,
                maxWidth: 395,
                backgroundColor: '#340b7a', 
                fontWeight: 'normal', 
                fontSize: 25, 
                marginBottom: 10,
              }}/>
            <button className='cancel-button' onClick={togglePopup}>Cancel</button>
            </div>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
            <img src={profile_pic} alt='' style={{height: 35, width: 35, marginRight: 10}}/>
            <input 
              type='text'
              value={userName}
              placeholder='Enter username'
              onChange={handleUserName}
              className='card-content'
              style={{
                display: 'flex',
                margin: 0, 
                border: 0, 
                maxHeight: 30,
                maxWidth: 395,
                backgroundColor: '#340b7a', 
                fontWeight: 'normal', 
                fontSize: 25, 
                marginBottom: 10,
              }}/>
          </div>
          <textarea 
              type='text'
              value={userReview}
              placeholder='Enter your review'
              onChange={handleUserReview}
              className='card-content'
              style={{
                display: 'flex',
                margin: 0, 
                border: 0, 
                width: 395,
                height: 140,
                backgroundColor: '#340b7a', 
                fontWeight: 'normal', 
                fontSize: 15, 
                marginBottom: 10,
              }}/>
          <button className='submit-button' onClick={handleSubmit}>
            <div className='submit-button-text'>Submit review!</div>
          </button>
        </div>
      </div>
  );
};

const ReviewCard = ({ formData, handleDelete, reviewCard }) => {
  return (
    <div className='review-card'>
      <div className='review-text'>{`User: ${formData.userName}`}</div>
      <div className='review-text'>{`Review: ${formData.userReview}`}</div>
      <div>
        <button className='delete-button' onClick={() => handleDelete(reviewCard)}>
          <div className='delete-button-text'>Delete</div>
        </button>
      </div>
    </div>
  );
}

export default CurrentReviews;