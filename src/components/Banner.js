import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/headerImg.png";
import { useEffect, useState } from "react";
//text with typing
export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    //arbitrarily indicates how much time typed out between one character
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length * 1);

        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
                isDeleting = false
                setLoopNum(loopNum + 1);
                setDelta(500);
            }
        }

        return (
            //html section tag, container from bootstrap
            <section className="banner" id="home">
                
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                        
                        <h1>{`Luna's Portfolio`}<span className="wrap">{text}</span></h1>
                        <p>A Computer Science and Cognitive Science major from University of Pennsylvania -o-</p>
                        
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={headerImg} alt="Header Img" style={{width:'200px', height:'auto'}}/>
                        </Col>
    
                    </Row>
                </Container>
            </section>
        )
    }
    
