import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ROUTES } from 'app/constants';
import { H1, P, SpacedH3 } from 'assets/styles';
import captureRoute from 'app/captureRoute';

import { fetchPayments } from 'reducers/payments';
import { PaymentDetailsCard } from 'components/payment-details/PaymentDetailsCard';
import { PaymentTerms } from 'components/fees-deposits/PaymentTerms';
import { termsDiv, viewPaymentTerms } from './styles';

import { selectors } from 'reducers/renter-profile';

export const PaymentDetails = ({
    profile,
    configuration,
    fetchPayments,
    applicant,
    applicationFees,
    applicationFeesTotal,
}) => {
    const [currentPage, setCurrentPage] = useState('summary');
    useEffect(() => {
        fetchPayments();
    }, [fetchPayments]);

    if (!profile || !configuration || !profile.lease_start_date) {
        return null;
    }

    const unitNumber = profile.unit?.unit_number;
    const communityName = profile.community?.display_name;
    const leaseStartDate = profile.lease_start_date;
    const hasReceipt = applicant && applicant.receipt;
    const holdingDepositAmount =
        parseFloat(profile.selected_rental_options?.['holding-deposit']?.[0]?.quoted_deposit_amount) || 0;

    if (currentPage === 'terms') {
        return (
            <>
                <PaymentTerms
                    handleClickBack={() => setCurrentPage('summary')}
                    holdingDepositAmount={holdingDepositAmount}
                    unitNumber={unitNumber}
                    communityName={communityName}
                    leaseStartDate={leaseStartDate}
                    canProceedToPayment={false}
                />
            </>
        );
    } else {
        return (
            <>
                <H1>Payment Details</H1>
                <SpacedH3>Here’s the breakdown for unit {unitNumber}</SpacedH3>
                <PaymentDetailsCard fetchPayments={fetchPayments} profile={profile} applicationFees={applicationFees} />
                {hasReceipt && (
                    <div className={termsDiv}>
                        <P fontSize={14}>
                            <span role="button" onClick={() => setCurrentPage('terms')} className={viewPaymentTerms}>
                                Payment and Holding Deposit Terms
                            </span>
                        </P>
                    </div>
                )}
            </>
        );
    }
};

PaymentDetails.propTypes = {
    fetchPayments: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    applicant: PropTypes.object.isRequired,
    configuration: PropTypes.object.isRequired,
    applicationFees: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    applicationFees: selectors.applicationFees(state),
    profile: state.renterProfile,
    configuration: state.configuration,
    applicant: state.applicant,
});

export default connect(mapStateToProps, { fetchPayments })(captureRoute(PaymentDetails, ROUTES.PAYMENT_DETAILS));
