import MainImage from '../../Assets/img/hero.png';


export default function Header() {
    return (
        <div className = "hero-section">
          <img data-speed='.6' className="hero" src={MainImage} alt="" />          
        </div>
    )
}