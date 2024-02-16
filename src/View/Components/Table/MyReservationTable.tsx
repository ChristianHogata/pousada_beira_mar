import { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import ControllerMyReservation from '../../../Controller/ControllerMyReservation';
import { useLogin } from '../../../LoginProvider';
import ControllerCancelReservation from '../../../Controller/ControllerCancelReservation';

const MyReservationTable = ()=>{
    const [dataLoaded, setDataLoaded] = useState(false);
    const { loggedIn } = useLogin();

    useEffect( () => {
        ControllerMyReservation(loggedIn).then(() => {
            setDataLoaded(true);
        });
    }, []);

    if (!dataLoaded) {
        return <div>Carregando...</div>; // ou qualquer outro componente de carregamento que você preferir
    }

    let myReservation = localStorage.getItem('myReservationData'); 

    if(myReservation !== null){
        var myReservationData = JSON.parse(myReservation);  
    } 
   
    const groupedData = [];
    for (let i = 0; i < myReservationData.length; i += 3) {
        groupedData.push(myReservationData.slice(i, i + 3));
    }

    const handleCancelReservation = async (id: string) => {
        try {
            await ControllerCancelReservation(id);
            window.location.reload();
        } catch (error) {
            console.error(error);
        }          
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
