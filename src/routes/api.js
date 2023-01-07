/** @format */
import express from 'express';
import Cors from 'cors';
import testApiRouter from '@/routes/api/test';
import statusApiRouter from '@/routes/api/status';
import sendEmailRouter from '@/routes/api/send-email';
import testEmailRouter from '@/routes/api/test-email';

//create a router object
//NOTE the default path is /api/:path for this  app
const apiRouter = express.Router();

//parse the body to JSON using the express.json middleware function
apiRouter.use(express.json());

//the /api/status route
apiRouter.use('/status', statusApiRouter);

//the /api/test api route
apiRouter.use('/test', testApiRouter);

//maps to the /api/send-email route
apiRouter.use('/send-email', sendEmailRouter);

//maps to the /api/test-email
apiRouter.use('/test-email', testEmailRouter);

/***
 * if you are calling the API from your frontend code
 *  whitelist your domain and local testing origin
 *  eg https://mydomain.com without the port
 *  Also http://mydomain.com without the port should be added
 */
const whitelist = [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3002',
    'http://localhost:3003',
    'https://mydomain.com',
];

const corsOptions = {
    origin: (origin, callback) => {
        //the !origin check prevents blocking of Rest API clients such as Thunder Client or Postman
        if (whitelist.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Failed to CORS policy'));
        }
    },
};

//allow requests from localhost, mydomain.com and Rest clients only
apiRouter.use(Cors(corsOptions));

export default apiRouter;
