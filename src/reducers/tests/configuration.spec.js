import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import API from 'app/api';
import { fetchConfiguration, configurationReceived } from 'reducers/configuration';

const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);


describe('fetchConfiguration', () => {
    it('should only call fetchConfiguration if no no hash is provided', () =>{

        const store = mockStore({configuration: null});
        const configData = {community: 'coolsville'};

        API.fetchConfiguration = jest.fn().mockReturnValue(Promise.resolve(configData));
        API.fetchPersonalizedInfo = jest.fn().mockReturnValue(Promise.resolve());

        const communityId = '1';

        return store.dispatch(fetchConfiguration(communityId)).then(() => {
            expect(API.fetchConfiguration).toHaveBeenCalled();
            expect(API.fetchPersonalizedInfo).not.toHaveBeenCalled();

            expect(store.getActions()).toEqual(
                [configurationReceived(configData)]
            )
        })
    })

    it('should only call fetchConfiguration if no no hash is provided', () =>{

        const store = mockStore({configuration: null});
        const configData = {community: 'coolsville'};

        API.fetchConfiguration = jest.fn().mockReturnValue(Promise.resolve(configData));
        API.fetchPersonalizedInfo = jest.fn().mockReturnValue(Promise.resolve());

        const communityId = '1';
        const hash = {client: 123};

        return store.dispatch(fetchConfiguration(communityId, hash)).then(() => {
            expect(API.fetchConfiguration).toHaveBeenCalled();
            expect(API.fetchPersonalizedInfo).toHaveBeenCalled();

            expect(store.getActions()).toEqual(
                [configurationReceived(configData)]
            )
        })
    })

})