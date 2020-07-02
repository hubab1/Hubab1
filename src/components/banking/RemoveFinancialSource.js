import React from 'react';
import styled from '@emotion/styled';

import { H1, H3, P, Bold } from 'assets/styles';
import captureRoute from 'app/captureRoute';
import { ROUTES, FINANCIAL_STREAM_ASSET, ALL_INCOME_OR_ASSET_TYPES } from 'app/constants';
import API from 'app/api';
// import GenericFormMessage from 'components/common/GenericFormMessage';
import BankingContext from './BankingContext';
import ActionButton from 'components/common/ActionButton/ActionButton';
import { prettyCurrency } from 'utils/misc';

const SkinnyH1 = styled(H1)`
    width: 70%;
`;

const SpacedH3 = styled(H3)`
    margin-top: 15px;
    margin-bottom: 30px;
`;

export class RemoveFinancialSource extends React.Component {
    state = { errorSubmitting: false, financialSource: null }
    
    onSubmit = async (values, {setErrors, setSubmitting}) => {
        setSubmitting(true);
        this.setState({errorSubmitting: false});
        this.props.history.push(ROUTES.MANUAL_INCOME_VERIFICATION);
    };
    async componentDidMount () {
        this.fetchFinancialSource();
    }
    async fetchFinancialSource () {
        let data;
        try {
            data = await API.getFinancialSource(this.props.match.params.id);
        } catch (e) {
            return;
        }
        this.setState({financialSource: data});
    }
    componentDidUpdate (prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.fetchFinancialSource();
        }
    }

    render () {
        const financialSource = this.state.financialSource;
        if (!financialSource) return null;
        const isAsset = financialSource.stream_type === FINANCIAL_STREAM_ASSET;
        return (
            <>
                <SkinnyH1>Remove {isAsset ? 'Asset' : 'Income Source'}?</SkinnyH1>
                <SpacedH3>{ALL_INCOME_OR_ASSET_TYPES[financialSource.income_or_asset_type]?.label} - {prettyCurrency(financialSource.estimated_amount)}{isAsset ? '' : '/year'}</SpacedH3>
                <hr/>
                <Bold fontSize={18}>Are you sure you want to remove this {isAsset ? 'asset' : 'income source'}?</Bold><br/><br/>
                {!isAsset && <P>Removing this income source means that all uploaded files associated with it will be deleted and it will no longer count towards your total annual income.</P>}
                {isAsset && <P>Removing this asset means that all uploaded files associated with it will be deleted and it will no longer count towards your total asset balance.</P>}
                <ActionButton onClick={()=>{}} marginBottom={20} marginTop={100}>
                    Remove {isAsset ? 'Asset' : 'Income Source'}
                </ActionButton>
                <ActionButton variant="outlined" marginBottom={20}>
                    Cancel
                </ActionButton>
            </>
        );
    }
}
RemoveFinancialSource.route = ROUTES.REMOVE_FINANCIAL_SOURCE;
RemoveFinancialSource.contextType = BankingContext;

export default captureRoute(RemoveFinancialSource);
