
var typed = new Typed(".text", {
    strings: ["Designer " , "Developer", ],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
 

const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
});
// Initialisation de la carte avec un centre par défaut et un niveau de zoom
var map = L.map('map', {
    center: [-18.915746, 47.52159], // Coordonnées par défaut du centre
    zoom: 13 // Niveau de zoom par défaut
});

// Ajout d'une couche de tuiles à la carte
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Fonction pour trouver les coordonnées de l'utilisateur et définir la vue de la carte
function findMyCoordinates() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            // Définition de la vue de la carte sur la position actuelle de l'utilisateur
            map.setView([position.coords.latitude, position.coords.longitude], 18);
            // Ajout d'un marqueur à la position actuelle de l'utilisateur
            // L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
        }, (err) => {
            console.error(err.message);
        });
    } else {
        console.error("La géolocalisation n'est pas supportée par ce navigateur.");
    }
}

// Appel de la fonction pour trouver les coordonnées de l'utilisateur et définir la vue de la carte
findMyCoordinates();

// Création d'un popup pour afficher des informations lorsqu'un utilisateur clique sur la carte
var popup = L.popup();

// Fonction pour gérer les clics sur la carte
function onMapClick(e) {
    
    // var marker = L.marker(e.latlng).addTo(map);
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at  " + e.latlng.toString())
        .openOn(map);
}

// Ajout d'un écouteur d'événements pour les clics sur la carte
map.on('click', onMapClick);