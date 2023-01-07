import ActivateAccountEmail from '@/emails/ActivateAccountEmail';
import renderEmailToHtml from '@/lib/renderEmailToHtml';

//add other email you would like to generate here
const emailToRenderMap = {
    activate: ActivateAccountEmail,
};

export default async function getEmailHtml({ type = '', ...props }) {
    try {
        const EmailToRender = emailToRenderMap[type];
        const { html, errors } = renderEmailToHtml(
            <EmailToRender {...props} />
        );
        if (html) {
            return html;
        }
        //throw the errors for debugging purpose
        if (errors) {
            throw errors;
        }
    } catch (err) {
        throw err;
    }
}
