import React, { Component } from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import ConfirmBooking from "../ConfirmBooking";
import Details from "../Details";
import DateInput from './DateInput';
import TextaeraInput from './TextaeraInput';
import SelectInput from "./SelectInput";
import TextInput from "./TextInput";
import { startHour, endHour, getNbr, getstartTime, getEndTime, getPrice } from "../utils";
import { anticafe, types, meeting, months } from "../Data";
import schema from "../Schema";

class BookingForm extends Component {
    state = {
        space: "",
        formulas: "",
        formulasNbr: 0,
        formule1: false,
        formule2: false,
        formule3: false,
        formule4: false,
        formule5: false,
        formule6: false,
        formule7: false,
        formule8: false,
        checkBooking: false,
        id: null
    }

    selectSpace = e => {
        let newSpace = e.target.value;
        this.setState({ space: newSpace })
        let anticafeDetails = anticafe.filter(el => el.name === newSpace)
        if (anticafeDetails.length > 0) {
            this.setState({ id: anticafeDetails[0].id })
        } else {
            this.setState({ id: null })
        }
    }

    selectFormula = e => {
        let newFormula = e.target.value;
        switch (newFormula) {
            case "Demi-journée Matin - 49€/pers":
                this.setState({ formule1: true, formule2: true, formule3: false, formule4: false, formule5: false, formule6: false, formule7: false, formule8: false, formulas: "Demi-journée Matin - 49€/pers", formulasNbr: 1 });
                break;
            case "Demi-journée Après-midi - 49€/pers":
                this.setState({ formule1: true, formule2: false, formule3: false, formule4: false, formule5: false, formule6: true, formule7: false, formule8: false, formulas: "Demi-journée Après-midi - 49€/pers", formulasNbr: 2 });
                break;
            case "Journée - 79€/pers":
                this.setState({ formule1: true, formule2: true, formule3: false, formule4: false, formule5: false, formule6: true, formule7: false, formule8: false, formulas: "Journée - 79€/pers", formulasNbr: 3 });
                break;
            case "Cocktails - 49€/pers":
                this.setState({ formule1: false, formule2: false, formule3: false, formule4: false, formule5: false, formule6: false, formule7: false, formule8: true, formulas: "Cocktails - 49€/pers", formulasNbr: 4 })
                break;
            default:
                this.setState({ formule1: false, formule2: false, formule3: false, formule4: false, formule5: false, formule6: false, formule7: false, formule8: false, formulas: "Sélectionnez une formule", formulasNbr: 0 })
        }
    }

    handleSelect = (e) => {
        let name = e.target.name

        switch (name) {
            case "formule1":
                this.setState({ formule1: !this.state.formule1 })
                break;
            case "formule2":
                this.setState({ formule2: !this.state.formule2 })
                break;
            case "formule3":
                this.setState({ formule3: !this.state.formule3 })
                break;
            case "formule4":
                this.setState({ formule4: !this.state.formule4 })
                break;
            case "formule5":
                this.setState({ formule5: !this.state.formule5 })
                break;
            case "formule6":
                this.setState({ formule6: !this.state.formule6 })
                break;
            case "formule7":
                this.setState({ formule7: !this.state.formule7 })
                break;
            case "formule8":
                this.setState({ formule8: !this.state.formule8 })
                break;
            default:
                null
        }
        return name
    }

