import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import ActionButton from 'components/common/ActionButton/ActionButton';
import { H1 } from 'assets/styles';

export const Subtitle = styled.small`
    color: #818797;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
`;

const Header = styled.div`
    border-bottom: 1px solid #EEEEEE;
    padding: 20px;
`;

const Policy = styled.div`
    margin-top: 30px;
    white-space: pre-line;
    margin-bottom: 36px;
`;

export default function PetPolicy (props) {
    return (
        <div>
            <Header>
                <H1>Pet Policy</H1>
                <br/>
                {!!props.date && <Subtitle>Last Updated {props.date}</Subtitle>}
            </Header>
            <Policy>
                {props.policy}
            </Policy>
            <ActionButton onClick={props.onAgree}>Got It</ActionButton>
        </div>
    );
}

PetPolicy.propTypes = {
    date: PropTypes.string,
    policy: PropTypes.string,
    onAgree: PropTypes.func.isRequired
};