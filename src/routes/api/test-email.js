import getEmailHtml from '@/lib/getEmailHtml';
import sendEmail from '@/lib/sendEmail';
import isValidEmail from '@/utils/isValidEmail';
import { Router } from 'express';

const testEmailRouter = Router();

testEmailRouter.post('', async (req, res) => {
    const { email, userName, linkToSend } = req.body;
    if (isValidEmail(email)) {
        try {
            //generate the html of the email to send
            const activateAccountHtml = await getEmailHtml({
                type: 'activate',
                linkToSend,
                userName,
            });

            //after generating the email send it to the user
            try {
                const resEmailSend = await sendEmail({
                    recepientEmail: email,
                    html: activateAccountHtml,
                    subject: 'Activate your account',
                });

                return res.status(200).send({
                    message: 'The test email route is working okay',
                    data: resEmailSend,
                });
            } catch (err) {
                return res.status(500).send({
                    message: 'There was a problem while sending the emails',
                });
            }
        } catch (err) {
            return res.status(500).send({
                message: 'There was a problem while generating the html',
            });
        }
    } else {
        return res.status(422).send({
            message: 'The email provided is invalid',
        });
    }
});

export default testEmailRouter;
