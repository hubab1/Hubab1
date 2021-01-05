import React from 'react';
import { shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';

import * as sentryUtils from 'utils/sentry';
import { ROUTES } from 'app/constants';
import API from 'app/api';
import { AddAssetSource } from './AddAssetSource';
import AddFinancialSourceForm from './AddFinancialSourceForm';

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => ({
        refreshFinancialSources: () => {},
    }),
}));

let defaultProps;
beforeEach(() => {
    defaultProps = {
        history: {
            push: jest.fn(),
        },
        initialValues: {
            income_or_asset_type: 10,
            estimated_amount: '1111',
        },
    };
});

afterEach(() => {
    jest.restoreAllMocks();
});

it('matches snapshot', () => {
    const wrapper = shallow(<AddAssetSource {...defaultProps} />);
    expect(wrapper.getElement()).toMatchSnapshot();
});

it('Goes back to manual income verification page on submit', async () => {
    API.submitFinancialSource = jest.fn().mockReturnValue({ status: 200 });
    const wrapper = shallow(<AddAssetSource {...defaultProps} />);

    wrapper.find(AddFinancialSourceForm).prop('onSubmit')(
        {
            estimated_amount: '123490',
            income_or_asset_type: 5,
        },
        {
            setSubmitting: () => {},
            setErrors: () => {},
        }
    );

    await act(async () => {
        await Promise.resolve(wrapper);
        wrapper.update();
    });
    expect(defaultProps.history.push).toHaveBeenCalledWith(`${ROUTES.INCOME_VERIFICATION_SUMMARY}#asset`);
});

it('Doesnt go back on failure to submit and logs to sentry', async () => {
    const logToSentry = jest.spyOn(sentryUtils, 'logToSentry');

    API.submitFinancialSource = jest
        .fn()
        .mockReturnValue({ status: 400, json: () => ({ income_or_asset_type: ['Required'] }) });
    const wrapper = shallow(<AddAssetSource {...defaultProps} />);

    wrapper.find(AddFinancialSourceForm).prop('onSubmit')(
        {
            estimated_amount: '123490',
            income_or_asset_type: 5,
        },
        {
            setSubmitting: () => {},
            setErrors: () => {},
        }
    );

    await act(async () => {
        await Promise.resolve(wrapper);
        wrapper.update();
    });

    expect(defaultProps.history.push).not.toHaveBeenCalled();
    expect(logToSentry).toBeCalled();
});
