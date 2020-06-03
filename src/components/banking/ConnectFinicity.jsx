import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { css } from 'emotion';
// import { Link } from 'react-router-dom';

import GreenCheckIcon from 'components/common/GreenCheckIcon';
import safeImage from 'assets/images/connect-bank/safe.png';
import padlockImage from 'assets/images/connect-bank/padlock.png';
import ActionButton from 'components/common/ActionButton/ActionButton';
import { H1, H3, P, Bold } from 'assets/styles';
// import { ROUTES } from 'app/constants';
import GenericFormMessage from 'components/common/GenericFormMessage';
import ManualIncomeVerificationPage from 'components/banking/ManualIncomeVerificationPage';

const SpacedH3 = styled(H3)`
    margin: 20px 5% 25px 5%;
`

const bodyContainer = css`
    margin: 40px 10px 40px 30px;
    text-align: left;
    display: flex;
    flex-direction: column;
    p{ margin-left: 15px;}
`

const bodyRow = css`
    display: flex;
    :first-of-type{margin-bottom: 20px;}
`

const ConnectFinicity = props => {
    const [screen, setScreen] = React.useState();
    if (screen == 'manual') {
        return <ManualIncomeVerificationPage {...props} goBack={()=>setScreen('')} />
    }
    return (
        <Fragment>
            <H1>Verify Your Income Instantly</H1>
            <SpacedH3>Confirm that you qualify for this apartment by linking your bank account.</SpacedH3>
            <img src={safeImage} alt="vault"/>
            <div className={bodyContainer}>
                <div className={bodyRow}>
                    <img src={padlockImage} alt="padlock" width="18" height="28"/>
                    <P><Bold>Your data is safe.</Bold> Bank level encryption is used to connect and your credentials are never stored.</P>
                </div>
                <div className={bodyRow}>
                    <GreenCheckIcon/>
                    <P><Bold>Your money is safe.</Bold> This does not authorize any transactions from your account.</P>
                </div>
            </div>
            {!!props.errors && <GenericFormMessage type="error" messages={props.errors}/>}
            <ActionButton disabled={props.loadingFinicityIframe} onClick={props.openFinicityIframe} marginBottom={20}>
                Link Bank Account
            </ActionButton>
            <ActionButton variant="outlined" marginBottom={20} onClick={()=>setScreen('manual')}>
                Manually verify
            </ActionButton>
            {/* removing for now  <Link to={ROUTES.MANUAL_INCOME_ENTRY} className={blackLinkRoot}>Don't Want to Link?</Link> */}
        </Fragment>
    );
}

export default ConnectFinicity;
