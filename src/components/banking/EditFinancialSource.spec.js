import React from 'react';
import { shallow } from 'enzyme';

import API from 'app/api';
import { EditFinancialSource } from './EditFinancialSource';

let defaultProps;
beforeEach(() => {
    defaultProps = {
        match: {
            params: {
                id: '666'
            }
        },
        history: {
            push: jest.fn()
        }
    };
});

it('sets initial values', async () => {
    API.getFinancialSource = jest.fn().mockReturnValue({
        uploaded_documents: [
            {
                id: 3,
                type: {
                    id: 1,
                    label: 'W2'
                },
                filename: 'w2-1.pdf'
            },
            {
                id: 4,
                type: {
                    id: 1,
                    label: 'W2'
                },
                filename: 'w2-2.pdf'
            },
            {
                id: 5,
                type: {
                    id: 2,
                    label: '3 recent paystubs'
                },
                filename: 'paystub1.pdf'
            },
        ]
    });
    const wrapper = await shallow(<EditFinancialSource {...defaultProps}/>);
    expect(wrapper.instance().initialValues['uploadedDocuments']).toEqual({
        '1': { files: [{name: 'w2-1.pdf', id: 3}, {name: 'w2-2.pdf', id: 4}], label: 'W2' },
        '2': { files: [{name: 'paystub1.pdf', id: 5}], label: '3 recent paystubs' }
    });
});

it('onSubmit submits correct form data', async () => {
    API.getFinancialSource = jest.fn().mockReturnValue({
        uploaded_documents: [
            {
                id: 4,
                type: {
                    id: 1,
                    label: 'W2'
                },
                filename: 'w2-2.pdf'
            },
            {
                id: 5,
                type: {
                    id: 2,
                    label: '3 recent paystubs'
                },
                filename: 'paystub1.pdf'
            },
        ]
    });
    API.updateFinancialSource = jest.fn();
    const wrapper = await shallow(<EditFinancialSource {...defaultProps}/>);
    wrapper.instance().onSubmit({
        uploadedDocuments: {
            '1': { files: [{name: 'w2-1.pdf', id: 3, file: 'file'}], label: 'W2' },
            '2': { files: [{name: 'paystub1.pdf', id: 5}], label: '3 recent paystubs' },
        }
    }, {setErrors: jest.fn(), setSubmitting: jest.fn()});
    expect(API.updateFinancialSource.mock.calls[0][0]).toEqual('666');
    const formData = API.updateFinancialSource.mock.calls[0][1];
    expect(formData.getAll('uploaded_documents[]')).toEqual(["5"]);
    expect(formData.getAll('1[]')).toEqual(["file"]);
});
