import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from '../assets/img/linkedin.png';
import navIcon2 from '../assets/img/email.png';
import navIcon3 from '../assets/img/message.png';
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/luna-chen-9246501b0/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="mailto:tunamoon@seas.upenn.edu">
                <img src={navIcon2} alt="Email" />
              </a>
              <a href="sms:4087079803">
                <img src={navIcon3} alt="Text" />
              </a>
            </div>
            
          </Col>
        </Row>
      </Container>
    </footer>
  )
}