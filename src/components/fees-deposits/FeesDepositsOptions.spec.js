import React from 'react';
import { shallow } from 'enzyme';

import mockProfile from 'reducers/mock-profile';
import mockConfig from 'reducers/mock-config';
import mockApplicant from 'reducers/applicant-mock';
import mockPayments from 'reducers/mock-payments';
import mockReceipt from 'reducers/mock-receipt';
import { FeesDepositsOptions } from './FeesDepositsOptions';
import { ApplicationFees } from './ApplicationFees';
import { PaidText } from './PaidText';
import { HoldingDeposit } from './HoldingDeposit';



let defaultProps;

beforeEach(() => {
    defaultProps = {
        profile: mockProfile,
        configuration: mockConfig,
        applicant: mockApplicant,
        payments: mockPayments.payables
    }
})

it('renders ApplicationFees', function() {
    let wrapper = shallow( <FeesDepositsOptions {...defaultProps} /> );
    expect(wrapper.find(ApplicationFees)).toBeTruthy();
});

it('renders Holding Deposit when there is a holding deposit with correct total fees and paid holding deposit in payments', () => {
    defaultProps.configuration.holding_deposit_value = 1000.0;
    const payments = [{
        "id": "12",
        "type": "10",
        "invoice": "666",
        "applicant": "18",
        "invitee": null,
        "amount": 100.00,
        "paid": false,
        "stripe_id": ""
    }];
    let wrapper = shallow( <FeesDepositsOptions {...defaultProps} payments={payments} /> );
    expect(wrapper.find(HoldingDeposit)).toBeTruthy();
    expect(wrapper.text().includes('Total$1100')).toBeTruthy();
    expect(wrapper.find(PaidText).length).toBe(0);
})

it('renders Holding Deposit Paid when there is a holding deposit with correct total fees and holding deposit payment paid is true', () => {
    const payments = [{
        "id": "12",
        "type": "10",
        "invoice": "666",
        "applicant": "18",
        "invitee": null,
        "amount": 100.00,
        "paid": false,
        "stripe_id": ""
    },
    {
        "id": "13",
        "type": "20",
        "invoice": "666",
        "applicant": "18",
        "invitee": null,
        "amount": 1000.00,
        "paid": true,
        "stripe_id": ""
    }]
    let wrapper = shallow( <FeesDepositsOptions {...defaultProps} payments={payments} /> );

    expect(wrapper.find(HoldingDeposit)).toBeTruthy();
    expect(wrapper.find(HoldingDeposit).props().holdingDepositPaid).toEqual(true);
    expect(wrapper.text().includes('Total$100')).toBeTruthy();
})

it('does not render Holding Deposit when there is no holding deposit with correct total fees', () => {
    defaultProps.configuration.holding_deposit_value = '';
    const payments = [{
        "id": "12",
        "type": "10",
        "invoice": "666",
        "applicant": "18",
        "invitee": null,
        "amount": 100.00,
        "paid": false,
        "stripe_id": ""
    }];
    let wrapper = shallow( <FeesDepositsOptions {...defaultProps} payments={payments}/> );

    expect(wrapper.text().includes('Holding Deposit <SimplePopover />$1000')).not.toBeTruthy();
    expect(wrapper.text().includes('Total$100')).toBeTruthy();
})

it('does not render Total when no holding deposit and fees are paid', () => {
    defaultProps.configuration.holding_deposit_value = '';
    const payments = [{
        "id": "12",
        "type": "10",
        "invoice": "666",
        "applicant": "18",
        "invitee": null,
        "amount": 100.00,
        "paid": true,
        "stripe_id": ""
    }]
    let wrapper = shallow( <FeesDepositsOptions {...defaultProps} payments={payments} /> );

    expect(wrapper.text().includes('Total')).not.toBeTruthy();
})

it('does not render Total when holding deposit paid and fees are paid', () => {
    defaultProps.configuration.holding_deposit_value = 1000;
    defaultProps.payments[0].paid = true;
    defaultProps.payments[1].paid = true;
    let wrapper = shallow( <FeesDepositsOptions {...defaultProps} /> );
    expect(wrapper.text().includes('Total')).not.toBeTruthy();
})

it('renders expected conditional text when passed receipt and no payment', () => {
    let wrapper = shallow( <FeesDepositsOptions {...defaultProps} receipt={mockReceipt} payments={null}/> );

    expect(wrapper.text().includes('Payment Success!')).toBeTruthy();
    expect(wrapper.text().includes('Payment Summary')).toBeTruthy();
})

it('renders expected conditional text when passed payments and no receipt', () => {
    const payments = [{
        "id": "12",
        "type": "10",
        "invoice": "666",
        "applicant": "18",
        "invitee": null,
        "amount": 100.00,
        "paid": true,
        "stripe_id": ""
    }]

    let wrapper = shallow( <FeesDepositsOptions {...defaultProps} payments={payments} receipt={null} /> );

    expect(wrapper.text().includes('Application Fees and Holding Deposit')).toBeTruthy();
    expect(wrapper.text().includes('Fees and Deposits')).toBeTruthy();
})

it('renders receipt information as expected with holding deposit', () => {
    let wrapper = shallow(<FeesDepositsOptions {...defaultProps} payments={null} receipt={mockReceipt} />);

    expect(wrapper.text().includes('Payment Success!Thank you! We emailed a receipt to slkejhfkajshefjkhek@gm.comPayment Summary')).toBeTruthy();

    expect(wrapper.text().includes('Total$1300')).toBeTruthy();
    expect(wrapper.find(ApplicationFees).props().everyone.length).toEqual(3);
    expect(wrapper.find(HoldingDeposit).props().holdingDepositAmount).toEqual(1000);
})

it('renders receipt information as expected when one applicant fee on receipt, no holding deposit', () => {
    let receipt = {
        "line_items": [{
            "id": "12",
            "type": "10",
            "invoice": "666",
            "applicant": "18",
            "invitee": null,
            "amount": 100.00,
            "paid": true,
            "stripe_id": "932923482jdf33"
        }],
        "paid": true,
        "id": 123,
        "application": {"id": 234},
        "total": 100.00,
        "stripe_id": "932923482jdf33",
        "paid_by": 18

    }
    let wrapper = shallow(<FeesDepositsOptions {...defaultProps} payments={null} receipt={receipt} />);
    expect(wrapper.text().includes('Total$100')).toBeTruthy();
    expect(wrapper.find(ApplicationFees).props().everyone.length).toEqual(1);
    expect(wrapper.find(HoldingDeposit).length).toEqual(0);
})