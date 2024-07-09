import { Container, Row,} from "react-bootstrap";
import CheckGrey from '../assets/img/check-gray.svg';
import CheckPurple from '../assets/img/check-purple.svg';


export const Price = () => {
    return (
        <div id="pricing">
            <div className="w-100">
                <Container className="pricing">
                <Row className="header-box d-flex align-items-center">
                    <h1 className="mb-4">Easy Budget.</h1>
                    <p className="mb-5">
                    There are many variations of passages of <br></br> Lorem Ipsum available, but the majo.
                    </p>
                    </Row>
                </Container>
            </div>
        <div class="single-card">
            <Container>
            <div class="wrapper">
                <h3>Basic</h3>
                <h1>$50,000</h1>
                <p>Disarankan untuk baru yang memulai bisnis tahun ini</p>
                <ul>
                    <li>
                    <img src={CheckGrey} alt="grey-img" className="grey-image" />
                        <span>Live Support</span>
                    </li>
                    <li>
                         <img src={CheckGrey} alt="grey-img" className="grey-image" />
                        <span>10GB Storage</span>
                    </li>
                    <li>
                        <img src={CheckGrey} alt="grey-img" className="grey-image" />
                        <span>Basic Themes</span>
                    </li>
                </ul>
                <button>Start With This</button>
            </div>
            </Container>
        </div>

        <div class="single-card">
            <Container>
            <div class="wrapper popular">
                <h3>Most Popular</h3>
                <h1>$288,800</h1>
                <p>Cocok sekali untuk anda yang sedang membangun bisnis</p>
                <ul>
                    <li>
                    <img src={CheckPurple} alt="grey-img" className="grey-image" />
                        <span>Live Support</span>
                    </li>
                    <li>
                    <img src={CheckPurple} alt="grey-img" className="grey-image" />
                        <span>Unlimited Storage</span>
                    </li>
                    <li>
                    <img src={CheckPurple} alt="grey-img" className="grey-image" />
                        <span>Unlock 1K Themes</span>
                    </li>
                    <li>
                    <img src={CheckPurple} alt="grey-img" className="grey-image" />
                    <span>Server Optimized</span>
                    </li>
                    <li>
                    <img src={CheckPurple} alt="grey-img" className="grey-image" />
                    <span>All Basic Features</span>
                    </li>
                </ul>
                <button>Choose This Plan</button>
            </div>
            </Container>
        </div>
     </div>
    )
}