import React from 'react';
import { shallow } from 'enzyme';
import { Formik } from 'formik';

import ItemAdder from 'components/common/ItemAdder';
import { Parking } from 'components/profile/Parking';
import mockConfig from 'reducers/mock-config.json';
import mockApplication from 'reducers/mock-profile.json';

let defaultProps;

beforeEach(() => {
    defaultProps = {
        config: mockConfig,
        application: mockApplication,
    }
})

it('renders a ItemAdder component for each option in config.options.parking', function() {
    let wrapper = shallow( <Parking {...defaultProps}/> );
    wrapper = wrapper.find(Formik).dive();
    expect(wrapper.find(ItemAdder).length).toEqual(2);
});
