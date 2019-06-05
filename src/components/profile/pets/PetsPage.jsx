import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Formik, FieldArray, Field, getIn } from 'formik';
import * as Yup from 'yup';


import { H1, H3, P, ErrorDetail } from 'assets/styles';
import { viewPetPolicy, petsImageMargin, policyDiv } from './styles';
import { updateRenterProfile } from 'reducers/renter-profile';
import PetTypeSelect from './PetTypeSelect';
import FormTextInput from 'components/common/FormTextInput/FormTextInput';
import petsImage from 'assets/images/pets.png';
import PetPolicy from 'components/profile/pets/PetPolicy';
import AddAnotherButton from 'components/common/AddAnotherButton';
import ActionButton from 'components/common/ActionButton/ActionButton';
import BackLink from 'components/common/BackLink';
import { ROUTES } from 'app/constants';
import withRelativeRoutes from 'app/withRelativeRoutes';
import Cancel from '@material-ui/icons/Cancel';
import { css } from 'emotion';


const cancelButton = css`
    color: #828796;
    cursor: pointer;
`

// taken from here: https://jaredpalmer.com/formik/docs/api/fieldarray
const ErrorMessage = ({ name }) => (
    <Field
        name={name}
        render={({ form }) => {
            const error = getIn(form.errors, name);
            const touch = getIn(form.touched, name);
            const submitCount = form.submitCount;
            return <ErrorDetail>{(touch && error) || submitCount ? error : null}</ErrorDetail>
        }}
    />
);

export class PetsPage extends React.Component {
    state = {
        viewPetPolicy: false,
        errors: null
    }

    toggleViewPetPolicy = () => {
        this.setState({viewPetPolicy: !this.state.viewPetPolicy})
    }

    onSubmit = (values, { setSubmitting }) => {
        // ignore form values without pet type
        const payload = values.petOptions.filter(option => !!option.petType);
        this.props.updateRenterProfile({pets: payload}).then((res) => {
            setSubmitting(false);
        }).catch((res) => {
            this.setState({errors: res.errors});
            setSubmitting(false);
        });
    }

    renderDogFields (petOption, handleChange, handleBlur, index) {
        return (
            <Fragment>
                <FormTextInput
                    label="Dog Name"
                    name={`petOptions[${index}].name`}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={petOption.name}
                />
                <FormTextInput
                    label="Breed"
                    name={`petOptions[${index}].breed`}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={petOption.breed}
                />
                <FormTextInput
                    label="Weight"
                    name={`petOptions[${index}].weight`}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={petOption.weight}
                    endAdornment={<span style={{color: '#828796'}}>Lb</span>}
                />
            </Fragment>
        );
    }

    render () {
        if (this.state.viewPetPolicy) {
            return <PetPolicy date="April 2019" policy="no poopy doggies" onAgree={this.toggleViewPetPolicy}/>
        }
        const selectedPetOptions = [{}];
        return (
            <Fragment>
                <H1>Tell Us About Your Pets</H1>
                <H3>Now is the time to gush about your pets, we are all ears.</H3>
                <img className={petsImageMargin} src={petsImage} alt="cartoon of a person playing with a dog"/>
                <div className={policyDiv}>
                    <P>Have you read the pet policy? <span role="button" onClick={this.toggleViewPetPolicy} className={viewPetPolicy}>Read it now!</span></P>
                </div>
                <Formik
                    validationSchema={Yup.object().shape({
                        petOptions: Yup.array()
                            // .of(
                            //     Yup.object().shape({
                            //         petType: Yup.string()
                            //             .required('Required'),
                            //     })
                            // )
                            .required('Select a Pet')
                    })}
                    onSubmit={this.onSubmit}
                    initialValues={{petOptions: selectedPetOptions}}
                >
                    {({
                        values,
                        handleChange,
                        handleBlur,
                        isSubmitting,
                        handleSubmit,
                    }) => (
                        <form className="text-left" onSubmit={handleSubmit} autoComplete="off">
                            <FieldArray
                                name="petOptions"
                                render={arrayHelpers => (
                                    <div>
                                        {
                                            values.petOptions.map((petOption, index) => (
                                                <div key={index}>
                                                    <PetTypeSelect
                                                        topAdornment={index > 0 && <Cancel role="button" style={{fontSize: 17}} className={cancelButton} onClick={() => arrayHelpers.remove(index)}/>}
                                                        onChange={(value)=>arrayHelpers.replace(index, {petType: value})}
                                                        value={petOption.petType}
                                                    />
                                                    {petOption.petType === 'Dog' && this.renderDogFields(petOption, handleChange, handleBlur, index)}
                                                    <ErrorMessage name={`petOptions[${index}].petType`} />
                                                </div>)
                                            )
                                        }
                                        <AddAnotherButton
                                            thing="Pet"
                                            onClick={() => arrayHelpers.push({})}
                                        />
                                    </div>
                                )}
                            />
                            <ActionButton disabled={isSubmitting} marginTop="55px" marginBottom="20px">Next</ActionButton>
                        </form>
                    )}
                </Formik>
                <BackLink to={this.props._prev || '/'}/>
            </Fragment>
        );
    }
}

const connectedPetsPage = connect(null, {updateRenterProfile})(PetsPage);
export default withRelativeRoutes(connectedPetsPage, ROUTES.PETS);
