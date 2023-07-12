// Array de tallas y su stock correspondiente
const sizes = [{
        size: 'S',
        stock: 5
    },
    {
        size: 'M',
        stock: 3
    },
    {
        size: 'L',
        stock: 7
    },
    {
        size: 'XL',
        stock: 2
    }
];

let selectedSize = null;

// Función para actualizar el stock disponible
function updateStock() {
    const stockElement = document.getElementById('stock-count');
    if (selectedSize) {
        const size = sizes.find(item => item.size === selectedSize);
        stockElement.textContent = size ? size.stock : '0';
    } else {
        stockElement.textContent = '0';
    }
}

// Event listener para los botones de tallas
const sizeButtons = document.querySelectorAll('.size');
sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover la clase 'active' de todos los botones
        sizeButtons.forEach(btn => btn.classList.remove('active'));

        // Agregar la clase 'active' al botón seleccionado
        button.classList.add('active');

        // Actualizar la talla seleccionada
        selectedSize = button.textContent;

        // Actualizar el stock disponible
        updateStock();
    });
});