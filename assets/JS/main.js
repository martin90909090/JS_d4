//Propiedades

//Propiedades en venta
const propiedad_1 = {
    id: 1,
    name: 'Apartamento de lujo en zona exclusiva',
    description: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    address: '123 Luxury Lane, Prestige Suburb, CA 45678',
    rooms: 4,
    bathrooms: 4,
    price: 500000,
    somke: false,
    pets: true,
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

//Propiedades en alquiler
const propiedad_7 = {
    id: 7,
    name: 'Apartamento en el centro de la ciudad',
    description: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo',
    address: 'Avda Del Mar N° 1000, 1700000 La Serena, Chile',
    rooms: 2,
    bathrooms: 2,
    price: 2000,
    somke: false,
    pets: true,
    img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60'
};

const propiedad_8 = {
    id: 8,
    name: 'Apartamento luminoso con vista al mar',
    description: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    address: '456 Ocean Avenue, Seaside Town, CA 56789',
    rooms: 3,
    bathrooms: 3,
    somke: true,
    pets: true,
    img: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
};

const propiedad_9 = {
    id: 9,
    name: 'Condominio moderno en zona residencial',
    description: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    address: '123 Main Street, Anytown, CA 91234',
    rooms: 2,
    bathrooms: 2,
    price: 2200,
    somke: false,
    pets: false,
    img: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60'
};

const propiedad_10 = {
    id: 10,
    name: 'Courtyard by Marriott Stockholm Kungsholmen',
    description: 'Este hotel elegante está situado en la isla de Kungsholmen, a 5 minutos a pie de la estación de metro Thorildsplan. Cuenta con conexión Wi-Fi gratuita y gimnasio gratuito. Dispone de habitaciones amplias, equipadas con tetera/cafetera y TV vía satélite',
    address: 'Rålambshovsleden 50, Kungsholmen, 11219 Estocolmo, Suecia',
    rooms: 1,
    bathrooms: 1,
    price: 300,
    somke: false,
    pets: true,
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439520922.jpg?k=963180d9dd1b72e672b946e3d53853caf4ea1f2d8a9a828ee3076cdedaa502bf&o=&hp=1'
};

const propiedad_11 = {
    id: 11,
    name: 'Radisson Blu Hotel Malmö',
    description: 'El Radisson Blu Hotel Malmö está a solo 5 minutos a pie de la estación central de Malmö, a pocas calles de las principales calles comerciales, y dispone de conexión WiFi gratuita, gimnasio y sauna',
    address: 'Östergatan 10, Norr, 211 25 Malmö, Suecia',
    rooms: 1,
    bathrooms: 1,
    price: 200,
    somke: false,
    pets: true,
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/286352934.jpg?k=623447ca3a9f1b9213b568ad5a9f594663d0b531e86c9ae16d87f66e5699611e&o=&hp=1'
};

const propiedad_12 = {
    id: 12,
    name: 'Refuge du Montenvers',
    description: 'Only accessible by train, departing from Montenvers-Mer de Glace Train Station, Refuge du Montenvers is a shelter-style hotel set in a 19th-century building and located at an altitude of 1913 metres in the Mont-Blanc mountain range. Free WiFi is available',
    address: 'MONTENVERS, 74400 Chamonix-Mont-Blanc, France',
    rooms: 1,
    bathrooms: 1,
    price: 200,
    somke: false,
    pets: true,
    img: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/268306041.jpg?k=6501fdf7d90062a31e42552baaba601f3ef5d7a729add1305861cccb5a8a3846&o=&hp=1'
};

const ventas = [propiedad_1, propiedad_2, propiedad_3, propiedad_4, propiedad_5, propiedad_6];
const alquileres = [propiedad_7, propiedad_8, propiedad_9, propiedad_10, propiedad_11, propiedad_12];
let ventasElement = document.getElementById('ventas');
let alquileresElement = document.getElementById('alquileres');

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

const render1 = () => {
    for (let propiedad = 0; propiedad <= 2; propiedad++) {
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

const render2 = () => {
    for (let propiedad = 0; propiedad <= 2; propiedad++) {
        alquileresElement.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${alquileres[propiedad].img}" alt="${alquileres[propiedad].name}">
                    <div class="card-body">
                        <h5 class="card-title">${alquileres[propiedad].name}</h5>
                        <p class="card-text">${alquileres[propiedad].description}</p>
                        <p><i class="fas fa-map-marker-alt"></i>${alquileres[propiedad].address}</p>
                        <p><i class="fas fa-bed"></i>${alquileres[propiedad].rooms}</p>
                        <p><i class="fas fa-bath"></i>${alquileres[propiedad].bathrooms}</p>
                        <p><i class="fas fa-dollar-sign"></i>${alquileres[propiedad].price}</p>
                        <div class="restrict">
                            <p>${renderSmokeIcon(alquileres[propiedad])}${renderSmoke(alquileres[propiedad])}</p>
                        </div>
                        <div class="restrict">
                            <p>${renderPetsIcon(alquileres[propiedad])}${renderPets(alquileres[propiedad])}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};

document.addEventListener('DOMContentLoaded', (event) => {
    render1();
    render2();
});

