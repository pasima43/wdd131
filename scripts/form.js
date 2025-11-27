// Data source for product names
const products = [
    { id: 'deluxeBlender', name: 'Deluxe Blender' },
    { id: 'smartToaster', name: 'Smart Toaster' },
    { id: 'ergonomicChair', name: 'Ergonomic Chair' },
    { id: 'wirelessHeadphones', name: 'Wireless Headphones' },
    { id: 'portableSpeaker', name: 'Portable Speaker' },
    { id: 'robotVacuum', name: 'Robot Vacuum Cleaner' },
    { id: 'airFryer', name: 'Air Fryer XL' }
];

document.addEventListener('DOMContentLoaded', () => {
    const productNameSelect = document.getElementById('productName');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id; // Use id for the option's value
        option.textContent = product.name; // Use name for the displayed text
        productNameSelect.appendChild(option);
    });
});