import { Router } from 'express';

const sendEmailRouter = Router();

sendEmailRouter.post('', (req, res) => {
    return res.status(200).send({
        message: 'An email was sent',
    });
});

export default sendEmailRouter;
