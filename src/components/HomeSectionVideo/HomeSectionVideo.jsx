import './HomeSectionVideo.css';
import adidasVid from '../../assets/AdidasShoeCommercial.mp4';

export default function HomeSectionVideo() {
  return (
    <div>
      <video className="video-background" autoPlay muted loop>
        <source src={adidasVid} type="video/mp4" />
      </video>  
      <div className="overlay">
        <div>
          <h1>Impossible Is Nothing</h1> 
          <h5>Explore the latest collections</h5> 
        </div>
        <div>
          <button>Shop Now</button> 
        </div>
      </div>
    </div>
  );
}
