import React, { useReducer, useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ROUTES, APPLICANT_EVENTS, MILESTONE_FINANCIAL_STREAM_MISSING_DOCUMENTS_REQUESTED } from 'app/constants';
import API from 'app/api';
import reducer from 'components/banking/reducer';
import withRelativeRoutes from 'app/withRelativeRoutes';
import EditFinancialSource from 'components/banking/EditFinancialSource';
import RemoveFinancialSource from 'components/banking/RemoveFinancialSource';
import ConnectBankPage from 'components/banking/ConnectBankPage';
import IncomeVerificationSummaryPage from 'components/banking/IncomeVerificationSummaryPage';
import AddIncomeSource from 'components/banking/AddIncomeSource';
import AddAssetSource from 'components/banking/AddAssetSource';
import BankingContext from 'components/banking/BankingContext';
import EmployerDetails from 'components/banking/employer-details/EmployerDetails';
import { fetchRenterProfile } from 'reducers/renter-profile';

function BankingContainer({
    applicationEvents,
    history,
    _nextRoute,
    applicant,
    configuration,
    location,
    fetchRenterProfile,
}) {
    const [state, dispatch] = useReducer(reducer, {});

    const [routeSelected, setRouteSelected] = useState(false);

    const refreshFinancialSources = useCallback(async () => {
        const response = await API.getFinancialSources();
        if (response.status === 200) {
            const data = await response.json();
            dispatch({ type: 'BANKING_DATA_RECEIVED', data });
            return data;
        }
    }, []);

    const redirectToFirstPage = location?.state?.redirectToFirstPage;

    useEffect(() => {
        (async () => {
            const selectRoute = async (data) => {
                const pathname = window.location.pathname;
                if (
                    !pathname.endsWith(ROUTES.EMPLOYER_DETAILS) &&
                    !pathname.endsWith(ROUTES.INCOME_VERIFICATION_SUMMARY) &&
                    !pathname.endsWith(ROUTES.INCOME_AND_EMPLOYMENT)
                ) {
                    return;
                }

                // Needed for back links to redirect to the first / intro page, otherwise we would always land on summary.
                if (redirectToFirstPage) {
                    return;
                }

                const agentRequestedIncomeAssets = applicationEvents.find(
                    ({ event }) => event === MILESTONE_FINANCIAL_STREAM_MISSING_DOCUMENTS_REQUESTED
                );

                if (agentRequestedIncomeAssets) {
                    if (data?.income_sources?.length || data?.asset_sources?.length) {
                        history.push(ROUTES.INCOME_VERIFICATION_SUMMARY);
                        return;
                    }
                    return;
                }

                const applicantEnteredIncomeOrAssets =
                    data?.income_sources?.length || data?.asset_sources?.length || data?.reported_no_income_assets;

                if (!configuration.enable_automatic_income_verification) {
                    if (configuration.collect_employer_information) {
                        history.push(ROUTES.EMPLOYER_DETAILS);
                        return;
                    }
                }

                if (applicantEnteredIncomeOrAssets) {
                    const addedEmployerInfo = !!applicant.events.find(
                        (e) => String(e.event) === String(APPLICANT_EVENTS.EVENT_APPLICANT_UPDATED_EMPLOYER_INFO)
                    );

                    const reportedNoIncome = !!applicant.events.find(
                        (e) => String(e.event) === String(APPLICANT_EVENTS.EVENT_INCOME_REPORTED_NONE)
                    );

                    // This is needed when clicked on the Back button from the fees page
                    if (
                        window.location.pathname.includes(ROUTES.EMPLOYER_DETAILS) &&
                        configuration.collect_employer_information
                    ) {
                        history.push(ROUTES.EMPLOYER_DETAILS);
                        return;
                    }

                    const shouldEditEmployerInfo =
                        configuration.collect_employer_information &&
                        !addedEmployerInfo &&
                        !reportedNoIncome &&
                        !applicant.submitted_application;

                    // const shouldEditEmployerInfo = true;
                    if (shouldEditEmployerInfo && !pathname.endsWith(ROUTES.INCOME_VERIFICATION_SUMMARY)) {
                        history.push(ROUTES.EMPLOYER_DETAILS);
                    } else {
                        history.push(ROUTES.INCOME_VERIFICATION_SUMMARY);
                    }
                }
            };

            const data = await refreshFinancialSources();
            await selectRoute(data);
            setRouteSelected(true);
        })();
    }, [
        applicant,
        history,
        configuration,
        applicationEvents,
        refreshFinancialSources,
        setRouteSelected,
        redirectToFirstPage,
    ]);

    return (
        <BankingContext.Provider
            value={{
                refreshFinancialSources,
                bankingData: state.bankingData,
                fetchRenterProfile,
                clearFinancialSources: () => dispatch({ type: 'BANKING_DATA_CLEARED' }),
                _nextRoute,
                history,
                routeSelected,
            }}
        >
            <Switch>
                <Route path={ROUTES.INCOME_AND_EMPLOYMENT} component={ConnectBankPage} exact />
                <Route path={ROUTES.INCOME_VERIFICATION_SUMMARY} component={IncomeVerificationSummaryPage} />
                <Route path={ROUTES.EMPLOYER_DETAILS} component={EmployerDetails} />
                <Route path={ROUTES.MANUAL_INCOME_ENTRY_ADD_INCOME} component={AddIncomeSource} />
                <Route path={ROUTES.MANUAL_ASSET_ENTRY_ADD_ASSET} component={AddAssetSource} />
                <Route path={ROUTES.EDIT_MANUAL_FINANCIAL_SOURCE} component={EditFinancialSource} />
                <Route path={ROUTES.REMOVE_FINANCIAL_SOURCE} component={RemoveFinancialSource} />
            </Switch>
        </BankingContext.Provider>
    );
}

BankingContainer.propTypes = {
    applicationEvents: PropTypes.array,
    history: PropTypes.object,
    _nextRoute: PropTypes.func,
    applicant: PropTypes.object,
    configuration: PropTypes.object,
    fetchRenterProfile: PropTypes.func,
};

const mapStateToProps = (state) => ({
    applicationEvents: state.renterProfile?.events,
    applicant: state.applicant,
    configuration: state.configuration,
});

const mapDispatchToProps = { fetchRenterProfile };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRelativeRoutes(BankingContainer, ROUTES.INCOME_AND_EMPLOYMENT));
