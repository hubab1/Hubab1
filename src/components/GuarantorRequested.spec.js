import React from 'react';
import { shallow } from 'enzyme';
import { GuarantorRequested } from './GuarantorRequested';
import {ROLE_PRIMARY_APPLICANT, MILESTONE_REQUEST_GUARANTOR} from 'app/constants';
import ActionButton from 'components/common/ActionButton/ActionButton';

const buildProps = (
    buildingName = 'Fake Building',
    streetAddress = '123 Fake Street',
    unitNumber = '2B',
    applicant = {
        client: {
            person: {
                name: 'John Doe'
            },
        },
    },
) => {
    return {
        profile: {
            events: [{event: MILESTONE_REQUEST_GUARANTOR}],
            unit: {
                unit_number: unitNumber,
            },
            last_status_change: {
                created_at: '2020-05-06 04:06:23'
            },
        },
        configuration: {
            community: {
                building_name: buildingName,
                normalized_street_address: streetAddress,
            }
        },
        history: {
            push: jest.fn()
        },
        applicant: applicant,
        applicantUpdated: jest.fn()
    }
};

it('Matches snapshot', () => {
    const wrapper = shallow(<GuarantorRequested {...buildProps()} />);
    expect(wrapper.getElement()).toMatchSnapshot();
});

it('Case Co-applicant', () => {
    const wrapper = shallow(<GuarantorRequested {...buildProps()} />);
    expect(wrapper.find(ActionButton)).toHaveLength(0);
});

it('Primary Applicant', () => {
    const primaryApplicant = {
        client: {
            person: {
                name: 'John Doe'
            },
        },
        role: ROLE_PRIMARY_APPLICANT,
    };

    const wrapper = shallow(<GuarantorRequested {...buildProps()} applicant={primaryApplicant} isPrimaryApplicant={true} />);
    expect(wrapper.find(ActionButton)).toHaveLength(1);
});
