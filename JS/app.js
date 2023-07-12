class Casco {
    constructor(id, imagen, nombre, precio) {
        this.id = id;
        this.imagen = imagen;
        this.nombre = nombre;
        this.precio = precio;
    }
};

const cascos = [
    new Casco(1, "../assets/images/casco1.png", "V1 Morphic Helmet", 864),
    new Casco(2, "../assets/images/casco2.png", "V1 GOAT Vertigo Helmet", 912),
    new Casco(3, "../assets/images/casco3.png", "Youth V1 Toxsyk Helmet", 499),
    new Casco(4, ".../assets/images/casco4.png", "V1 Bnkr Helmet", 1300),
    new Casco(5, "../assets/images/casco5.png", "V1 Dpth Helmet", 999),
    new Casco(5, "../assets/images/casco6.png", "Youth V1 Nuklr Helmet", 575),
    new Casco(7, "../assets/images/casco7.png", "V3 RS Eyeris Helmet", 480),
    new Casco(8, "../assets/images/casco8.png", "V3 RS Slait Helmet", 599),
];

const productContainer = document.querySelector(".helmets-container");

let carrito = [];

cascos.forEach(casco => {
    const productoSection = document.createElement("section");

    productoSection.innerHTML = `
    <div class="cards">
    <img src="${casco.imagen}"alt="${casco.nombre}">
    <h3>${casco.nombre}</h3>
    <p>$${casco.precio}</p>
    <button class="agregar-carrito">Agregar</button>
    </div>
    `;

    productContainer.appendChild(productoSection);
});