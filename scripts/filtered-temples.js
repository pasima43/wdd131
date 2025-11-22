const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    },
    {
        templeName: "Provo City Center",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        area: 85085,
        imageUrl: "https://assets.churchofjesuschrist.org/ff/8c/ff8c7df0c3ca5323549b8f87790ec42c0ce18662/provo_city_center_temple_exterior.jpeg",
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 40000,
        imageUrl: "https://www.churchofjesuschrist.org/bc/content/ldsorg/locations/visitors-centers/rome-italy-visitors-center/rome-temple-visitors-center-temple-thumb-3.jpg",
    },
    {
        templeName: "Winnipeg Manitoba",
        location: "Winnipeg, Manitoba, Canada",
        dedicated: "2021, October, 31",
        area: 10700,
        imageUrl: "https://newsroom.churchofjesuschrist.org/media/960x720/6697a8b6cf0f20105d786fc10ce6858a4aada587Winnipeg_Temple_Cornerstone.chn_DC_39-1024x683.jpg",
    },
];

const templeContainer = document.getElementById('temple-container');
const homeButton = document.getElementById('home');
const oldButton = document.getElementById('old');
const newButton = document.getElementById('new');
const largeButton = document.getElementById('large');
const smallButton = document.getElementById('small');

function displayTemples(templeList) {
    templeContainer.innerHTML = '';
    templeList.forEach(temple => {
        const card = document.createElement('div');
        card.classList.add('temple-card');
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        const location = document.createElement('p');
        location.textContent = `Location: ${temple.location}`;
        const dedicated = document.createElement('p');
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        const size = document.createElement('p');
        size.textContent = `Size: ${temple.area} sq ft`;
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = 'lazy';
        card.appendChild(img);
        card.appendChild(h3);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(size);
        templeContainer.appendChild(card);
    });
}

function filterTemples(filterType) {
    let filteredTemples = [];
    switch (filterType) {
        case 'old':
            filteredTemples = temples.filter(temple => parseInt(temple.dedicated.substring(0, 4)) < 1900);
            break;
        case 'new':
            filteredTemples = temples.filter(temple => parseInt(temple.dedicated.substring(0, 4)) > 2000);
            break;
        case 'large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        default:
            filteredTemples = temples;
            break;
    }
    displayTemples(filteredTemples);
}

homeButton.addEventListener('click', () => filterTemples('home'));
oldButton.addEventListener('click', () => filterTemples('old'));
newButton.addEventListener('click', () => filterTemples('new'));
largeButton.addEventListener('click', () => filterTemples('large'));
smallButton.addEventListener('click', () => filterTemples('small'));

displayTemples(temples);

const nav = document.querySelector('nav ul');
const hamburger = document.createElement('button');
hamburger.textContent = '☰';
hamburger.setAttribute('aria-label', 'Toggle Navigation');
document.querySelector('header').insertBefore(hamburger, nav);

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
    hamburger.textContent = nav.classList.contains('show') ? '✕' : '☰';
});