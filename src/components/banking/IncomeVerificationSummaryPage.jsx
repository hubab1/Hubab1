import React from 'react';
import { connect } from 'react-redux';
import { generatePath } from "react-router";
import styled from '@emotion/styled';
import { css } from 'emotion';

import { BackLink } from 'components/common/BackLink';
import ActionButton from 'components/common/ActionButton/ActionButton';
import Capsule from 'components/common/Capsule/Capsule';
import { H1, H3 } from 'assets/styles';
import finance from 'assets/images/finance.png';
import piggyBank from 'assets/images/piggy-bank.png';
import captureRoute from 'app/captureRoute';
import { ROUTES, ROLE_GUARANTOR } from 'app/constants';
import ExistingItemsExpansionPanel from 'components/profile/options/ExistingItemsExpansionPanel';
import { styles, Spacer, infoIconRoot } from 'assets/styles';
import BankingContext from './BankingContext';
import { ALL_INCOME_OR_ASSET_TYPES } from 'app/constants';
import { prettyCurrency } from 'utils/misc';
import SimplePopover from 'components/common/SimplePopover';
import Info from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';

const SkinnyH1 = styled(H1)`
    width: 70%;
`;

const SpacedH3 = styled(H3)`
    margin-top: 15px;
    margin-bottom: 30px;
`;

const totals = css`
    text-align: left;
    border-top: 1px solid #EEEEEE;
    padding-top: 15px;
`

const totalsValue = css`
    font-size: 16px;
    font-weight: bold;
`

const totalsP = css`
    margin-top: 0px;
    font-size: 14px;
`

