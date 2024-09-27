import React from 'react';
import { Col, Container, Row, Nav,  Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import img_spring from "../assets/img/img_spring.webp";
import vuejs_logo from "../assets/img/vuejs_logo.svg";
import Ionic_Logo from "../assets/img/Ionic_Logo.svg";
import logo_flutter from "../assets/img/logo_flutter.svg";
import react_logo from "../assets/img/react_logo.png";

const Projects = () => {
    const projects = [
        {
            tittle: 'Project 1',
            description: 'Description 1',
            imUrl: img_spring
        },
        {
            name: 'Project 2',
            description: 'Description 2',
            imUrl: vuejs_logo
        },
        {
            name: 'Project 3',
            description: 'Description 3',
            imUrl: Ionic_Logo
        },
        {
            name: 'Project 4',
            description: 'Description 4',
            imUrl: logo_flutter
        },
        {
            name: 'Project 5',
            description: 'Description 5',
            imUrl: react_logo
        }
    ]
    return(
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col>
                        <h2>Frameworks</h2>
                        <p>Platforms I work with</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id='pills-tab'>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Active</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Option 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                    Disabled
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return(
                                                    <ProjectCard key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <p>Option 2</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <p>Disabled</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} alt='color-sharp' />
        </section>
  );
}

export default Projects;