import { Container, Row, Col} from "react-bootstrap";
import HeroImage from '../assets/img/banner.png';
import Sponsor from '../assets/img/sponsor.png';


export const Banner = () => {
    return (
        <div className="homepage mt-4">
            <header className="w-100 min-vh-100 d-flex align-items-center">
                <Container>
                    <Row className="header-box d-flex align-items-center">
                    <Col className="lg-6">
                    <img src={HeroImage} alt="hero-img" className="banner-image" />
                    </Col>
                    <Col className="lg-6 text-start">
                    <h1 className="mb-1">Always Connected. <br></br>
                    No Lagging.</h1>
                    <p className="mb-4">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
                    </p>
                    <div class="button d-flex gap-2 d-md-flex justify-content-md-start">
                        <a href="#pricing"><button class="btn" type="button">See Pricing</button></a>
                        <button class="btn2" type="button">Testimonials</button>
                    </div>
                    </Col>
                    </Row>
                </Container>
            </header>
            <div className="w-100">
                <Container>
                <Row className="header-box d-flex align-items-center">
                    <Col className="lg-6">
                    <img src={Sponsor} alt="sponsor-img" className="sponsor-image" />
                    </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};


