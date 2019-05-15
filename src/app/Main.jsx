import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string';

import AppContextProvider from 'contexts/AppContextProvider';
import WelcomePage from 'components/welcome/WelcomePage';
import ProfileContainer from 'components/profile/ProfileContainer';
import LoginPage from 'components/login/LoginPage';
import SignupPage from 'components/SignupPage';
import TermsPage from 'components/TermsPage';
import ForgotPasswordPage from 'components/ForgotPasswordPage';
import ResetPasswordVerificationPage from 'components/ResetPasswordVerificationPage';
import Page from 'components/common/Page/Page';
import ConfirmationPage from 'components/common/ConfirmationPage';
import createTheme from 'assets/createTheme';
import auth from 'utils/auth';
import { fetchRenterProfile } from 'reducers/renter-profile';
import { fetchConfiguration } from 'reducers/configuration';
import { getInitialPage } from 'utils/routeNavigation';
import { ROUTES, PASSWORD_CONFIRMATION_PROPS } from 'app/constants';
import ResetPassword from 'components/login/ResetPassword';

async function sessionIsValidForCommunityId (communityId) {
    if (auth.accessScope() === communityId) {
        // maybe do some api call to check that this authentication token is valid for this community
        // eg const isValidSession = await API.checkToken(community, auth.getToken());
        return true;
    }
    return false;
}

export class Main extends Component {
    state = {theme: null, error: null}

    mountNavigation(isAuthenticated, configuration) {
        const { fetchRenterProfile, history, location } = this.props;
        const pathname = location.pathname;
        if (!isAuthenticated) {
            if (pathname.includes('login') || pathname.includes('signup') || pathname.includes('password')) return;
            if (!configuration.client) {
                history.replace(ROUTES.WELCOME);
            }
            else if (configuration.client && configuration.client.application_id) {
                history.replace(ROUTES.LOGIN);
            } else {
                history.replace(ROUTES.WELCOME);
            }
        } else {
            fetchRenterProfile().then((profile) => {
                const initialPage = getInitialPage(profile);
                history.replace(initialPage);
            });
        }
    }

    async componentDidMount () {
        const communityId = this.props.communityId;
        const isLoggedIn = auth.isAuthenticated() && await sessionIsValidForCommunityId(communityId);

        let params = queryString.parse(this.props.location.search);
        let configuration;
        try {
            configuration = await this.props.fetchConfiguration(communityId, params.v);
        } catch {
            // todo: handle community id not found better.
            return this.setState({hasError: true});
        }
        const primaryColor = `#${configuration.primary_color}`;
        const secondaryColor = `#${configuration.secondary_color}`;
        // todo: store in redux
        this.setState({theme: createTheme(primaryColor, secondaryColor)});

        this.mountNavigation(isLoggedIn, configuration);
    }

    render() {
        const theme = this.state.theme;
        if (this.state.hasError) return <div>Error getting application form</div>;
        if (!theme) return null;
        return (
            <AppContextProvider theme={theme}>
                <div>
                    <Switch>
                        <Route path={ROUTES.WELCOME} component={WelcomePage} />
                        <Page>
                            <Route path={ROUTES.RESET_PASSWORD} component={ResetPassword} />
                            <Route path={ROUTES.PROFILE} component={ProfileContainer} />
                            <Route path={ROUTES.LOGIN} component={LoginPage} />
                            <Route path={ROUTES.SIGNUP} component={SignupPage} />
                            <Route path={ROUTES.TOS} component={TermsPage} />
                            <Route path={ROUTES.FORGOT_PASSWORD} component={ForgotPasswordPage} />
                            <Route 
                                path={ROUTES.RESET_PASSWORD_CONFIRMATION} 
                                render={(props) => <ConfirmationPage {...props} {...PASSWORD_CONFIRMATION_PROPS} />}
                            />
                            <Route path={ROUTES.VERIFY_PASSWORD_CODE} component={ResetPasswordVerificationPage} />
                        </Page>
                    </Switch>
                </div>
            </AppContextProvider>
        );
    }
}

const mapStateToProps = state => ({
    profile: state.renterProfile,
    configuration: state.configuration,
    communityId: state.siteConfig.basename
});

const mapDispatchToProps = {fetchRenterProfile, fetchConfiguration};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
