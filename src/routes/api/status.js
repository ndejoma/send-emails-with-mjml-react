import { Router } from 'express';

const statusApiRouter = Router();

statusApiRouter.get('', (req, res) => {
    return res.status(200).send({
        message: 'The API is online',
    });
});

export default statusApiRouter;
