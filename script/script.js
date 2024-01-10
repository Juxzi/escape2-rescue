$(document).ready(function(){
    // Commencer l'aventure depuis la page d'accueil
    $("#commencerAventure").click(function() {
        gsap.to("#accueil", {y: -window.innerHeight, duration: 1, autoAlpha: 0});
        gsap.fromTo("#enigme1", {y: window.innerHeight, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 1});
    });

    // Vérification pour l'Énigme 1
    $("#verifierReponse1").click(function() {
        var reponse = $("#reponseEnigme1").val();
        if (reponse.toUpperCase() === "PIRATE") {
            $("#feedback1").text("Bonne réponse!");
            gsap.to("#enigme1", {y: -window.innerHeight, duration: 1, autoAlpha: 0});
            gsap.fromTo("#enigme2", {y: window.innerHeight, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 1});
        } else {
            $("#feedback1").text("Mauvaise réponse. Essayez encore.");
        }
    });

    // Vérification pour l'Énigme 2
    $("#verifierReponse2").click(function() {
        var reponse = $("#reponseEnigme2").val();
        if (reponse.toUpperCase() === "S-E-N-O") {
            $("#feedback2").text("Bonne réponse!");
            gsap.to("#enigme2", {y: -window.innerHeight, duration: 1, autoAlpha: 0});
            gsap.fromTo("#enigme3", {y: window.innerHeight, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 1});
        } else {
            $("#feedback2").text("Mauvaise réponse. Le coffre reste fermé.");
        }
    });
// Vérification pour l'Énigme 3
$("#verifierReponse3").click(function() {
    var reponse = $("#reponseEnigme3").val();
    if (reponse.toUpperCase() === "ÎLE DU CRÂNE") { // La bonne réponse est "Île du Crâne"
        $("#feedback3").text("Bonne réponse! Vous avez trouvé l'emplacement du trésor caché.");
        gsap.to("#enigme3", {y: -window.innerHeight, duration: 1, autoAlpha: 0});
        gsap.fromTo("#enigme4", {y: window.innerHeight, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 1});
    } else {
        $("#feedback3").text("Mauvaise réponse. Peut-être devriez-vous revoir la carte.");
    }
});
    // Vérification pour l'Énigme 4
$("#verifierReponse4").click(function() {
    var reponse = $("#reponseEnigme4").val();
    if (reponse === "13") { // Le prochain nombre est 13, car c'est une série de nombres premiers.
        $("#feedback4").text("Bonne réponse! Vous avez déchiffré le code.");
        gsap.to("#enigme4", {y: -window.innerHeight, duration: 1, autoAlpha: 0});
        gsap.fromTo("#enigme5", {y: window.innerHeight, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 1});
    } else {
        $("#feedback4").text("Mauvaise réponse. Ce code semble complexe, essayez de trouver le modèle.");
    }
});
$("#verifierReponse5").click(function() {
    var reponse = $("#reponseEnigme5").val().toLowerCase();
    if (reponse === "barbe noire" || reponse === "barbenoire") {
        $("#feedback5").text("Bonne réponse! Vous avez identifié le légendaire Barbe Noire.");
        gsap.to("#enigme5", {y: -window.innerHeight, duration: 1, autoAlpha: 0});
        gsap.fromTo("#enigme6", {y: window.innerHeight, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 1});
    } else {
        $("#feedback5").text("Mauvaise réponse. Cet individu reste un mystère.");
    }
});
// Vérification pour l'Énigme 6
$("#verifierReponse6").click(function() {
    var reponse = $("#reponseEnigme6").val().toLowerCase();
    if (reponse === "souvenir") {
        $("#feedback6").text("Bonne réponse! Le trésor le plus précieux est un souvenir.");
        gsap.to("#enigme6", {y: -window.innerHeight, duration: 1, autoAlpha: 0});
        gsap.fromTo("#enigme7", {y: window.innerHeight, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 1});
    } else {
        $("#feedback6").text("Mauvaise réponse. Pensez à ce qui peut être plus précieux que l'or et les pierres précieuses.");
    }
});
// Vérification pour l'Énigme 7
$("#verifierReponse7").click(function() {
    var reponse = $("#reponseEnigme7").val().toLowerCase();
    if (reponse === "r6xv6zu") {
        $("#feedback7").text("Bonne réponse!");
        gsap.to("#enigme7", {y: -window.innerHeight, duration: 1, autoAlpha: 0});
        gsap.fromTo("#fin", {y: window.innerHeight, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 1});
    } else {
        $("#feedback7").text("Mauvaise réponse. recommence");
    }
});
// Continuez avec d'autres gestionnaires d'événements pour les énigmes supplémentaires

});
