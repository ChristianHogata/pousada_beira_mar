import { Request, Response, NextFunction } from 'express';
import modelReservation from '../model/model.Reservation';


const ControllerReservation = (router: any)=>{

    router.post('/reservation/success', async (req: Request, res: Response, next: NextFunction) => {
        try {
        const idRoom = req.body.idRoom;
        const loggedIn = req.body.loggedIn;
    
        const updatedRoom = await modelReservation.findOneAndUpdate(
            { _id: idRoom },
            {$set: { 
                user: loggedIn,
                initReservationDate: req.body.initDate,
                endReservationDate: req.body.finishDate
            }},
            { new: true } 
        );
    
        return res.status(200).send(idRoom);

        } 
        catch (error) {
        res.sendStatus(500);
        }
    });

    return router;
}

export default ControllerReservation;
