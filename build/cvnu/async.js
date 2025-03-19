async function loadCVUNLevels() {
    try {
        const response = await fetch('level.json');
        const data = await response.json();
        displayCVUNLevels(data);
    } catch (error) {
        console.error('Erreur lors du chargement des niveaux CVUN :', error);
    }
}

function displayCVUNLevels(data) {
    const cvunLevelsDiv = document.getElementById('cvun-levels');
    data.level.forEach(level => {
        const levelDiv = document.createElement('div');
        levelDiv.classList.add('level');
        levelDiv.innerHTML = `
            <h2>Niveau ${level.levelNumber}: ${level.name}</h2>
            <p>${level.description}</p>
            <h3>Capacités:</h3>
            <ul class="capabilities">
                ${level.capabilities.map(cap => `<li>${cap.description}</li>`).join('')}
            </ul>
        `;
        cvunLevelsDiv.appendChild(levelDiv);
    });
}

loadCVUNLevels();