document.getElementById("demandeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var nom = document.getElementById("nom").value;
    var matiere = document.getElementById("matiere").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    // Envoyer les données au serveur pour traitement
    // Exemple : fetch('/api/demandes', {method: 'POST', body: JSON.stringify({nom: nom, matiere: matiere})});
    document.getElementById("message").innerHTML = "Demande envoyée avec succès. Attendez une réponse dans les 24 heures.";
});
