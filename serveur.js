const express = require('express');
    const app = express();
    const port = 31401; // Ou un autre port de votre choix
    
    // Servir des fichiers statiques depuis le répertoire 'public'
    app.use(express.static('public'));
    
    // Route pour la page d'accueil
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/public/index.html'); // ou un autre fichier html
    });
    
    // Lier le serveur à l'adresse IP locale
    app.listen(port, '192.168.1.75', () => {
        console.log(`Serveur en écoute sur http://192.168.75:${port}`);
    });