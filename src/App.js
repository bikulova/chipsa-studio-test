import './Styles/App.scss';
import Wrapper from './Components/Globals/Wrapper';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

if (ScrollTrigger.isTouch !== 1) {

  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.5,
    speed: 3,
    effects: true,
  });

  gsap.fromTo('.main-header', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.main-header',
			start: 'center',
			end: '850',
			scrub: true
		}
	})

  let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true
			}
		})
	})

	let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: 'top',
				scrub: true
			}
		})
	})
}

function App() {
  return (
    <div className="App">
     <Wrapper/>
    </div>
  );
}

export default App;
