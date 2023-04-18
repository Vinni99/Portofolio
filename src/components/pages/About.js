import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Profile from '../images/Profile.pic.png';



function About() {
    
        return (
            <>
             <Container className="my-5">
      <Row>
        <Col md={6}>
          <h1>About Me</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis neque quis ipsum laoreet commodo.</p>
          <p>Phasellus commodo, purus quis consectetur rhoncus, nibh nibh malesuada nibh, vel posuere odio nibh eu justo.</p>
          <p>Mauris egestas lorem eu leo interdum, id sollicitudin lectus malesuada. Vivamus eleifend tortor turpis, eget commodo libero posuere at.</p>
        </Col>
        <Col md={6}>
          <img src={Profile} alt="About me" className="img-fluid" />
        </Col>
      </Row>
    </Container>
            </>
        )
    }

export default About;