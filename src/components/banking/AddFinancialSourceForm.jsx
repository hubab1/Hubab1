import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import * as Yup from 'yup';
import CurrencyTextField from '@unicef/material-ui-currency-textfield';
import capitalize from 'lodash/capitalize';

import { allValuesSet } from 'utils/formik';
import ActionButton from 'components/common/ActionButton/ActionButton';
import { Spacer } from 'assets/styles';
import { ASSET_TYPES, INCOME_TYPES, FINANCIAL_STREAM_ASSET, INCOME_TYPE_OTHER, ASSET_TYPE_OTHER } from 'app/constants';
import { Formik } from 'formik';
import FormTextInput from 'components/common/FormTextInput/FormTextInput';

export default function AddFinancialSourceForm (props) {
    const isAsset = props.financialType === FINANCIAL_STREAM_ASSET;
    const financialTypeLabel = isAsset ? 'asset' : 'income';
    const selectChoices = isAsset ?
        ASSET_TYPES : INCOME_TYPES;

    function getInitialValues () {
        return Object.assign({
            income_or_asset_type: '',
            estimated_amount: '',
        }, props.initialValues);
    }
    function onChangeSelect(e, handleChange, setFieldValue) {
        handleChange(e);
        // clear other if other field becomes hidden
        setFieldValue('other', null);
    }
    return (
        <Formik
            validationSchema={
                Yup.object({
                    income_or_asset_type: Yup.number().required('Required'),
                    estimated_amount: Yup.string().required('Required'),
                    other: Yup.string().when('income_or_asset_type', {
                        is: (value) => [INCOME_TYPE_OTHER, ASSET_TYPE_OTHER].includes(value),
                        then: Yup.string().nullable().required('Required'),
                        otherwise: Yup.string().nullable().notRequired()
                    }),
                })
            }
            onSubmit={props.onSubmit}
            initialValues={getInitialValues()}
        >
            {
            ({
                values,
                handleChange,
                handleSubmit,
                errors,
                submitCount,
                isSubmitting,
                setFieldValue
            }) => (
            <form onSubmit={handleSubmit}>
                <div className="align-left">
                    <FormControl fullWidth>
                        <InputLabel htmlFor="income-or-asset-type">{capitalize(financialTypeLabel)} type</InputLabel>
                        <Select
                            error={!!errors.income_or_asset_type}
                            value={values.income_or_asset_type}
                            fullWidth
                            onChange={(e)=>onChangeSelect(e, handleChange, setFieldValue)}
                            inputProps={{
                                name: 'income_or_asset_type',
                                id: 'income-or-asset-type',
                            }}
                        >
                            {selectChoices.map(incomeType => (
                                <MenuItem key={incomeType.value} value={incomeType.value}>{incomeType.label}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    {
                    [INCOME_TYPE_OTHER, ASSET_TYPE_OTHER].includes(values.income_or_asset_type) &&
                    <>
                        <Spacer height={24}/>
                        <FormTextInput
                            label="Description"
                            name="other"
                            inputProps={{maxLength: 255}}
                            value={values.other}
                            handleChange={handleChange}
                            error={errors.other}
                            submitted={submitCount > 0}
                        />
                    </>
                    }
                    <Spacer height={24}/>
                    {
                        values.income_or_asset_type &&
                        <CurrencyTextField
                            error={submitCount > 0 && !!errors.estimated_amount}
                            helperText={submitCount > 0 && errors.estimated_amount}
                            fullWidth
                            textAlign="left"
                            label={isAsset ? 'Estimated asset balance' : 'Estimated annual income'}
                            minimumValue="0"
                            name="estimated_amount"
                            currencySymbol="$"
                            // onChange={handleChange}
                            onChange={(event, value)=>{
                                // fixes odd issue with blank value on autofill
                                const textValue = event.target.value;
                                if (textValue && !value) {
                                    setFieldValue('estimated_amount', textValue);
                                } else {
                                    setFieldValue('estimated_amount', value);
                                }
                            }}
                            outputFormat="string"
                            value={values.estimated_amount}
                        />
                    }
                </div>
                <ActionButton disabled={!allValuesSet(values, {exclude: ['other']}) || isSubmitting} marginTop={40} marginBottom={20}>
                    {isAsset ? 'Add Asset' : 'Add Income Source'}
                </ActionButton>
            </form>
            )}
        </Formik>
    )
}