export function IncomeVerificationSummaryPage (props) {
    const context = React.useContext(BankingContext);

    const setScrollPosition = () => {
        // taken from https://github.com/ReactTraining/react-router/issues/394#issuecomment-128148470
        window.location.hash = window.decodeURIComponent(window.location.hash);
        const scrollToAnchor = () => {
            const hashParts = window.location.hash.split('#');
            if (hashParts.length > 1) {
                const hash = hashParts[1];
                const hashElement = document.querySelector(`#${hash}`);
                if (!!hashElement) {
                    hashElement.scrollIntoView();
                }
            }
        };
        scrollToAnchor();
        window.onhashchange = scrollToAnchor;
    };

    React.useEffect(() => {
        setScrollPosition();
    }, []);

    const hashValue = props.location?.hash?.substring?.(1) ?? '';

    const getSourceLabel = (source) => {
        if (source.finicity_income_stream_id && source.other) {
            return source.other;
        }
        return ALL_INCOME_OR_ASSET_TYPES[source.income_or_asset_type]?.label
    };

    const getIncomeRequirementText = (config, profile, applicant) => {
        if (!profile || !applicant || !config) return <div/>;

        const { guarantor_income_requirement_multiplier, applicant_income_requirements } = config;

        const guarantor_income_amount = guarantor_income_requirement_multiplier * profile.unit.price;
        const applicant_income_amount = applicant_income_requirements * profile.unit.price;

        if (applicant.role === ROLE_GUARANTOR) {
            return (
                <p className={totalsP}>
                    {prettyCurrency(guarantor_income_amount)} is the required income for guarantors.
                    {<SimplePopover text={`The required income for a guarantor is ${guarantor_income_requirement_multiplier}x the monthly rent`}>
                        <Info classes={{root: infoIconRoot}} style={{color:'#828796',width:16}}/>
                    </SimplePopover>}
                </p>
            )
        }
        else {
            return (
                <p className={totalsP}>
                    {prettyCurrency(applicant_income_amount)} is the recommended household income.
                    {<SimplePopover text={`It’s recommended that the yearly combined income of all applicants be ${applicant_income_requirements}x the monthly rent.`}>
                        <Info classes={{root: infoIconRoot}} style={{color:'#828796',width:16}}/>
                    </SimplePopover>}
                </p>
            )

        }
    }

    const onContinue = () => {
        props.history.push(ROUTES.FEES_AND_DEPOSITS);
    };

    return (
        <>
            <SkinnyH1>Income and Asset Verification</SkinnyH1>
            <SpacedH3>Add at least one income source or asset below.</SpacedH3>
            <Capsule
                name="income"
                prefix={<img alt="coin" src={finance}></img>}
                label="Income"
                buttonLabel="Add an Income Source"
                tip="TBD"
                route={ROUTES.MANUAL_INCOME_ENTRY_ADD_INCOME}
                expansionPanel={
                    <>
                        {context.bankingData?.income_total &&
                         <div className={totals}>
                             <div className={totalsValue}>{prettyCurrency(parseInt(context.bankingData?.income_total))} Total Annual Income</div>
                             {getIncomeRequirementText(props.config, props.profile, props.applicant)}
                         </div>
                        }
                    <ExistingItemsExpansionPanel
                        label="Income Source"
                        labelQuantity={context.bankingData?.income_sources.length}
                        defaultExpanded={hashValue === 'income'}
                    >
                        {
                            context.bankingData?.income_sources?.map((source, i) => (
                                <div key={source.id}>
                                    <div>{getSourceLabel(source)}</div>
                                    <div className={styles.colorManatee}>{prettyCurrency(source.estimated_amount)}/year</div>
                                    <Spacer height={10}/>
                                    <Link style={{textDecoration: 'underline', fontSize: 14}} to={generatePath(ROUTES.EDIT_MANUAL_FINANCIAL_SOURCE, {
                                        id: source.id,
                                    })}>Edit</Link>
                                </div>
                            ))
                        }
                        </ExistingItemsExpansionPanel>
                    </>
                }
            />
            <Capsule
                name="asset"
                prefix={<img alt="piggy bank" src={piggyBank}></img>}
                label="Assets"
                buttonLabel="Add an Asset"
                tip="TBD"
                route={ROUTES.MANUAL_ASSET_ENTRY_ADD_ASSET}
                expansionPanel={
                    <>
                        {context.bankingData?.asset_total &&
                         <div className={totals}>
                             <div className={totalsValue}>{prettyCurrency(parseInt(context.bankingData?.asset_total))} Total Asset Balance</div>
                             <p className={totalsP}>We’ll take this number into consideration in addition to or in place of income.</p>
                         </div>
                        }
                    <ExistingItemsExpansionPanel
                        label="Asset"
                        labelQuantity={context.bankingData?.asset_sources.length}
                        defaultExpanded={hashValue === 'asset'}
                    >
                        {
                            context.bankingData?.asset_sources?.map((source, i) => (
                                <div key={source.id}>
                                    <div>{getSourceLabel(source)}</div>
                                    <div className={styles.colorManatee}>{prettyCurrency(source.estimated_amount)}</div>
                                    <Spacer height={10}/>
                                    <Link style={{textDecoration: 'underline', fontSize: 14}} to={generatePath(ROUTES.EDIT_MANUAL_FINANCIAL_SOURCE, {
                                        id: source.id,
                                    })}>Edit</Link>
                                </div>
                            ))
                        }
                        </ExistingItemsExpansionPanel>
                    </>
                }
            />
            <ActionButton marginTop={68} marginBottom={20} onClick={onContinue}>
                Continue
            </ActionButton>
            <BackLink to={ROUTES.INCOME_AND_EMPLOYMENT} />
        </>
    );
}


IncomeVerificationSummaryPage.contextTypes = BankingContext;

IncomeVerificationSummaryPage.route = ROUTES.INCOME_VERIFICATION_SUMMARY;

const mapStateToProps = state => ({
    config: state.configuration,
    profile: state.renterProfile,
    applicant: state.applicant,
})

export default connect(mapStateToProps)(captureRoute(IncomeVerificationSummaryPage))
