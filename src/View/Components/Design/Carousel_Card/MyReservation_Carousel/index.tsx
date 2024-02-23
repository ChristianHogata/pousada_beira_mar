import { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import ControllerMyReservation from '../../../../../Controller/ControllerFindMyReservation';
import { useLogin } from '../../../Services/LoginProvider';
import ControllerCancelReservation from '../../../../../Controller/ControllerCancelReservation';
import { useNavigate } from 'react-router-dom';

const MyReservationTable = () => {
    const { loggedIn } = useLogin();
    const { onLoad, myReservationData } = ControllerMyReservation();
    const navigator = useNavigate();

    useEffect(() => {
        onLoad(loggedIn);
    }, []);

    const groupedData = [];
    if (myReservationData) {
        for (let i = 0; i < myReservationData.length; i += 3) {
            groupedData.push(myReservationData.slice(i, i + 3));
        }
    }

    const handleCancelReservation = async (id: string) => {
        try {
            await ControllerCancelReservation({ navigator, loggedIn }, id);
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <Carousel
            nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" style={{ backgroundColor: 'black', position: 'relative' }} />}
            prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" style={{ backgroundColor: 'black', position: 'relative' }} />}
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
                                            <Button variant="primary" value={item._id} onClick={() => handleCancelReservation(item._id)}>Cancelar</Button>                                    </div>
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

export default MyReservationTable;
