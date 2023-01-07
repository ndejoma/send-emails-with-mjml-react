import { MjmlButton } from 'mjml-react';

export default function ButtonWithLink({ href = '', children }) {
    return (
        <>
            <MjmlButton
                borderRadius={4}
                fontWeight='600'
                innerPadding='16px 30px'
                fontSize={14}
                background-color='#6C2BD9'
                href={href}
            >
                {children}
            </MjmlButton>
            ;
        </>
    );
}
