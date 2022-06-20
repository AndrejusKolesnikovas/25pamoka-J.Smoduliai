'use strict'

export default function pridetiCars(app) {
    const cars = ["BMW", "VW", "AUDI", "MB"];

    app.innerHTML += `<ul>
    ${cars.map((item) => `<li>${item}</li>`).join('')}
    </ul>`

};