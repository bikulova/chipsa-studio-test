import Container from './Container';
import Header from './Header';
import Portfolio from './Portfolio';

export default function Wrapper() {
    return (
        <div className = "wrapper">
            <div className="content">
            <Header />
            <Container />
            <Portfolio/>
            </div>
        </div>
    )
}