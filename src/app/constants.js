export const community = {
    name: '555 Waverly'
};

export const ROUTES = {
    COMMUNITY: '/',
    PROFILE_OPTIONS: '/profile/options',
    RESET_PASSWORD: '/password/reset',
    FORGOT_PASSWORD: '/password/forgot',
    VERIFY_PASSWORD_CODE: '/password/verify',
    PROFILE: '/profile',
    WELCOME: '/welcome',
    LOGIN: '/login',
    SIGNUP: '/signup',
    TOS: '/terms'
}

export const PASSWORD_CONFIRMATION_PROPS = {
    successMessage: 'Your password has been reset.',
    buttonRoute: ROUTES.LOGIN,
    buttonText: 'Sign in',
}

export const ALL_ROUTES = [
    ROUTES.LOGIN, ROUTES.TOS, ROUTES.PROFILE_OPTIONS
]