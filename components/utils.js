import React from 'react';

export const startHour = () => {
    let hours = ["Heure de début"];
    for (let i = 8; i <= 23; i++) {
        hours.push(`${i}:00`)
    }
    return hours
}

export const endHour = () => {
    let hours = ["Heure de fin"];
    for (let i = 0; i <= 23; i++) {
        hours.push(`${i}:00`)
    }
    return hours
}

export const getNbr = () => {
    let nbr = ["Sélectionnez le nombre de personnes*"];
    for (let i = 0; i <= 150; i++) {
        nbr.push(i)
    }
    return nbr
}