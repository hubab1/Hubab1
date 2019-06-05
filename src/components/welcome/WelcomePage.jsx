import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import funnelImage from 'assets/images/PoweredByFunnel.png';
import homeImage from 'assets/images/home-image.png';
import Logo from 'components/common/Logo';
import { H1, H2, P }from 'assets/styles';
import {
    BackgroundImage, BackgroundImageTint, WelcomeFlexContainer, WelcomeTextContainer,
    WelcomeFooterContainer, HomeImageContainer, WhiteButton
} from './styles';
import { ROUTES } from 'app/constants';


export class WelcomePage extends Component {

    getNextLinkUrl () {
        return ROUTES.SIGNUP;
    }

    getLinkState () {
        const client = this.props.configuration.client;
        if (!client || !client.person) return;
        const { first_name, last_name, email, phone_1 } = client.person;
        const clientValues = {first_name, last_name, email, phone_number: phone_1, id: client.id};
        return { clientValues, hash: this.props.hash};
    }
    
    render() {
        const { client, background, logo, community, unit } = this.props.configuration;
        const { building_name, city, state, postal_code, normalized_street_address } = community;
        const person = client ? client.person : null;
        const cityStateZip = `${city}, ${state} ${postal_code}`
        const helloContent = person && person.first_name ? `Hello ${person.first_name},` : 'Hi There,'
        return (
            <Fragment>
                <BackgroundImage url={background}/>
                <BackgroundImageTint/>
                <WelcomeFlexContainer>
                    <Logo logo={logo}/>
                    <WelcomeTextContainer>
                        <HomeImageContainer>
                            <img src={homeImage} width="30" alt="company logo"/>
                        </HomeImageContainer>
                        <H2>
                            {helloContent}
                        </H2>
                        <P>Your new home awaits at</P>
                        { building_name && <H1 className="welcome__building-header">{building_name}</H1> }
                        {
                            building_name ? 
                                <P>{normalized_street_address}</P> : 
                                <H1 className="welcome__building-header">{normalized_street_address}</H1>
                        }
                        {cityStateZip && <P>{cityStateZip}</P>}
                        { unit && unit.unit_number && <P>{`Unit ${unit.unit_number}`}</P>}
                    </WelcomeTextContainer>
                    <WelcomeFooterContainer>
                        <Link 
                            to={{pathname: this.getNextLinkUrl(), state: this.getLinkState()}}
                            style={{ textDecoration: 'none' }}
                        >
                            <div>
                                <WhiteButton fullWidth>
                                    Start Application
                                </WhiteButton>
                            </div>
                        </Link>
                        <img src={funnelImage} width="150" style={{marginTop:'20px'}} alt="funnel logo" />
                    </WelcomeFooterContainer>
                </WelcomeFlexContainer>
            </Fragment>

        );
    }
}

WelcomePage.propTypes = {
    configuration: PropTypes.object.isRequired,
    theme: PropTypes.shape({
        palette: PropTypes.object
    }).isRequired
}

const mapStateToProps = state => ({
    configuration: state.configuration,
    hash: state.siteConfig.hash
});

export default connect(mapStateToProps, null)(WelcomePage);
