import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import clsx from  'clsx';
import { Formik, FieldArray } from 'formik';
import * as Yup from 'yup';
import uuidv4 from 'uuid/v4';

import { H1, P, SpacedH3 } from 'assets/styles';
import { viewPetPolicy as viewPetPolicyClassName, petsImageMargin, policyDiv } from './styles';
import { updateRenterProfile } from 'reducers/renter-profile';
import PetItem from './PetItem';
import petsImage from 'assets/images/pets.png';
import PetPolicy from 'components/profile/pets/PetPolicy';
import PetRestrictions from 'components/profile/pets/PetRestrictions';
import AddAnotherButton from 'components/common/AddAnotherButton';
import ActionButton from 'components/common/ActionButton/ActionButton';
import BackLink from 'components/common/BackLink';
import { ROUTES } from 'app/constants';
import withRelativeRoutes from 'app/withRelativeRoutes';

export const petsSchema = (config) => Yup.object().shape({
    petOptions: Yup.array()
        .of(
            Yup.object({
                pet_type: Yup.string()
                    .required('Required'),
                name: Yup.string().when('pet_type', {
                    is: (value) => ['Dog', 'Cat'].includes(value),
                    then: Yup.string()
                        .required('Required'),
                    otherwise: Yup.string().notRequired()
                }),
                weight: Yup.number().when('pet_type', {
                    is: (value) => ['Dog', 'Cat'].includes(value),
                    then: Yup.number().typeError('Please enter numbers only')
                        .required('Required').max(config.petMaxWeight, `Your pet exceeds the maximum allowed weight of ${config.petMaxWeight} lb. Please call us at ${config.communityPhoneNumber} before continuing your application.`),
                    otherwise: Yup.number().notRequired()
                }),
                breed: Yup.string().when('pet_type', {
                    is: 'Dog',
                    then: Yup.string()
                        .required('Required'),
                    otherwise: Yup.string().notRequired()
                }),
                description: Yup.string().when('pet_type', {
                    is: 'Other',
                    then: Yup.string()
                        .required('Required'),
                    otherwise: Yup.string().notRequired()
                })
            })
        )
        .required('Select a Pet')
});

function serializePetsForPost(petOptions) {
    return petOptions.reduce((options, item) => {
        if (item.pet_type) {
            const data = Object.assign({}, item);
            if (data.service_animal == null) data.service_animal = 'false';
            options.push(data);
            return options;
        }
        return options;
    }, []);
}

export class PetsPage extends React.Component {
    state = {
        viewPetPolicy: false,
        viewPetRestrictions: false,
        errors: null
    }

    toggleViewPetPolicy = () => {
        this.setState({viewPetPolicy: !this.state.viewPetPolicy})
    }

    toggleViewPetRestrictions = () => {
        this.setState({viewPetRestrictions: !this.state.viewPetRestrictions})
    }

    onSubmit = (values, { setSubmitting }) => {
        const pets = serializePetsForPost(values.petOptions);
        this.props.updateRenterProfile({pets}).then((res) => {
            setSubmitting(false);
            this.props._nextRoute();
        }).catch((res) => {
            this.setState({errors: res.errors});
            setSubmitting(false);
        });
    }

    render () {
        if (!this.props.profile || !this.props.configuration) return null;
        const { configuration } = this.props;
        const { community, rental_options_config } = configuration;
        const { viewPetPolicy, viewPetRestrictions } = this.state;
        const selectedPetOptions = this.props.profile.pets || [{key:'first-pet', service_animal: 'false'}];
        return (
            <Fragment>
                <div className={clsx({'hide-pets-form': (viewPetPolicy || viewPetRestrictions)})}>
                    <H1>Tell Us About Your Pets</H1>
                    <SpacedH3>Now is the time to gush about your pets, we are all ears.</SpacedH3>
                    <img className={petsImageMargin} src={petsImage} alt="cartoon of a person playing with a dog"/>
                    <div className={policyDiv}>
                        <P fontSize={14}>Have you read the pet policy? <span role="button" onClick={this.toggleViewPetPolicy} className={viewPetPolicyClassName}>Read it now!</span></P>
                    </div>
                    <Formik
                        validationSchema={petsSchema({
                            petMaxWeight: this.props.configuration.community.pets_max_weight == null ? Infinity : this.props.configuration.community.pets_max_weight,
                            communityPhoneNumber: this.props.configuration.community.contact_phone
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
                                                    <PetItem key={petOption.key}
                                                        arrayHelpers={arrayHelpers}
                                                        index={index}
                                                        petOption={petOption}
                                                        handleChange={handleChange}
                                                        handleBlur={handleBlur}
                                                        toggleViewPetRestrictions={this.toggleViewPetRestrictions}
                                                    />
                                                ))
                                            }
                                            {values.petOptions.length < rental_options_config.pets.limit ?
                                                <AddAnotherButton
                                                    thing="Pet"
                                                    onClick={() => arrayHelpers.push({key: uuidv4()})}
                                                />: null
                                            }
                                        </div>
                                    )}
                                />
                                <ActionButton disabled={isSubmitting} marginTop={55} marginBottom={20}>Continue</ActionButton>
                            </form>
                        )}
                    </Formik>
                    <BackLink to={this.props._prev || '/'}/>
                </div>
                { viewPetPolicy &&
                    <PetPolicy 
                        date="April 2019" 
                        policy={rental_options_config.pets.pet_policy_details} 
                        onAgree={this.toggleViewPetPolicy}
                    />
                }
                { viewPetRestrictions &&
                    <PetRestrictions 
                        breedPolicy={community.pets_restrictions} 
                        contactPhone={community.contact_phone} 
                        onAgree={this.toggleViewPetRestrictions}
                    />
                }
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    profile: state.renterProfile,
    configuration: state.configuration
})

const connectedPetsPage = connect(mapStateToProps, {updateRenterProfile})(PetsPage);
export default withRelativeRoutes(connectedPetsPage, ROUTES.PETS);
