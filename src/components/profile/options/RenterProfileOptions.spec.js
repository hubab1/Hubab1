import React from 'react';
import { shallow } from 'enzyme';

import ExistingItemsExpansionPanel from 'components/profile/options/ExistingItemsExpansionPanel';
import RenterProfileListItem from 'components/common/Capsule/Capsule';
import { RentalProfileOptions } from './RenterProfileOptions';
import mockConfig from 'reducers/mock-config.json';
import mockProfile from 'reducers/mock-profile.json';
import { RENTER_PROFILE_TYPE_PARKING } from 'app/constants';


let defaultProps;

beforeEach(() => {
    defaultProps = {
        updateRenterProfile: jest.fn(),
        profile: mockProfile,
        config: mockConfig,
        _nextRoute: jest.fn(),
        pageComplete: jest.fn().mockResolvedValue({}),
        location: { hash: '' },
    };
});

it('renders a RenterProfileListItem component for each option in config.rental_options', function() {
    const wrapper = shallow( <RentalProfileOptions {...defaultProps} /> );
    expect(wrapper.find(RenterProfileListItem).length).toEqual(5);
});

it('matches snapshot', () => {
    const wrapper = shallow( <RentalProfileOptions {...defaultProps} /> );
    expect(wrapper.getElement()).toMatchSnapshot();
});

it('renders rental_option_config choices in correct order', () => {
    const wrapper = shallow( <RentalProfileOptions {...defaultProps} config={mockConfig}/> );

    expect(wrapper.find(RenterProfileListItem).first().props()['name']).toEqual('co_applicants');
    expect(wrapper.find(RenterProfileListItem).at(1).props()['name']).toEqual('guarantor');
    expect(wrapper.find(RenterProfileListItem).at(2).props()['name']).toEqual('pets');
    expect(wrapper.find(RenterProfileListItem).at(3).props()['name']).toEqual('parking');
    expect(wrapper.find(RenterProfileListItem).last().props()['name']).toEqual('storage');
});

it('renders ExistingItemsExpansionPanel with coapplicants as existing items', () => {
    const wrapper = shallow( <RentalProfileOptions {...defaultProps} /> );
    const coApplicantsProps = wrapper.find(RenterProfileListItem).first().props();
    const coApplicantsWrapper = shallow(<RenterProfileListItem {...coApplicantsProps}/>);
    const coApplicantsPanel = coApplicantsWrapper.find(ExistingItemsExpansionPanel);
    expect(coApplicantsPanel.props()['children'].length).toEqual(2);
    expect(coApplicantsPanel.props()['children'][0]).toMatchSnapshot();

    const parkingProps = wrapper.find(RenterProfileListItem).at(3).props();
    const parkingWrapper = shallow(<RenterProfileListItem {...parkingProps}/>);
    expect(parkingWrapper.find(ExistingItemsExpansionPanel).length).toEqual(0);
});

it('renders ExistingItemsExpansionPanel for parking when there are selected_rental_options with quantity greater than 0', () => {
    const selectedParking = {parking: [
        {
            leasing_context: {},
            rental_option: {id: 102},
            quoted_fee_amount:null,
            quoted_monthly_amount:"55.00",
            quoted_deposit_amount:null,
            id: 19002,
            quantity: 2,
        },
        {
            leasing_context: {},
            rental_option: {id: 63},
            quoted_fee_amount:null,
            quoted_monthly_amount:"75.00",
            quoted_deposit_amount:null,
            id: 19002,
            quantity: 0,
        }
    ]};
    const selectedParkingProfile = Object.assign({}, mockProfile, {selected_rental_options: selectedParking});
    const wrapper = shallow( <RentalProfileOptions {...defaultProps } profile={selectedParkingProfile} /> );
    const parkingProps = wrapper.find(RenterProfileListItem).at(3).props();
    const parkingWrapper = shallow(<RenterProfileListItem {...parkingProps}/>);

    expect(parkingWrapper.find(ExistingItemsExpansionPanel).length).toEqual(1);
    expect(wrapper.getElement()).toMatchSnapshot();

    const parkingPanel = parkingWrapper.find(ExistingItemsExpansionPanel);
    expect(parkingPanel.props()['children'].length).toEqual(1);
    expect(parkingPanel.props()['children'][0]).toMatchSnapshot();
});

it('passes expansion panel defaultExpanded=True if anchor hash for rental option matches', () => {
    const selectedParking = {parking: [{
        leasing_context: {},
        rental_option: {id: 102},
        quoted_fee_amount:null,
        quoted_monthly_amount:"55.00",
        quoted_deposit_amount:null,
        id: 19002,
        quantity: 2,
    }]};
    const selectedParkingProfile = Object.assign({}, mockProfile, {selected_rental_options: selectedParking});

    const wrapper = shallow( <RentalProfileOptions {...defaultProps } profile={selectedParkingProfile} location={{hash: `#${RENTER_PROFILE_TYPE_PARKING}`}} /> );

    const coApplicantsProps = wrapper.find(RenterProfileListItem).first().props();
    const coApplicantsWrapper = shallow(<RenterProfileListItem {...coApplicantsProps}/>);
    const coApplicantsPanel = coApplicantsWrapper.find(ExistingItemsExpansionPanel);
    expect(coApplicantsPanel.props()['defaultExpanded']).toEqual(false);

    const parkingProps = wrapper.find(RenterProfileListItem).at(3).props();
    const parkingWrapper = shallow(<RenterProfileListItem {...parkingProps}/>);
    const parkingPanel = parkingWrapper.find(ExistingItemsExpansionPanel);
    expect(parkingPanel.props()['defaultExpanded']).toEqual(true);

});

describe('onContinue', function () {
    it('marks page complete on continue and calls next route', function() {
        const wrapper = shallow( <RentalProfileOptions {...defaultProps} /> );
        return wrapper.instance().onContinue().then(() => {
            expect(defaultProps.pageComplete).toHaveBeenCalledWith('renter_profile');
            expect(defaultProps._nextRoute).toHaveBeenCalled();
        });
    });
})
