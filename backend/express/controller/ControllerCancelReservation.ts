import { Request, Response, NextFunction } from 'express';
import modelReservation from '../model/model.Reservation';

const ControllerCancelReservation = (router: any)=>{

    router.put('/myReservation/cancel', async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {idRoom} = req.query;

            const updatedRoom = await modelReservation.findOneAndUpdate(
                { _id: idRoom }, 
                {$set: { 
                    user: null,
                    initReservationDate: null,
                    endReservationDate: null
                }}, 
                { new: true }
            );
    
        res.sendStatus(200);

        } 
        catch (error) {
            res.sendStatus(500); 
        }
    });

    return router;
}

export default ControllerCancelReservation;

