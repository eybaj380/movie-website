import fresh_pics_logo from './assets/images/fresh_pics_logo.png';

const Header = () => {
  return (
    <div className="Homepage-header">
      <div className='Homepage-text-and-logo'>
        <h1 className='Homepage-title'>Fresh Pics!</h1>
        <img className='Homepage-logo' src={fresh_pics_logo} alt='fresh pics logo' />
      </div>
      <p className='Homepage-description'>
        This website will give you the chance to leave reviews on TV shows and movies so that you can keep track of what you've watched and compare your thoughts with other users!  
      </p>
    </div>
  );
};

export default Header;