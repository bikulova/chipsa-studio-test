import WorkThree from "../Assets/img/work/3.jpg";
import WorkFour from "../Assets/img/work/4.jpg";
import WorkFive from "../Assets/img/work/5.jpg";


export default function GalleryRight() {
    return (
        <div data-speed="1.1" className = "gallery__right">
            <div className="text-block gallery__item">
                <h2 className="text-block__h">Creative floating scroll with amazing parallax effect</h2>
                <p className="text-block__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>

            <img className="gallery__item" src={WorkThree} alt="" />
            <img className="gallery__item" src={WorkFour} alt="" />
            <img className="gallery__item" src={WorkFive} alt="" />
        </div>
    )
}