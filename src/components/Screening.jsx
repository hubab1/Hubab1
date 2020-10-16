import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import styled from '@emotion/styled';
import { css } from 'emotion';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { ROUTES } from 'app/constants';
import { H1, SpacedH3, P } from 'assets/styles';
import withRelativeRoutes from 'app/withRelativeRoutes';
import ActionButton from 'components/common/ActionButton/ActionButton';
import GenericFormMessage from 'components/common/GenericFormMessage';
import portfolioImg from 'assets/images/portfolio.png';
import SocialSecurityInput from 'components/common/SocialSecurityInput';
import API, { MOCKY } from 'app/api';

import ssl from 'assets/images/ssl-image.png';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from 'components/common/Checkbox';

const Image = styled.img`
    width: 91px;
    height: 32px;
`;

const securityBlurb = css`
    color: #828796;
    font-size: 13px;
`;

const centerText = css`
    text-align: center;
`;

const gridContainer = css`
    padding: 20px 0 20px 0;
`;

const socialSecurityPrompt = css`
    margin-bottom: 15px;
`;

export class Screening extends React.Component {
    state = { errors: null };

    onSubmit = (values, { setSubmitting, setErrors }) => {
        if (MOCKY) return this.props._nextRoute();
        const body = { ...values };
        if (!values.have_ssn) {
            body.ssn = '000-00-0000';
        }
        API.postPassthrough(body)
            .then((res) => {
                if (res.errors) {
                    setErrors(res.errors);
                    this.setState({
                        errors: [
                            'Oops! We ran into some issues trying to obtain your screening reports. Please try again later.',
                        ],
                    });
                } else {
                    this.props._nextRoute();
                }
                setSubmitting(false);
            })
            .catch(() => {
                this.setState({
                    errors: [
                        'Oops! We ran into some issues trying to obtain your screening reports. Please try again later.',
                    ],
                });
                setSubmitting(false);
            });
    };

    render() {
        const initialValues = {
            have_ssn: true,
            ssn: '',
            disclaimer: false,
        };
        return (
            <Fragment>
                <H1>You&apos;re almost done, {this.props.applicant.first_name}!</H1>
                <SpacedH3>
                    To finish qualifying for this apartment, your Social Security number will be used for a background
                    check.
                </SpacedH3>
                <img src={portfolioImg} alt="portfolio" />
                <br />
                <br />
                <Formik
                    enableReinitialize
                    initialValues={initialValues}
                    onSubmit={this.onSubmit}
                    validationSchema={Yup.object().shape({
                        have_ssn: Yup.boolean(),
                        // some test numbers are not valid and break some ssn rules. we may want to update with this more precise validation in the future /^(?!(000|666|9))\d{3}-(?!00)\d{2}-(?!0000)\d{4}$/
                        ssn: Yup.string()
                            .when('have_ssn', {
                                is: true,
                                then: Yup.string().required('Social Security Number is required'),
                            })
                            .matches(/^\d{3}-\d{2}-\d{4}$/, 'Must be a valid Social Security Number eg: 555-55-5555'),
                        disclaimer: Yup.string().required('You must click the checkbox to agree to the terms'),
                    })}
                >
                    {({
                        values,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        submitCount,
                        isSubmitting,
                        setFieldValue,
                        errors,
                    }) => (
                        <form className="text-left" onSubmit={handleSubmit} autoComplete="off">
                            {!!this.state.errors && <GenericFormMessage type="error" messages={this.state.errors} />}
                            <FormControl fullWidth>
                                <div className={gridContainer}>
                                    <Grid container spacing={1} alignItems="center">
                                        <Grid item xs={4} classes={{ root: centerText }}>
                                            <Image alt="ssl secured" src={ssl} />
                                        </Grid>
                                        <Grid item xs={8}>
                                            <span className={securityBlurb}>
                                                We use industry leading encryption software to secure your data
                                            </span>
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className={socialSecurityPrompt}>
                                    <P margin="0" className={securityBlurb}>
                                        Do you have a social security number?
                                    </P>
                                    <RadioGroup
                                        aria-label="haveSSN"
                                        name={'have_ssn'}
                                        error={errors.have_ssn}
                                        value={values.have_ssn}
                                        row={true}
                                        default={true}
                                        onChange={(val) => setFieldValue('have_ssn', val.target.value === 'true')}
                                    >
                                        <FormControlLabel value={true} control={<Radio />} label="Yes" />
                                        <FormControlLabel value={false} control={<Radio />} label="No" />
                                    </RadioGroup>
                                </div>
                                {values.have_ssn && (
                                    <SocialSecurityInput
                                        name="ssn"
                                        setFieldValue={(val) => setFieldValue('ssn', val)}
                                        handleBlur={handleBlur}
                                        handleChange={handleChange}
                                        value={values.ssn}
                                        error={errors.ssn}
                                        submitted={submitCount > 0}
                                        helperText={submitCount > 0 ? errors.ssn && 'Invalid' : null}
                                    />
                                )}
                                <Checkbox
                                    name="disclaimer"
                                    onChange={handleChange}
                                    checked={values.disclaimer}
                                    value={values.disclaimer}
                                    error={errors.disclaimer}
                                    label="By submitting this application, I verify that the information provided in
                                        this application is true and correct. I authorize Funnel Leasing to obtain,
                                        on behalf of Landlord, a background check on me in connection with my rental application."
                                />
                                <ActionButton
                                    disabled={
                                        (!values.ssn && values.requestSocialSecurityNumber) ||
                                        !values.disclaimer ||
                                        isSubmitting
                                    }
                                    marginTop={31}
                                    marginBottom={20}
                                >
                                    Submit
                                </ActionButton>
                            </FormControl>
                        </form>
                    )}
                </Formik>
            </Fragment>
        );
    }
}

Screening.propTypes = {
    _nextRoute: PropTypes.func,
    applicant: PropTypes.object,
};

const mapStateToProps = (state) => ({
    applicant: state.applicant,
    buildingName:
        state.configuration.community.building_name || state.configuration.community.normalized_street_address,
});

export default connect(mapStateToProps)(withRelativeRoutes(Screening, ROUTES.SCREENING));
