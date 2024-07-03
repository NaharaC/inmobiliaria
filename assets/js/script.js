const venta = document.getElementById('venta')
const alquiler = document.getElementById('alquiler')

const home_venta = document.getElementById('home_venta')
const home_alquiler = document.getElementById('home_alquiler')


if (venta) {
    renderData(propiedades_venta, venta) 
}else if (alquiler){
    renderData(propiedades_alquiler, alquiler)
} else {
    renderData(propiedades_venta, home_venta, 3)
    renderData(propiedades_alquiler, home_alquiler, 3)
}

function renderData(propiedades, container, limit = 0) {
    let cards = ''
    if (limit) {
        for (let i = 0; i < limit; i++) {
            cards += createCard(propiedades[i])
        }
        container.innerHTML = cards
    } else {
        for (const element of propiedades) {
            cards += createCard(element)
        }
        container.innerHTML = cards
    }
}

function createCard (propiedad) {
    return `         
        <div class="col-md-4 mb-4">
          <div class="card">
            <img
              src= ${propiedad.src}
              class="card-img-top" alt="Imagen de la propiedad" />
            <div class="card-body">
              <h5 class="card-title">
                ${propiedad.nombre}
              </h5>
              <p class="card-text">
                ${propiedad.descripcion}
              </p>
              <p>
                <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
              </p>
              <p>
                <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                <i class="fas fa-bath"></i> ${propiedad.banios} Baños
              </p>
              <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>

              ${propiedad.smoke ? 
                ` 
                <p class="text-success">
                    <i class="fas fa-smoking"></i> Permitido fumar
                </p>
                ` 
                :
                `
                <p class="text-danger">
                    <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>
                `
              }

              ${propiedad.pets ? 
                ` 
                <p class="text-success">
                    <i class="fas fa-paw"></i> Mascotas permitidas
                </p>
                ` 
                :
                `
                <p class="text-danger">
                    <i class="fas fa-ban"></i> No se permiten mascotas
                </p>
                `
              }
            </div>
          </div>
        </div>
    `
} 