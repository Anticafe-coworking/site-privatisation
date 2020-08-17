import React, { Component } from 'react';
import Head from 'next/head';
import { Formik, Field } from 'formik';
import { Button, Row, Col, Form } from 'react-bootstrap';
import Meta from '../components/Meta';
import { anticafe, types, meeting } from "../components/Data";
import Details from "../components/Details";
import DateInput from '../components/form/DateInput';
import TextaeraInput from '../components/form/TextaeraInput';
import SelectInput from "../components/form/SelectInput";
import TextInput from "../components/form/TextInput";
import { startHour, endHour, getNbr } from "../components/utils";

class Home extends Component {
  state = {
    space: "",
    formulas: 0,
    formule1: false,
    formule2: false,
    formule3: false,
    formule4: false,
    formule5: false,
    formule6: false,
    formule7: false,
    formule8: false,
  }

  handleChange = e => {
    this.setState({
      color: e.target.value
    })
  }

  selectSpace = e => {
    let newSpace = e.target.value;
    this.setState({ space: newSpace })
    let anticafeDetails = anticafe.filter(el => el.name === newSpace)
    this.setState({ details: anticafeDetails[0] })
  }

  selectFormula = e => {
    let newFormula = e.target.value;
    switch (newFormula) {
      case "Demi-journée Matin - 49€/pers":
        this.setState({ formule1: true, formule2: true, formule3: false, formule4: false, formule5: false, formule6: false, formule7: false, formule8: false, formulas: 1 });
        break;
      case "Demi-journée Après-midi - 49€/pers":
        this.setState({ formule1: true, formule2: false, formule3: false, formule4: false, formule5: false, formule6: true, formule7: false, formule8: false, formulas: 2 });
        break;
      case "Journée - 79€/pers":
        this.setState({ formule1: true, formule2: true, formule3: false, formule4: false, formule5: false, formule6: true, formule7: false, formule8: false, formulas: 3 });
        break;
      case "Cocktails - 49€/pers":
        this.setState({ formule1: false, formule2: false, formule3: false, formule4: false, formule5: false, formule6: false, formule7: false, formule8: true, formulas: 4 })
        break;
      default:
        null
    }
  }

  handleSelect = (e) => {
    let name = e.target.name
    console.log("selected", name)
    switch (name) {
      case "formule1":
        this.setState({ formule1: !this.state.formule1 })
        console.log("name", name)
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
    // this.setState({
    //   [e.target.name]: !this.state.formule1
    // })
  }

  handleSubmit = e => {
    console.log("values", e)
  }

  render() {
    const { details, space, formule1, formule2, formule3, formule4,
      formule5, formule6, formule7, formule8, formulas } = this.state;
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/public/favicon.ico" />
          <title>Anticafé – café pour travailler, 13 espaces à Paris, Lyon, Bordeaux et Strasbourg</title>
        </Head>

        <nav>Navbar</nav>

        <Row className="flex-center booking-container">
          <Col md={11} id="select-booking" >
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                date: "",
                company: "",
                start: "",
                end: "",
                event: "",
                nbr: "",
                typeOfEvent: "",
                arrangement: "",
                space
              }}
              onSubmit={values => {
                console.log("date", values)
              }}>

