export const startHour = (start, end) => {
    let hours = ["Heure de début"];
    let i = start ? start : 8;
    let limit = end ? end : 23;

    for (i; i <= limit; i++) {
        hours.push(`${i}:00`)
    }
    return hours
}

export const endHour = (start, end) => {
    let hours = ["Heure de fin"];
    let i = start ? start : 0;
    let limit = end ? end : 23;
    for (i; i <= limit; i++) {
        hours.push(`${i}:00`)
    }
    return hours
}

//Calculer le nombre de personnes pour la privatisation
export const getNbr = () => {
    let nbr = ["Sélectionnez le nombre de personnes*"];
    for (let i = 0; i <= 150; i++) {
        nbr.push(i)
    }
    return nbr
}

export const getstartTime = formulasNbr => {
    switch (formulasNbr) {
        case 1:
            return startHour(8, 10)
            break;
        case 2:
            return startHour(12, 14)
            break
        case 3:
            return startHour()
            break;
        case 4:
            return startHour(18, 22);
            break
        default:
            return startHour();
    }
}

export const getEndTime = formulasNbr => {
    switch (formulasNbr) {
        case 1:
            return endHour(12, 14)
            break;
        case 2:
            return endHour(12, 18)
            break;
        case 3:
            return endHour();
            break
        case 4:
            return endHour(19, 24)
            break
        default:
            return endHour()
    }
}

export const getPrice = values => {
    console.log('price', values)
    let price;
    switch (values.formulas) {
        case "Demi-journée Matin - 49€/pers":
        case "Demi-journée Après-midi - 49€/pers":
            price = 49 * values.nbr;
            if (values.formule3) {
                price = price + (15 * values.nbr)
            }
            if (values.formule4) {
                price = price + (29 * values.nbr)
            }
            if (values.formule5) {
                price = price + (29 * values.nbr)
            }
            if (values.formule7) {
                price = price + (8 * values.nbr)
            }
            break;
        case "Journée - 79€/pers":
            price = 79 * values.nbr; // Il n'y a que le prix par personne qui change
            if (values.formule3) {
                price = price + (15 * values.nbr)
            }
            if (values.formule4) {
                price = price + (29 * values.nbr)
            }
            if (values.formule5) {
                price = price + (29 * values.nbr)
            }
            if (values.formule7) {
                price = price + (8 * values.nbr)
            }
            break;
            break;
        case "Cocktails - 49€/pers":
            price = 49 * values.nbr;
            break;
        default:
            console.log('price', price)

    }
    return price
}

