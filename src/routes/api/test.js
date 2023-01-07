/** @format */
import { Router } from 'express';

const testApiRouter = Router();

/***
 *
 * This route is for testing purposes only
 * Test various implementations in the API
 *
 */
testApiRouter.post('', async (req, res) => {
    try {
        return res.status(200).send({
            message: 'The test was okay',
        });
    } catch (err) {
        return res.status(500).send({
            message: 'The test failed, there was an error',
        });
    }
});

export default testApiRouter;
