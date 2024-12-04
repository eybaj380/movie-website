import movie_poster1 from '../assets/images/movie_poster1.jpg';
import movie_poster2 from '../assets/images/movie_poster2.webp';
import movie_poster3 from '../assets/images/movie_poster3.jpg';
import movie_poster4 from '../assets/images/movie_poster4.png';
import movie_poster5 from '../assets/images/movie_poster5.jpg';
import movie_poster6 from '../assets/images/movie_poster6.jpg';
import movie_poster7 from '../assets/images/movie_poster7.jpg';
import movie_poster8 from '../assets/images/movie_poster8.jpg';
import movie_poster9 from '../assets/images/movie_poster9.webp';
import movie_poster10 from '../assets/images/movie_poster10.jpg';
import tv_show_poster1 from '../assets/images/tv_show_poster1.jpg';
import tv_show_poster2 from '../assets/images/tv_show_poster2.jpg';
import tv_show_poster3 from '../assets/images/tv_show_poster3.webp';
import tv_show_poster4 from '../assets/images/tv_show_poster4.webp';
import './ImageGallery.css';

const ImageGallery = () => {
  return (
    <div style={{ paddingLeft: 15, paddingRight: 15}}>
      <div className='container'>
        <h1 className='title'>Currently available Movies & Shows...</h1>
        <img className='item' style={{paddingLeft: 50}} src={movie_poster1} alt='movie poster 1'/>
        <img className='item' src={movie_poster2} alt='movie poster 2'/>
        <img className='item' src={movie_poster3} alt='movie poster 3'/>
        <img className='item' src={movie_poster4} alt='movie poster 4'/>
        <img className='item' src={movie_poster5} alt='movie poster 5'/>
        <img className='item' src={movie_poster6} alt='movie poster 6'/>
        <img className='item' src={movie_poster7} alt='movie poster 7'/>
        <img className='item' src={movie_poster8} alt='movie poster 8'/>
        <img className='item' src={movie_poster9} alt='movie poster 9'/>
        <img className='item' src={movie_poster10} alt='movie poster 10'/>
        <img className='item' src={tv_show_poster1} alt='tv show poster 1'/>
        <img className='item' src={tv_show_poster2} alt='tv show poster 2'/>
        <img className='item' src={tv_show_poster3} alt='tv show poster 3'/>
        <img className='item' style={{paddingRight: 50}} src={tv_show_poster4} alt='tv show poster 4'/>
      </div>
    </div>
  );
};

export default ImageGallery;