import React from "react";
import Info from '@material-ui/icons/Info';
import styled from '@emotion/styled';

import { CardRowBorderless, P, infoIconRoot } from 'assets/styles';
import PaidText from './PaidText';
import SimplePopover from 'components/common/SimplePopover';


const CardRowBorderlessPadded = styled(CardRowBorderless)`
    padding: 15px 0;
`

export const HoldingDeposit = ({
    holdingDepositCopy,
    holdingDepositPaid,
    formatCurrency,
    holdingDepositAmount
}) => {
    return <CardRowBorderlessPadded>
        <P>
        Holding Deposit
            {" "}
            <SimplePopover text={holdingDepositCopy}>
                <Info classes={{root: infoIconRoot}} style={{color: '#828796', width: 16}} />
            </SimplePopover>
        </P>
        <div>
            {holdingDepositPaid ? <PaidText /> : <P>{formatCurrency(holdingDepositAmount, 0)}</P>}
        </div>
    </CardRowBorderlessPadded>;
}

export default HoldingDeposit;