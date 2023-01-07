import React from 'react';
import {
    Mjml,
    MjmlHead,
    MjmlTitle,
    MjmlPreview,
    MjmlBody,
    MjmlSection,
    MjmlColumn,
    MjmlText,
    MjmlDivider,
} from 'mjml-react';
import getCurrentYear from '@/utils/getCurrentYear';

const Template = ({ children, contentTitle = '', previewTitle = '' }) => {
    return (
        <Mjml>
            <MjmlHead>
                <MjmlTitle>{contentTitle}</MjmlTitle>
                <MjmlPreview>{previewTitle}</MjmlPreview>
            </MjmlHead>
            <MjmlBody width={500}>
                {children}
                <MjmlSection>
                    <MjmlColumn width={400}>
                        <MjmlDivider
                            borderWidth={2}
                            borderColor='grey'
                        ></MjmlDivider>
                        <MjmlText
                            align='center'
                            color='#070729'
                        >
                            FictionalCompany &copy;{getCurrentYear()}, Some
                            rights reserved.
                        </MjmlText>
                        <MjmlText
                            align='center'
                            color='grey'
                        >
                            <a
                                target='_blank'
                                rel='noreferrer noopener'
                                style={{
                                    marginRight: '10px',
                                    color: '#0ea5e9',
                                }}
                                href='https://fictionalcompany.com/privacy-policy'
                            >
                                Privacy policy
                            </a>
                            <a
                                target='_blank'
                                rel='noreferrer noopener'
                                style={{ color: '#0ea5e9' }}
                                href='https://fictionalcompany/tos'
                            >
                                Terms of service
                            </a>
                        </MjmlText>
                    </MjmlColumn>
                </MjmlSection>
            </MjmlBody>
        </Mjml>
    );
};

export default Template;
