import myAxios from '@/lib/myAxios';

export default async function sendEmail({
    recepientEmail = '',
    html = '',
    subject = '',
}) {
    try {
        const { data } = await myAxios.post('/send-email', {
            recepientEmail,
            html,
            subject,
        });
        return data;
    } catch (err) {
        throw err;
    }
}
