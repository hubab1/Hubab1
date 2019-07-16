import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { H1, P, formContent, link } from 'assets/styles';
import FormTextInput from 'components/common/FormTextInput/FormTextInput';
import PhoneNumberInput from 'components/common/PhoneNumberInput';
import GenericFormError from 'components/common/GenericFormError';
import ActionButton from 'components/common/ActionButton/ActionButton';
import { fetchRenterProfile, selectors } from 'reducers/renter-profile';
import { fetchApplicant } from 'reducers/applicant';
import { ROUTES } from 'app/constants';
import auth from 'utils/auth';
import UnauthenticatedPage from 'components/common/Page/UnauthenticatedPage';

export class SignupPage extends React.Component {
    state = {errors: null}

    getApplicantInfo () {
        const client = this.props.configuration.client;
        const invitee = this.props.configuration.invitee;

        if (client && client.person) {
            const { first_name, last_name, email, phone_1 } = client.person;
            return {first_name, last_name, email, phone_number: phone_1, id: client.id};
        } else if (invitee && invitee.first_name) {
            const { first_name, last_name, phone_number } = invitee;
            return { first_name, last_name, phone_number };
        } else {
            return null;
        }
    }

    auth=auth
    onSubmit = (values, { setSubmitting }) => {
        const { history, hash } = this.props;

        // TODO: add hash (and possibly initial values) to localStorage in case user refreshes
        // particularly need this for guarantor and co-applicant to associate with existing application
        return auth.register(values, this.props.communityId, hash).then((res) => {
            auth.setSession(res.token, this.props.communityId);
            setSubmitting(false);
            Promise.all([this.props.fetchRenterProfile(), this.props.fetchApplicant()]).then(() => {
                history.replace(this.props.initialPage);
            });
        }).catch((res) => {
            this.setState({errors: [res.errors.error]});
            setSubmitting(false);
        });
    }

    render () {
        if (!this.props.configuration) return;
        const initialValues = this.getApplicantInfo();
        return (
            <UnauthenticatedPage>
                <H1>Start Your Rental Application by Creating an Account Below</H1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={Yup.object().shape({
                        first_name: Yup.string().required('First Name is required'),
                        last_name: Yup.string().required('Last Name is required'),
                        phone_number: Yup.string()
                            .required('Phone Number is required')
                            .matches(/^\(\d{3}\)\s\d{3}-\d{4}/, 'Must be a valid US phone number'),
                        email: Yup.string()
                            .email()
                            .required('Email is required'),
                        password: Yup.string()
                            .required('Password must be at least 8 characters')
                            .min(8, 'Password must be at least 8 characters')
                    })}
                    onSubmit={this.onSubmit}
                >
                    {({
                        values,
                        errors,
                        handleChange,
                        submitCount,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        touched
                    }) => (
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <div className={formContent}>
                                { this.state.errors && <GenericFormError errors={this.state.errors}/> }
                                <FormTextInput
                                    label="First Name"
                                    name="first_name"
                                    submitted={submitCount > 0}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    error={errors.first_name}
                                    value={values.first_name}
                                />
                                <FormTextInput
                                    label="Last Name"
                                    name="last_name"
                                    submitted={submitCount > 0}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    error={errors.last_name}
                                    value={values.last_name}
                                />
                                <FormTextInput
                                    label="Email"
                                    name="email"
                                    submitted={submitCount > 0}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    error={errors.email}
                                    value={values.email}
                                />
                                <PhoneNumberInput 
                                    label="Phone Number"
                                    name="phone_number"
                                    value={values.phone_number}
                                    handleChange={handleChange}
                                    error={submitCount > 0 && !!errors.phone_number}
                                    helperText={submitCount > 0 ? errors.phone_number : null}
                                />
                                <FormTextInput
                                    label="Password"
                                    name="password"
                                    type="password"
                                    submitted={submitCount > 0}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    error={errors.password}
                                    value={values.password}
                                    showValidationText
                                    touched={touched && touched.password}
                                />
                                <ActionButton disabled={!values.email || !values.password || !values.last_name || !values.first_name || !values.phone_number || values.phone_number === '(___) ___-____' || isSubmitting} marginTop={20} marginBottom={20}>Create Account</ActionButton>
                            </div>
                            <P className="already-have-account">Already have an account? <Link to={ROUTES.LOGIN} className={link}>Sign in here</Link></P>
                        </form>
                    )}
                </Formik>
            </UnauthenticatedPage>
        );
    }
}

SignupPage.propTypes = {
    profile: PropTypes.object,
    fetchRenterProfile: PropTypes.func,
    communityId: PropTypes.string,
    hash: PropTypes.string,
    configuration: PropTypes.object
}

const mapStateToProps = (state) => ({
    profile: state.renterProfile,
    initialPage: selectors.selectInitialPage(state),
    communityId: state.siteConfig.basename,
    hash: state.siteConfig.hash,
    configuration: state.configuration
});

const mapDispatchToProps = { fetchRenterProfile, fetchApplicant };

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
