import { MjmlSection, MjmlColumn, MjmlText } from 'mjml-react';
import Template from '@/emails/Template';
import ButtonWithLink from '@/emails/ButtonWithLink';

export default function ActivateAccountEmail({
    linkToSend = '',
    userName = '',
}) {
    return (
        <Template
            contentTitle='Activate Fictional your account'
            previewTitle='Activate your Fictional account'
        >
            <MjmlSection>
                <MjmlColumn
                    paddingBottom={50}
                    width={400}
                >
                    <MjmlText
                        paddingTop={50}
                        lineHeight='1.5'
                        align='center'
                        fontSize={24}
                        fontWeight={800}
                        paddingBottom={30}
                        color='#070729'
                    >
                        Hi, <strong>{userName},</strong> Welcome to
                        FictionalCompany
                    </MjmlText>
                    <ButtonWithLink href={linkToSend}>
                        Activate Account
                    </ButtonWithLink>
                    <MjmlText
                        paddingTop={30}
                        align='center'
                        color='#070729'
                    >
                        ( We are just confirming it&apos;s you )
                    </MjmlText>
                </MjmlColumn>
            </MjmlSection>
        </Template>
    );
}
