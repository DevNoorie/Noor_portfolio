import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
// import '../components/back.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <p className="text-white  font-bold text-6xl ">Made with ❤️ </p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/Muhammad Noor-303330247/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://web.facebook.com/Muhammad Noor.900">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://github.com/Muhammad Noor">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
