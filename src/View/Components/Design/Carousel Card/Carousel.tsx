import React from 'react';
import { Carousel } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import logo from '../../../../quarto1.jpg';
import MyModal from '../Modal/Index';

const CarouselCards: React.FC<{}> = (props)=>{
    
    const cards = Array.from({ length: 4 }, (_, i) => i + 1);
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <Carousel
            nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" style={{ backgroundColor: 'black', position: 'relative'}} />}
            prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" style={{ backgroundColor: 'black', position: 'relative'}} />}
        >
            {cards.map((_, i) => i % 3 === 0 && (
                <Carousel.Item key={i}>
                    <Row>
                        {cards.slice(i, i + 3).map((card) => (
                        <Col sm={4} key={card}>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={logo} />
                            <Card.Body>
                                <Card.Title>Card Title {card}</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                
                                <div className="d-flex justify-content-center">
                                    <Button variant="primary" onClick={handleShow}>Reservar</Button>
                                </div>
                                <MyModal show={show} handleClose={handleClose} />
                            </Card.Body>
                            </Card>
                        </Col>
                        ))}
                    </Row>
                </Carousel.Item>
            ))}
        </Carousel>    
    );
}

export default CarouselCards;