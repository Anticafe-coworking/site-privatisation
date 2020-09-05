import React from 'react';
import { anticafe } from "../components/Data";

const Details = ({ id, booking }) => {
    return (
        <>
            {booking ? <h1>Résumé de votre réservation</h1> : <h1 style={{ marginBottom: "0.8rem", marginLeft: "15px" }}>Dites-nous en plus</h1>}
            <div style={{ marginLeft: "15px" }}>
                Merci de renseigner les détails de votre réservation.<br />
                Les plages horaires disponibles apparaitront automatiquement.
                </div>

            <img src={typeof id === "number" ? anticafe[id].img : "https://www.anticafe.eu/wp-content/uploads/2019/11/booking_table.jpg"} style={{ maxWidth: "90%", margin: "1.5rem 0", padding: '0 15px' }} />


            {
                typeof id == "number" && (
                    <div style={{ marginBottom: "0.8rem", marginLeft: "15px" }}>
                        <h4>Accès</h4>
                        <p>{anticafe[id].adresse}</p>
                        <p>{anticafe[id].metro}</p>
                        <h4>Contact</h4>
                        <p>{anticafe[id].phone}</p>
                        <p>{anticafe[id].email}</p>
                    </div>
                )
            }
        </>
    );
};

export default Details;