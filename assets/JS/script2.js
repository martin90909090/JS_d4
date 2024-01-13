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

const alquileres = [propiedad_7, propiedad_8, propiedad_9, propiedad_10, propiedad_11, propiedad_12];

const alquileresElement = document.getElementById('alquileres');

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
  for (let propiedad = 0; propiedad <= alquileres.length; propiedad++) {
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
    render();
});