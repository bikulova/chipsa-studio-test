import WorkOne from "../Assets/img/work/1.jpg";
import WorkTwo from "../Assets/img/work/2.jpg";
import WorkSix from "../Assets/img/work/6.jpg";

export default function GalleryLeft() {
    return (
        <div data-speed=".9" className = "gallery__left">
            <img className="gallery__item" src={WorkOne} alt="" />
            <img className="gallery__item" src={WorkTwo} alt="" />

            <div className="text-block gallery__item">
                <h2 className="text-block__h">Creative floating scroll with amazing parallax effect</h2>
                <p className="text-block__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>

            <img className="gallery__item" src={WorkSix} alt="" />
        </div>
    )
}