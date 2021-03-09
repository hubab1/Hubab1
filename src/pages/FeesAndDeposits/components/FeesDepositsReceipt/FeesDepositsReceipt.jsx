import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { LINE_ITEM_TYPE_HOLDING_DEPOSIT } from 'constants/constants';
import { prettyCurrency } from 'utils/misc';

import ActionButton from 'common-components/ActionButton/ActionButton';
import { ApplicationFees } from 'pages/FeesAndDeposits/components/ApplicationFees/ApplicationFees';
import { HoldingDeposit } from 'pages/FeesAndDeposits/components/HoldingDeposit/HoldingDeposit';

import { Card, CardSection, CardRow, CardRowTotal, P, H1, SpacedH3 } from 'assets/styles';
import receiptImage from 'assets/images/receipt.png';

const SpacedH1 = styled(H1)`
    margin: 15px 10% 0 10%;
`;

const SpacedImg = styled.img`
    margin: 15px 0;
`;

export const FeesDepositsReceipt = ({ baseAppFee, handleContinue, everyone, email, receipt, paidByAnother }) => {
    if (!receipt) return <div />;
    const holdingDepositEntry = receipt.line_items.find(
        (item) => parseInt(item.type) === LINE_ITEM_TYPE_HOLDING_DEPOSIT
    );
    const holdingDepositAmount = !!holdingDepositEntry && holdingDepositEntry.amount ? holdingDepositEntry.amount : 0;

    const receiptPersonIds = new Set(receipt.line_items.map((item) => parseInt(item.applicant || item.invitee)));
    const applicationFeesPeople = everyone.filter((person) => !!receiptPersonIds.has(person.id));

    const totalApplicationFee = baseAppFee * applicationFeesPeople.length;

    const descriptionText = paidByAnother
        ? 'Your roommates have paid all the application fees!'
        : `Thank you! We emailed a receipt to ${email}`;
    return (
        <>
            <SpacedH1>Payment Successful!</SpacedH1>
            <SpacedH3>{descriptionText}</SpacedH3>
            <SpacedImg src={receiptImage} alt="receipt" />
            <Card>
                <CardSection>
                    <CardRow>
                        <P bold>Payment Summary</P>
                    </CardRow>
                    <ApplicationFees
                        totalApplicationFee={totalApplicationFee}
                        everyone={applicationFeesPeople}
                        baseAppFee={baseAppFee}
                        activeApplicantFeePaid={paidByAnother}
                    />
                    {!!holdingDepositAmount && (
                        <HoldingDeposit
                            holdingDepositAmount={prettyCurrency(holdingDepositAmount)}
                            holdingDepositPaid={paidByAnother}
                        />
                    )}
                    {!paidByAnother && (
                        <CardRowTotal>
                            <P bold>Total</P>
                            <div>
                                <P bold>{prettyCurrency(receipt.total)}</P>
                            </div>
                        </CardRowTotal>
                    )}
                </CardSection>
            </Card>
            <ActionButton onClick={handleContinue} marginTop={30} marginBottom={20}>
                Continue
            </ActionButton>
        </>
    );
};

FeesDepositsReceipt.propTypes = {
    baseAppFee: PropTypes.number,
    handleContinue: PropTypes.func,
    everyone: PropTypes.array,
    email: PropTypes.string,
    receipt: PropTypes.object,
    paidByAnother: PropTypes.bool,
};

export default FeesDepositsReceipt;
