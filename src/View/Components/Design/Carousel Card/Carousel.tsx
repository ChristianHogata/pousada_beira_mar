import React from 'react';
import { Carousel } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import MyModal from '../Modal/Index';
import { useLocation } from "react-router-dom";

const CarouselCards = ()=>{
    
    const [show, setShow] = React.useState(false);
    const [currentId, setCurrentId] = React.useState<string | undefined>(undefined);
    const handleClose = () => setShow(false);
    const handleShow = (id: string) => {
        setCurrentId(id);
        setShow(true);
    };
    const location = useLocation();
    const data = location.state.data;

    // Agrupa os dados em grupos de 3
    const groupedData = [];
    for (let i = 0; i < data.length; i += 3) {
        groupedData.push(data.slice(i, i + 3));
    }
    
    return (
        <Carousel
            nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" style={{ backgroundColor: 'black', position: 'relative'}} />}
            prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" style={{ backgroundColor: 'black', position: 'relative'}} />}
        >
            {groupedData.map((group, i) => (
                <Carousel.Item key={i}>
                    <Row>
                        {group.map((item: any, j: any) => (
                            <Col sm={4} key={j}>
                                <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Title>{item.roomsName}</Card.Title>
                                    <Card.Text>
                                    {item.description}
                                    </Card.Text>
                                    
                                    <div className="d-flex justify-content-center">
                                        <Button variant="primary" onClick={() => handleShow(item._id)}>Reservar</Button>
                                    </div>
                                    <MyModal show={show} handleClose={handleClose} idRoom={currentId}/>
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
