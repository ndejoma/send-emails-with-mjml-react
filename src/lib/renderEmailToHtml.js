import { render } from 'mjml-react';

export default function renderEmailToHtml(
    EmailComponent,
    validationLevel = 'soft'
) {
    if (EmailComponent) {
        const { html, errors } = render(EmailComponent, {
            validationLevel,
        });
        return { html, errors };
    } else {
        throw new Error('An React email component was not provided');
    }
}
