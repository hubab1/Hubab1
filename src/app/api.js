const CHUCK_BASE_URL = process.env.REACT_APP_CHUCK_DOMAIN;

function chuck (path) {
    return `${CHUCK_BASE_URL}${path}`;
}

const getWithHeaders = (url) => fetch(url, {
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}).then(res => res.json());

const CHUCK_BASE_LEASE_SETTINGS = (communityId) => `${CHUCK_BASE_URL}/api/onlineleasing/communities/${communityId}/`;
const CHUCK_PERSONALIZED_LEASE_SETTINGS = (communityId, hash) => `${CHUCK_BASE_URL}/api/onlineleasing/communities/${communityId}/personalized/${hash}`;

const API = {};

API.fetchConfiguration = (communityId) => {
    return getWithHeaders(CHUCK_BASE_LEASE_SETTINGS(communityId));
};

API.fetchPersonalizedInfo = (communityId, hash) => {
    return getWithHeaders(CHUCK_PERSONALIZED_LEASE_SETTINGS(communityId, hash));
};

API.fetchRenterProfile = () => {
    return Promise.resolve({
        completed_terms_and_conditions: false,
        _rental_options_config: [{ page: 'has_pets', limit: 1 }, { page: 'has_roommates', limit: 3 }],
        selected_rental_options: [],
        roommates: [],
        pets: [],
        guarantor: {},
    });
};

API.login = (email, password) => {
    return fetch(chuck('/api/onlineleasing/login/'), {
        method: 'POST',
        body: JSON.stringify({email, password})
    }).then(res => res.json());
};

API.passwordResetRequest = (phone_number, lease_settings_id) => {
    return fetch(chuck('/api/onlineleasing/password-reset/'), {
        method: 'POST',
        body: JSON.stringify({phone_number, lease_settings_id})
    }).then(res => res.json());
};

API.passwordResetVerification = (phoneNumber, code) => {
    return Promise.resolve('success');
}

export default API;