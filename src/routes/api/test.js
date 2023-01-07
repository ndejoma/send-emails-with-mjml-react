/** @format */
import getEmailHtml from '@/lib/getEmailHtml';
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
        const html = getEmailHtml({
            type: 'activate',
            linkToSend: 'https://domaintoactivateaccout.com/confirm',
            userName: 'ndejoma',
        });
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