              {({
                handleSubmit,
                handleChange,
                values
              }) => (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Row style={{ padding: "2em 1em" }}>
                      <Col md={5} >

                        <Details details={details} />

                      </Col>
                      <Col md={3}>
                        <h4 style={{ marginBottom: "0.5rem" }}>Votre réservation</h4>
                        <p style={{ marginBottom: "1.5rem" }}>Détails de votre réservation</p>
                        <Form.Row className="margin-bottom-inputs">
                          <Form.Group as={Col} md={6} >
                            <Form.Control
                              type="text"
                              name="firstName"
                              placeholder="Prénom"
                              className="form-control-lg"
                              values={values.firstName}
                              onChange={handleChange}
                            />
                          </Form.Group>
                          <Form.Group as={Col} md={6}>
                            <Form.Control
                              type="text"
                              name="lastName"
                              placeholder="Nom de famille"
                              className="form-control-lg"
                              values={values.lastName}
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Form.Row>

                        {/* Email */}
                        <Form.Control
                          type="text"
                          name="email"
                          placeholder="Email"
                          className="form-control-lg margin-bottom-inputs"
                          values={values.email}
                          onChange={handleChange}
                        />

                        {/* Téléphone */}
                        <Form.Control
                          type="text"
                          name="phone"
                          placeholder="Téléphone"
                          className="form-control-lg margin-bottom-inputs"
                          values={values.phone}
                          onChange={handleChange}
                        />

                        {/* Entreprise */}
                        <Form.Control
                          type="text"
                          name="company"
                          placeholder="Entreprise"
                          className="form-control-lg margin-bottom-inputs"
                          values={values.company}
                          onChange={handleChange}
                        />

                        {/* Anticafé */}
                        <Form.Control as="select"
                          name="space"
                          className="form-control-lg margin-bottom-inputs"
                          onChange={this.selectSpace}
                        >
                          <option>Sélectionnez un Anticafé</option>
                          <optgroup label="Bordeaux">
                            <option>Anticafé Bordeaux</option>
                          </optgroup>
                          <optgroup label="Lyon">
                            <option>Anticafé Lyon</option>
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
                          className="form-control-lg margin-bottom-inputs"
                          onChange={this.selectFormula}
                        >
                          <option>Sélectionnez une formule</option>
                          <option>Demi-journée Matin - 49€/pers</option>
                          <option>Demi-journée Après-midi - 49€/pers</option>
                          <option>Journée - 79€/pers</option>
                          <option>Cocktails - 49€/pers</option>
                        </Form.Control>
                        <DateInput name="date" />

                        <Form.Row className="margin-top">
                          <Form.Group as={Col} md={6}>
                            <SelectInput name="start" options={startHour() || []} />
                          </Form.Group>
                          <Form.Group as={Col} md={6}>
                            <SelectInput name="end" options={endHour() || []} />
                          </Form.Group>
                        </Form.Row>
                        <TextaeraInput name="description" />



                      </Col>
                      <Col md={4}>
                        <h4 style={{ marginBottom: "0.5rem" }}>Votre évènement</h4>
                        <p style={{ marginBottom: "1.5rem" }}>Dites-nous en plus sur votre événement</p>
                        <TextInput name="event" placeholder="Nom de votre évènement" />
                        <SelectInput name="nbr" options={getNbr() || []} />
                        <SelectInput name="typeOfEvent" options={types || []} />
                        <SelectInput name="arrangement" options={meeting || []} />
                        <h4>Restauration</h4>
                        {(formulas === 0 || formulas === 1 || formulas === 2 || formulas === 3) && <Form.Check
                          name="formule1"
                          label="Boissons chaudes/fraîches et fruits frais (compris)"
                          checked={formule1}
                          onChange={this.handleSelect}
                        />}
                        {(formulas === 0 || formulas === 1 || formulas === 3) && <Form.Check
                          name="formule2"
                          label="Petit déjeuner (compris)"
                          checked={formule2}
                          onChange={this.handleSelect}
                        />}
                        {(formulas === 0 || formulas === 1 || formulas === 2 || formulas === 3) && <Form.Check
                          name="formule3"
                          label="Déjeuner sur le pouce - 15 HT/pers."
                          checked={formule3}
                          onChange={this.handleSelect}
                        />}
                        {(formulas === 0 || formulas === 1 || formulas === 2 || formulas === 3) && <Form.Check
                          name="formule4"
                          label="Plats à partager - 29 HT/pers."
                          checked={formule4}
                          onChange={this.handleSelect}
                        />}
                        {(formulas === 0 || formulas === 1 || formulas === 2 || formulas === 3) && <Form.Check
                          name="formule5"
                          label="Finger food - 29 HT/pers."
                          checked={formule5}
                          onChange={this.handleSelect}
                        />}
                        {(formulas === 0 || formulas === 2 || formulas === 3) && <Form.Check
                          name="formule6"
                          label="Gouter (compris)"
                          checked={formule6}
                          onChange={this.handleSelect}
                        />}
                        {(formulas === 0 || formulas === 1 || formulas === 2 || formulas === 3) && <Form.Check
                          name="formule7"
                          label="Petit déjeuner ou goûté boosté - 8 HT/pers."
                          checked={formule7}
                          onChange={this.handleSelect}
                        />}
                        {(formulas === 0 || formulas === 4) && <Form.Check
                          name="formule8"
                          label="Cocktail - 49 HT/pers."
                          checked={formule8}
                          onChange={this.handleSelect}
                        />}
                        <Button type="submit" style={{ marginTop: "2.5rem" }}>Envoyer ma demande</Button>
                      </Col>
                    </Row>


                  </Form>
                )}

            </Formik>
          </Col>
        </Row>
      </>
    )
  }
}

export default Home;
