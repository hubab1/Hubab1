import React from 'react';
import { shallow } from 'enzyme';

import { WelcomePage } from './WelcomePage';
import { WelcomeTextContainer } from './styles';

let defaultProps;
beforeEach(() => {
    defaultProps = {
        configuration: {
            application_fee: null,
            background: 'some background image url',
            community: {
                building_name: "The Excelsior",
                building_number: "601",
                city: "New York",
                normalized_street_address: "601 W 57TH ST",
                postal_code: "10019",
                state: "NY",
            },
            id: 1,
            logo: 'logo of a pegasus flying over the moon',
            primary_color: "286165",
            secondary_color: "FFFFFF",
            client: {
                person: {
                    email: "callieapi@example.com",
                    first_name: "Callie",
                    id: 280066,
                    last_name: "Api",
                    phone_1: "1234543123",
                }
            },
            unit: {
                id: 2747820,
                unit_number: "4B"
            }
        },
        theme: {palette:
            {primary:
                {main: "rgba(40,97,101,1)"}
            }
        }
    };
})

it('renders Hello <client name> when client is included in configuration', function(){
    const wrapper = shallow(<WelcomePage {...defaultProps}/>);

    expect(wrapper.text().includes('Hello Callie,')).toBeTruthy();
});

it('renders Hi There, when client is not included in configuration', function(){
    delete defaultProps.configuration.client;
    const wrapper = shallow(<WelcomePage {...defaultProps}/>);

    expect(wrapper.text().includes('Hi There,')).toBeTruthy();
});

it('renders Hi <invitee_name>, when invitee is included in configuration', function(){
    delete defaultProps.configuration.client;
    defaultProps.configuration.invitee = {first_name: 'Stinky'};
    const wrapper = shallow(<WelcomePage {...defaultProps}/>);

    expect(wrapper.text().includes('Hello Stinky,')).toBeTruthy();
});


it('renders correct info when all client and unit info are passed', () => {
    const wrapper = shallow(<WelcomePage {...defaultProps}/>);

    expect(wrapper.find(WelcomeTextContainer).text()).toContain('Excelsior');
    expect(wrapper.find(WelcomeTextContainer).text()).toContain('601 W 57TH ST');
    expect(wrapper.find(WelcomeTextContainer).text()).toContain('New York, NY 10019');
    expect(wrapper.find(WelcomeTextContainer).text()).toContain('Unit 4B');
});

it('renders correct info when all client and unit info is omitted', () => {
    delete defaultProps.configuration.unit;

    const wrapper = shallow(<WelcomePage {...defaultProps}/>);

    expect(wrapper.find(WelcomeTextContainer).text()).toContain('Excelsior');
    expect(wrapper.find(WelcomeTextContainer).text()).toContain('601 W 57TH ST');
    expect(wrapper.find(WelcomeTextContainer).text()).toContain('New York, NY 10019');
    expect(wrapper.find(WelcomeTextContainer).text()).not.toContain('Unit 4B');

});
