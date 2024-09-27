import React from 'react';
import { useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import headerImg from '../assets/img/header-img.svg';
import cvFile from '../assets/documents/CV_Sergy.pdf';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeliting, setIsDeliting] = useState(false);
    const toRotate = ["Full Stack Developer", "React Developer", "SpringBoot Developer", "Mobile Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000; // 1.5 seconds
    useEffect(() => {
      let ticket = setInterval(() => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeliting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updateText);
        if (isDeliting) {
          setDelta(prevDelta => prevDelta / 2);
        } 
        if (!isDeliting && updateText === fullText) {
            setIsDeliting(true);
            setDelta(period);
        } else if (isDeliting && updateText === '') {
          setIsDeliting(false);
          setLoopNum(loopNum + 1);
          setDelta(500)
        }
      } , delta);
    
      return () => {
        clearInterval(ticket)
      }
    }, [text])
    
    return (
        <div>
            <section className='banner' id='home'>
                <Container>
                    <Row>
                        <Col xs= {12} md={6} xl={8}>
                            <div className='col-md-6'>
                                <h1>Hi, I am <span>Sergy</span></h1>
                                <p>{text}</p>
                                <p style={{ fontSize: '14px' }}>Developer specialized in mobile and backend solutions. I am currently expanding my skills in web development, exploring new technologies and frameworks. 
                                    With experience in Java, JavaScript, Flutter, VueJS, and more, I am dedicated to creating efficient, scalable, and user-friendly applications. My focus is on writing clean, optimized code, 
                                    utilizing design patterns that ensure project maintainability. I invite you to explore my portfolio and follow my journey in learning web development, where I strive to deliver innovative solutions to every challenge.</p>
                                {/* Botón para descargar el CV */}
          <a href={cvFile} download="CV_Sergio.pdf">
            <button className="btn btn-primary">
              <span>Download CV</span>
            </button>
          </a>
                            </div>
                            <div className='col-md-6'>
                                {/* <img src='' alt='' /> */}
                            </div>
                        </Col>
                        <Col xs= {12} md={6} xl={4}>
                            <img src={headerImg} alt='Header Img' />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default Banner;