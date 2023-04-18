import React from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Image1 from '../images/Image1.jpg';
import Image2 from '../images/Image2.jpg';
import Image3 from '../images/Image3.jpg';
import Image4 from '../images/Image4.avif';
import Image5 from '../images/Image5.jpg';


const styles = {
    text: {
        textAlign: "center",
    },
}


function Portfolio() {

    return (
        <>
            <Container className="Portfolio">
                <Row>
                    <Col>
                        <h1>Portfolio</h1>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={Image1} />
                            <Card.Body>
                                <Card.Title style={styles.text}>Project 1</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                                </Card.Text>
                                <Button variant="primary" href="https://github.com/Vinni99">View</Button>
                                <Button variant="primary" href="https://github.com/Vinni99">Github</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <br></br>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={Image2} />
                            <Card.Body>
                                <Card.Title style={styles.text}>Project 2</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                                </Card.Text>
                                <Button variant="primary" href="https://github.com/Vinni99">View</Button>
                                <Button variant="primary" href="https://github.com/Vinni99">Github</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <br></br>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={Image3} />
                            <Card.Body>
                                <Card.Title style={styles.text}>Project 3</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                                </Card.Text>
                                <Button variant="primary" href="https://github.com/Vinni99">View</Button>
                                <Button variant="primary" href="https://github.com/Vinni99">Github</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <hr />
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={Image4} />
                            <Card.Body>
                                <Card.Title style={styles.text}>Project 4</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                                </Card.Text>
                                <Button variant="primary" href="https://github.com/Vinni99">View</Button>
                                <Button variant="primary" href="https://github.com/Vinni99">Github</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <br></br>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={Image5} />
                            <Card.Body>
                                <Card.Title style={styles.text}>Project 5</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                                </Card.Text>
                                <Button variant="primary" href="https://github.com/Vinni99">View</Button>
                                <Button variant="primary" href="https://github.com/Vinni99">Github</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Portfolio;