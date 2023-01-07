import isString from '@/utils/isString';
import isValidEmail from '@/utils/isValidEmail';
import { Router } from 'express';
import nodeMailer from 'nodemailer';

const sendEmailRouter = Router();

//create a node mailer transport object for sending emails with SMTP
//For testing emails in development I use mailtrap.io smtp credentials
//In Production you need SMTP credentials from a service like Mailjet or Mandrill or Sendgrid
const emailTransporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST_URL,
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
        user: process.env.SMTP_AUTH_USER,
        pass: process.env.SMTP_AUTH_PASS,
    },
});

sendEmailRouter.post('', async (req, res) => {
    const { recepientEmail = '', html = '', subject = '' } = req.body;
    if (isString(html) && isValidEmail(recepientEmail)) {
        try {
            const info = await emailTransporter.sendMail({
                from: {
                    name: 'Ndejoma',
                    address: 'me@ndejoma.com',
                },
                to: recepientEmail,
                subject,
                text: subject,
                html,
            });

            return res.status(200).send({
                message: 'The email was sent successfully',
                info,
            });
        } catch (err) {
            return res.status(500).send({
                message: 'There was problem while sending the emails',
            });
        }
    } else {
        return res.status(422).send({
            message: 'The data provided is invalid',
        });
    }
});

export default sendEmailRouter;
