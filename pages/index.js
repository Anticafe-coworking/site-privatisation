import React, { Component } from 'react';
import Head from 'next/head';
import { Row, Col } from 'react-bootstrap';
import Meta from '../components/Meta';
import Navbar from "../components/Navbar";
import BookingForm from '../components/form/BookingForm';


class Home extends Component {
  render() {
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <title>Anticafé – café pour travailler, 13 espaces à Paris, Lyon, Bordeaux et Strasbourg</title>
        </Head>

        <Navbar />

        <Row className="booking-container">
          <Col md={11} id="select-booking" >
            <BookingForm />
          </Col>
        </Row>
        <div className="footer" style={{ display: "flex", paddingLeft: "3rem", fontSize: "1em" }}>
          <p>© {new Date().getFullYear()} Anticafé. Tous droits réservés. </p>
          <p> Mentions légales</p>
          <p> - </p>
          <p>Conditions générales de vente</p>
        </div>
      </>
    )
  }
}

export default Home;
