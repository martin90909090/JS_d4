const propiedad_1 = {
    id: 1,
    name: 'Apartamento de lujo en zona exclusiva',
    description: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    address: '123 Luxury Lane, Prestige Suburb, CA 45678',
    rooms: 4,
    bathrooms: 4,
    price: 500000,
    somke: false,
    pets: false,
    img: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg'
};

const propiedad_2 = {
    id: 2,
    name: 'Apartamento acogedor en la montaña',
    description: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    address: '789 Mountain Road, Summit Peaks, CA 23456',
    rooms: 2,
    bathrooms: 1,
    price: 1200,
    somke: true,
    pets: true,
    img: 'https://i.pinimg.com/564x/f5/92/ce/f592ce9780df2e8de81052e93df92542.jpg'
};

const propiedad_3 = {
    id: 3,
    name: 'Penthouse de lujo con terraza panorámica',
    description: 'EsEste penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    address: '567 Skyline Avenue, Skyview City, CA 56789',
    rooms: 3,
    bathrooms: 3,
    price: 4500000,
    somke: false,
    pets: true,
    img: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg'
};

const propiedad_4 = {
    id: 4,
    name: 'Europa',
    description: 'Edificio Europa promete enamorarte con su diseño inspirado en el Providencia clásico, el cual se combina con la modernidad y tecnología que caracteriza a Inmobiliaria Indesa',
    address: 'Calle Europa 1963, Pedro de Valdivia, Providencia, RM',
    rooms: 3,
    bathrooms: 3,
    price: 300000,
    somke: true,
    pets: true,
    img: 'https://http2.mlstatic.com/D_NQ_NP_2X_725073-MLC72924351701_112023-F.webp'
};

const propiedad_5 = {
    id: 5,
    name: 'Condominio Las Loicas',
    description: 'Condominio Las Loicas está ubicado cerca del Colegio Pumahue de Chicureo; además, el sector cuenta con strip center, club deportivo (que incluye tenis, fútbol, futbolito, piscina y gimnasio), jardín infantil y sala cuna Arboleda. También podrás encontrar un punto de reciclaje y una zona de adiestramiento canino',
    address: 'Santa Elena 200, Chicureo, Colina, RM',
    rooms: 3,
    bathrooms: 4,
    price: 20000,
    somke: false,
    pets: false,
    img: 'https://http2.mlstatic.com/D_NQ_NP_2X_906882-MLC52334358224_112022-F.webp'
};

const propiedad_6 = {
    id: 6,
    name: 'Carolinas Apartment - Gråbrødretorv 2 & 3',
    description: 'Este apartamento de lujo está ubicado a pocos pasos del centro de Copenhague, conexión WiFi gratuita y cocina con lavavajillas, horno y microondas. Este apartamento sostenible se encuentra a 700 metros del Museo Nacional de Dinamarca y del palacio de Christiansborg. Además, goza de vistas a la ciudadado en una exclusiva zona residencial',
    address: 'Gråbrødretorv 14, 3 th floor, 1154 Copenhague, Dinamarca',
    rooms: 3,
    bathrooms: 2,
    price: 1000000,
    somke: true,
    pets: true,
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/493374200.jpg?k=265b43a3d573279efac03484d7fdd6407c2815e99c58a4a97995f173ea81afa0&o=&hp=1'
};

const ventas = [propiedad_1, propiedad_2, propiedad_3, propiedad_4, propiedad_5, propiedad_6];

const ventasElement = document.getElementById('ventas');

const renderSmoke = (propiedad) => {
  if (propiedad.smoke) {
    return '<div class="allowed">Permitido fumar</div>';
  } else {
    return '<div class="n_allowed">No se permite fumar</div>';
  }
};  

const renderSmokeIcon = (propiedad) => {
  if (propiedad.smoke) {
    return '<i class="fas fa-smoking" style="color: green"></i>';
  } else {
      return '<i class="fas fa-smoking-ban" style="color: red"></i>';
  }
  }; 

const renderPets = (propiedad) => {
  if (propiedad.pets) {
    return '<div class="allowed">Mascotas permitidas</div>';
  } else {
    return '<div class="n_allowed">No se permiten mascotas</div>';
  }
};

const renderPetsIcon = (propiedad) => {
  if (propiedad.pets) {
    return '<i class="fas fa-paw" style="color: green"></i>';
  } else {
      return '<i class="fas fa-ban" style="color: red"></i>';
  }
};  

const render = () => {
  for (let propiedad = 0; propiedad <= ventas.length; propiedad++) {
      ventasElement.innerHTML += `
          <div class="col-md-4 mb-4">
              <div class="card">
                  <img src="${ventas[propiedad].img}" alt="${ventas[propiedad].name}">
                  <div class="card-body">
                      <h5 class="card-title">${ventas[propiedad].name}</h5>
                      <p class="card-text">${ventas[propiedad].description}</p>
                      <p><i class="fas fa-map-marker-alt"></i>${ventas[propiedad].address}</p>
                      <p><i class="fas fa-bed"></i>${ventas[propiedad].rooms}</p>
                      <p><i class="fas fa-bath"></i>${ventas[propiedad].bathrooms}</p>
                      <p><i class="fas fa-dollar-sign"></i>${ventas[propiedad].price}</p>
                      <div class="restrict">
                          <p>${renderSmokeIcon(ventas[propiedad])}${renderSmoke(ventas[propiedad])}</p>
                      </div>
                      <div class="restrict">
                          <p>${renderPetsIcon(ventas[propiedad])}${renderPets(ventas[propiedad])}</p>
                      </div>
                  </div>
              </div>
          </div>
      `;
  }
};

document.addEventListener('DOMContentLoaded', (event) => {
    render();
});