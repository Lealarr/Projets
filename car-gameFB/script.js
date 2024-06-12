// Configuration de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAaXjJ5bHb_M-LEzdqgWmqwAhUoHKg1VE4",
    authDomain: "card-game-86bf7.firebaseapp.com",
    projectId: "card-game-86bf7",
    storageBucket: "card-game-86bf7.appspot.com",
    messagingSenderId: "776555216525",
    appId: "1:776555216525:web:f93f3c566af0666927ecc4"
};

// Initialisation de Firebase et récupération de la référence de la base de données
firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();

// Fonction pour soumettre les personnages
async function submitCharacter(event) {
    event.preventDefault(); // Empêche le comportement par défaut de soumission du formulaire

    const characters = document.querySelectorAll('.card');
    let characterAdded = false; // Booléen pour vérifier si au moins un personnage est ajouté
    const promises = []; // Stocke les promesses pour les opérations Firebase

    // Pour chaque carte, vérifie si la checkbox est cochée
    characters.forEach(card => {
        const checkbox = card.querySelector('input[type="checkbox"]');
        if (checkbox.checked) {
            const name = card.querySelector('input[type="text"]').value.trim();
            const characterClass = checkbox.value;
            const weapon = card.querySelector('select').value;

            // Vérifie si le nom est vide
            if (name === "") {
                alert("Veuillez entrer un nom pour le personnage.");
                return; // Sort de la boucle si le nom est vide
            }
            // Crée une nouvelle référence pour le personnage dans la base de données
            const characterRef = dbRef.child('characters').push();
            // Ajoute la promesse retournée par set à notre tableau de promesses
            promises.push(characterRef.set({
                name: name,
                class: characterClass,
                weapon: weapon
            }).then(() => {
                characterAdded = true;
                console.log("Personnage ajouté avec succès !");
            }).catch(error => {
                console.error("Erreur lors de l'ajout du personnage :", error);
            }));
        }
    });

    // Attend que toutes les promesses dans le tableau soient résolues
    await Promise.all(promises);

    // Affiche le message approprié après l'ajout des personnages
    if (characterAdded) {
        alert("Personnage(s) ajouté(s) avec succès !");
    } else {
        alert("Veuillez sélectionner au moins un personnage.");
    }
}

// Attache un écouteur d'événement au bouton de soumission pour la fonction submitCharacter
document.addEventListener('DOMContentLoaded', () => { 
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener("click", submitCharacter);

    // Sélection de toutes les checkboxes dans les cartes
    const checkboxes = document.querySelectorAll('.card input[type="checkbox"]');

    // Pour chaque checkbox, attache un écouteur d'événement pour zoomer la carte
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const card = this.closest('.card');
            // Ajoute ou retire la classe 'card-zoom' selon l'état de la checkbox
            if (this.checked) {
                card.classList.add('card-zoom');
            } else {
                card.classList.remove('card-zoom');
            }
        });
    });
});