    submitForm = (values, { resetForm }, ...props) => {
        const { space, formulas, formule1, formule2, formule3, formule4,
            formule5, formule6, formule7, formule8 } = this.state;
        values.space = space
        values.formulas = formulas;
        values.formule1 = formule1;
        values.formule2 = formule2;
        values.formule3 = formule3;
        values.formule4 = formule4;
        values.formule5 = formule5;
        values.formule6 = formule6;
        values.formule7 = formule7;
        values.formule8 = formule8;
        let newDate = values.date;
        values.email = values.email.trim()
        values.formatedDate = newDate.getTime();
        let splitStart = values.start.split(":")
        let splitEnd = values.end.split(":")
        let startTime = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), Number(splitStart[0]))
        let endTime = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), Number(splitEnd[0]))
        values.startDate = startTime.getTime()
        values.endDate = endTime.getTime()
        values.price = getPrice(values)
        this.setState({ checkBooking: !this.state.checkBooking })
    }

    updateBooking = () => {
        this.setState({ checkBooking: !this.state.checkBooking })
    }



    render() {
        const { id, checkBooking, formulasNbr, formule1, formule2, formule3,
            formule4, formule5, formule6, formule7, formule8, formulas, space } = this.state;

        return (
            <Formik
                validationSchema={schema}
                initialValues={{
                    firstName: "", lastName: "", email: "", phone: "",
                    date: "", company: "", start: "", end: "", event: "",
                    nbr: "", typeOfEvent: "", arrangement: "", space: "", description: "",
                    formule1: false, formule2: false, formule3: false, formule4: false,
                    formule5: false, formule6: false, formule7: false, formule8: false
                }}
                onSubmit={this.submitForm}>

                {({
                    handleSubmit,
                    handleChange,
                    resetForm,
                    values,
                    errors,
                    touched,
                    ...props
                }) => {
                    return (
                        <Form onSubmit={handleSubmit} autoComplete="off">
                            <Row style={{ padding: "2em 1em" }}>

                                <Col xs={12} md={12} lg={5}>
                                    <Details id={id} booking={checkBooking} />
                                </Col>

                                {checkBooking ? <ConfirmBooking values={values} updateBooking={this.updateBooking} /> :
                                    (<>
                                        <Col xs={12} md={6} lg={3}>
                                            <h4 style={{ marginBottom: "0.5rem" }}>Votre réservation</h4>
                                            <p style={{ marginBottom: ".5rem" }}>Détails de votre réservation</p>

                                            <Form.Row className="margin-bottom-inputs">

                                                <Form.Group as={Col} md={6} >
                                                    <TextInput name="firstName" placeholder="Prénom" />
                                                </Form.Group>

                                                <Form.Group as={Col} md={6}>
                                                    <TextInput name="lastName" placeholder="Nom de famille" />
                                                </Form.Group>

                                            </Form.Row>

                                            <TextInput name="email" placeholder="Email" />
                                            <TextInput name="phone" placeholder="Téléphone" />
                                            <TextInput name="company" placeholder="Entreprise" />
                                            <Form.Control as="select"
                                                name="space"
                                                className="form-control-lg margin-top-inputs"
                                                onChange={this.selectSpace}
                                                value={space}
                                            >
                                                <option>Sélectionnez un Anticafé</option>
                                                <optgroup label="Bordeaux">
                                                    <option>Anticafé Bordeaux</option>
                                                </optgroup>
                                                <optgroup label="Paris">
                                                    <option>Anticafé Beaubourg</option>
                                                    <option>Anticafé Canal St Martin</option>
                                                    <option>Anticafé La Défense</option>
                                                    <option>Anticafé La Fayette</option>
                                                    <option>Anticafé Louvre</option>
                                                    <option>Anticafé République</option>
                                                    <option>Anticafé Station F</option>
                                                </optgroup>
                                                <optgroup label="Lyon">
                                                    <option>Anticafé Lyon</option>
                                                </optgroup>
                                                <optgroup label="Strasbourg">
                                                    <option>Anticafé Strasbourg</option>
                                                </optgroup>
                                            </Form.Control>

                                            <Form.Control as="select"
                                                name="formulas"
                                                className="form-control-lg margin-top-inputs"
                                                onChange={this.selectFormula}
                                                value={formulas}
                                            >
                                                <option>Sélectionnez une formule</option>
                                                <option>Demi-journée Matin - 49€/pers</option>
                                                <option>Demi-journée Après-midi - 49€/pers</option>
                                                <option>Journée - 79€/pers</option>
                                                <option>Cocktails - 49€/pers</option>
                                            </Form.Control>
                                            <DateInput name="date" />
                                            <Form.Row>

                                                <Form.Group as={Col} md={6}>
                                                    <SelectInput name="start" options={getstartTime(formulasNbr) || []} />
                                                </Form.Group>

                                                <Form.Group as={Col} md={6}>
                                                    <SelectInput name="end" options={getEndTime(formulasNbr) || []} />
                                                </Form.Group>

                                            </Form.Row>
                                            <TextaeraInput name="description" />

                                        </Col>
                                        <Col xs={12} md={6} lg={4}>
                                            <h4 style={{ marginBottom: "0.5rem" }}>Votre évènement</h4>
                                            <p style={{ marginBottom: "1.5rem" }}>Dites-nous en plus sur votre événement</p>
                                            <TextInput name="event" placeholder="Nom de votre évènement" />
                                            <SelectInput name="nbr" options={getNbr() || []} />
                                            <SelectInput name="typeOfEvent" options={types || []} />
                                            <SelectInput name="arrangement" options={meeting || []} />
                                            <h4 style={{ marginTop: "1.4rem" }}>Restauration</h4>

                                            {(formulasNbr === 0 || formulasNbr === 1 || formulasNbr === 2 || formulasNbr === 3) && <Form.Check
                                                name="formule1"
                                                label="Boissons chaudes/fraîches et fruits frais (compris)"
                                                checked={formule1}
                                                onChange={this.handleSelect}
                                            />}
                                            {(formulasNbr === 0 || formulasNbr === 1 || formulasNbr === 3) && <Form.Check
                                                name="formule2"
                                                label="Petit déjeuner (compris)"
                                                checked={formule2}
                                                onChange={this.handleSelect}
                                            />}
                                            {(formulasNbr === 0 || formulasNbr === 1 || formulasNbr === 2 || formulasNbr === 3) && <Form.Check
                                                name="formule3"
                                                label="Déjeuner sur le pouce - 15 HT/pers."
                                                checked={formule3}
                                                onChange={this.handleSelect}
                                            />}
                                            {(formulasNbr === 0 || formulasNbr === 1 || formulasNbr === 2 || formulasNbr === 3) && <Form.Check
                                                name="formule4"
                                                label="Plats à partager - 29 HT/pers."
                                                checked={formule4}
                                                onChange={this.handleSelect}
                                            />}
                                            {(formulasNbr === 0 || formulasNbr === 1 || formulasNbr === 2 || formulasNbr === 3) && <Form.Check
                                                name="formule5"
                                                label="Finger food - 29 HT/pers."
                                                checked={formule5}
                                                onChange={this.handleSelect}
                                            />}
                                            {(formulasNbr === 0 || formulasNbr === 2 || formulasNbr === 3) && <Form.Check
                                                name="formule6"
                                                label="Gouter (compris)"
                                                checked={formule6}
                                                onChange={this.handleSelect}
                                            />}
                                            {(formulasNbr === 0 || formulasNbr === 1 || formulasNbr === 2 || formulasNbr === 3) && <Form.Check
                                                name="formule7"
                                                label="Petit déjeuner ou goûté boosté - 8 HT/pers."
                                                checked={formule7}
                                                onChange={this.handleSelect}
                                            />}
                                            {(formulasNbr === 0 || formulasNbr === 4) && <Form.Check
                                                name="formule8"
                                                label="Cocktail - 49 HT/pers."
                                                checked={formule8}
                                                onChange={this.handleSelect}
                                            />}
                                            <Button type="submit" className="grey-button" style={{ marginTop: "2.5rem" }}>Envoyer ma demande</Button>
                                        </Col>
                                    </>)}
                            </Row>

                        </Form>
                    )
                }}
            </Formik>
        );
    }
}

export default BookingForm;