import React from 'react';

const Details = ({ details }) => {
    return (
        <>
            <h1 style={{ marginBottom: "0.8rem", marginLeft: "15px" }}>Dites-nous en plus</h1>
            <div style={{ marginLeft: "15px" }}>
                Merci de renseigner les détails de votre réservation.<br />
                Les plages horaires disponibles apparaitront automatiquement.
                </div>
            <img src={(details && details.image) ? details.image : "https://www.anticafe.eu/wp-content/uploads/2019/12/IMG_9690.jpg"} style={{ maxWidth: "72.5%", margin: "1.5rem 0", padding: '0 15px' }} />

            {details && (
                <div style={{ marginBottom: "0.8rem", marginLeft: "15px" }}>
                    <h4>Accès</h4>
                    <p>{details.adresse}</p>
                    <p>{details.metro}</p>
                    <h4>Contact</h4>
                    <p>{details.phone}</p>
                    <p>{details.email}</p>
                </div>
            )}
        </>
    );
};

export default Details;