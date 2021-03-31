import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { css } from 'emotion';

import ActionButton from 'common-components/ActionButton/ActionButton';
import FormTextInput from 'common-components/FormTextInput/FormTextInput';
import GenericFormMessage from 'common-components/GenericFormMessage/GenericFormMessage';
import { formContent } from 'assets/styles';
import changePassword from 'assets/images/change-password.jpeg';

const imgSpacing = css`
    margin-top: 20px;
    margin-bottom: 10px;
`;

const validationSchema = Yup.object({
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    password_confirm: Yup.string()
        .oneOf([Yup.ref('password')], 'Oops! Passwords do not match.')
        .required('Please confirm password'),
});

const initialValues = {
    password: '',
    password_confirm: '',
};

export function ChangePasswordForm(props) {
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={props.onSubmit}>
            {({ values, errors, touched, handleChange, submitCount, handleBlur, handleSubmit, isSubmitting }) => (
                <Form onSubmit={handleSubmit} autoComplete="off">
                    <img className={imgSpacing} src={changePassword} alt="welcome sign" width="101" height="91" />
                    <div className={formContent}>
                        {props.errors && <GenericFormMessage type="error" messages={props.errors} />}
                        <div>
                            <FormTextInput
                                label="Enter new password"
                                type="password"
                                name="password"
                                submitted={submitCount > 0}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                error={errors.password}
                                touched={touched.password}
                                value={values.password}
                                showValidationText
                            />
                            <FormTextInput
                                label="Confirm password"
                                type="password"
                                name="password_confirm"
                                submitted={submitCount > 0}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                error={errors.password_confirm}
                                touched={touched.password_confirm}
                                value={values.password_confirm}
                                showValidationText
                            />
                        </div>
                        <ActionButton disabled={isSubmitting} marginTop={80} marginBottom={20}>
                            Save Password
                        </ActionButton>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

ChangePasswordForm.propTypes = {
    onSubmit: PropTypes.func,
    errors: PropTypes.array,
};

export default ChangePasswordForm;
