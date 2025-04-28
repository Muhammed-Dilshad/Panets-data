// Sample Planet Data
const planets = [
    { name: 'Earth', distance: '149.6 million km', radius: '6,371 km', orbitalPeriod: '365 days' },
    { name: 'Mars', distance: '227.9 million km', radius: '3,396 km', orbitalPeriod: '687 days' },
    { name: 'Jupiter', distance: '778.3 million km', radius: '69,911 km', orbitalPeriod: '4,333 days' },
    // Add more planets here
];

// Function to render the planet table
function renderTable() {
    const tableBody = document.querySelector('#planet-table tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    planets.forEach(planet => {
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${planet.name}</td>
      <td>${planet.distance}</td>
      <td>${planet.radius}</td>
      <td>${planet.orbitalPeriod}</td>
      <td><button onclick="deletePlanet('${planet.name}')">Delete</button></td>
    `;
        tableBody.appendChild(row);
    });
}

// Function to add a new planet
function addPlanet() {
    const planetName = prompt('Enter planet name:');
    const planetDistance = prompt('Enter distance from Sun:');
    const planetRadius = prompt('Enter planet radius:');
    const planetOrbitalPeriod = prompt('Enter orbital period:');

    const newPlanet = {
        name: planetName,
        distance: planetDistance,
        radius: planetRadius,
        orbitalPeriod: planetOrbitalPeriod,
    };

    planets.push(newPlanet);
    renderTable();
}

// Function to delete a planet
function deletePlanet(planetName) {
    const index = planets.findIndex(planet => planet.name === planetName);
    if (index > -1) {
        planets.splice(index, 1);
        renderTable();
    }
}

// Initial render
renderTable();
