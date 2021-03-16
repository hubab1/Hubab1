import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from 'emotion';

import { DOCUMENT_TYPE_HOLDING_DEPOSIT } from 'constants/constants';
import API from 'api/api';

import ActionButton from 'common-components/ActionButton/ActionButton';
import GenericFormMessage from 'common-components/GenericFormMessage/GenericFormMessage';
import { H1, SpacedH3, Spacer } from 'assets/styles';
import contract from 'assets/images/contract.svg';

export const Img = styled.img`
    padding-top: 14px;
    height: 157px;
`;

export const applicationUnit = css`
    color: #454b57;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    padding-top: 10px;
`;

export const HoldingDepositAgreementConfirmation = ({ profile, configuration, handleContinue }) => {
    const [url, setUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [retried, setRetried] = useState(false);

    const fetchLeaseDocumentUrl = async () => {
        setLoading(true);
        const response = await API.leaseDocumentUrl(profile.id, DOCUMENT_TYPE_HOLDING_DEPOSIT);
        setUrl(response ? response.url : undefined);
        setError(response.url ? undefined : 'Holding Deposit Agreement is still processing. Please try again later.');
        setLoading(false);
    };

    useEffect(() => {
        fetchLeaseDocumentUrl();
    }, []);

    const onClick = () => {
        if (!url) {
            setRetried(true);
            fetchLeaseDocumentUrl();
        }
    };

    const getButtonText = () => {
        if (loading) {
            return 'Loading...';
        }
        if (url) {
            return 'Review Holding Deposit Agreement';
        }
        return 'Retrieve Holding Deposit Agreement...';
    };

    if (!profile || !configuration) return null;

    const { unit } = profile;
    const buildingName = configuration.community.building_name || configuration.community.normalized_street_address;
    const unitNumber = !!unit && !!unit.unit_number ? ` Unit ${unit.unit_number}` : '';

    return (
        <Fragment>
            <H1>Thanks for Signing!</H1>
            <SpacedH3>We&apos;ll send you an email with a copy of the signed agreement.</SpacedH3>
            <Img src={contract} />
            <div className={applicationUnit}>
                {buildingName}
                {unitNumber}
            </div>
            <Spacer height={40} />
            {retried && !!error && <GenericFormMessage type="error" messages={error} />}
            <ActionButton onClick={handleContinue} marginTop={30} marginBottom={20}>
                Continue
            </ActionButton>
            <ActionButton
                disabled={loading}
                onClick={url ? undefined : onClick}
                href={url}
                variant="outlined"
                marginBottom={20}
            >
                {getButtonText()}
            </ActionButton>
        </Fragment>
    );
};

HoldingDepositAgreementConfirmation.propTypes = {
    profile: PropTypes.object,
    configuration: PropTypes.object,
    handleContinue: PropTypes.func,
};

export default HoldingDepositAgreementConfirmation;
