import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styled from '@emotion/styled';
import { KeyboardDatePicker } from '@material-ui/pickers';

import { ROUTES } from 'app/constants';
import withRelativeRoutes from 'app/withRelativeRoutes';
import FormTextInput from 'components/common/FormTextInput/FormTextInput';
import { H1, SpacedH3 } from 'assets/styles';
import ActionButton from 'components/common/ActionButton/ActionButton';
import sticky from 'assets/images/sticky.png';

const ImageContainer = styled.div`
    margin-top: 31px;
    margin-bottom: 31px;
    img {
        max-height: 105px;
        max-width: 114px;
    }
`

export class TellUsMore extends React.Component {
    onSubmit = (values, { setSubmitting }) => {
        Promise.resolve().then(() => {
            this.props._nextRoute();
            setSubmitting(false);
        })
    }

    render () {
        return (
            <Fragment>
                <H1>Tell Us A Little More</H1>
                <SpacedH3>Now, by filling out these details below we can screen you more accurately.</SpacedH3>
                <ImageContainer>
                    <img src={sticky} alt="sticky note"/>
                </ImageContainer>
                <Formik
                    validationSchema={Yup.object().shape({
                        street_address: Yup.string()
                            .required('required'),
                        city: Yup.string()
                            .required('required'),
                        state: Yup.string()
                            .required('required'),
                        zip: Yup.string()
                            .required('required'),
                        birthday: Yup.string()
                            .required('required'),
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
                        setFieldValue,
                        isSubmitting
                    }) => (
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <FormTextInput
                                        label="Street Address"
                                        name="street_address"
                                        submitted={submitCount > 0}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        error={errors.street_address}
                                        value={values.street_address}
                                    />
                                </Grid>
                                <Grid item xs={8}>
                                    <FormTextInput
                                        label="City"
                                        name="city"
                                        submitted={submitCount > 0}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        error={errors.city}
                                        value={values.city}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <FormTextInput
                                        label="State"
                                        name="state"
                                        submitted={submitCount > 0}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        error={errors.state}
                                        value={values.state}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <FormTextInput
                                        label="Zip"
                                        name="zip"
                                        submitted={submitCount > 0}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        error={errors.zip}
                                        value={values.zip}
                                    />
                                </Grid>
                                <Grid item xs={8}>
                                    <KeyboardDatePicker
                                        id="mui-pickers-date"
                                        label="Birthday"
                                        value={values.birthday}
                                        fullWidth
                                        onBlur={handleBlur}
                                        onChange={e => setFieldValue('birthday', e)}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <ActionButton marginTop={50} disabled={!values.street_address || !values.city || !values.state || !values.zip || !values.birthday || isSubmitting}>Continue</ActionButton>
                        </form>
                    )}
                </Formik>
            </Fragment>
        )
    }
}

export default withRelativeRoutes(TellUsMore, ROUTES.TELL_US_MORE);