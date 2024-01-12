import * as mainContent from './main.js';

const ventasElement = document.getElementById('ventas');

mainContent.ventas.forEach(venta => {
    const ventasElement = document.createElement('div');
    ventasElement.innerHTML = `
    <h5>${venta.name}</h5>
    <p>${venta.description}</p>
    <p>${venta.address}</p>
    <p>${venta.rooms}</p>
    <p>${venta.bathrooms}</p>
    <p>${venta.price}</p>
    <p>${venta.smoke}</p>
    <p>${venta.pets}</p>
    <img src="${venta.img}" alt="${venta.name}">
    `;
});