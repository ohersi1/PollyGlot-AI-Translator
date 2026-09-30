import parrotImg from '../assets/parrot.png'
import './Hero.css'

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <img src={parrotImg} />
        <div className="title-and-subtitle">
          <p className="title">PollyGlot</p>
          <p className="sub-title">Perfect Translation Every Time</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
