
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
var map = L.map('map', {
    center: [51.505, -0.09], // Default center coordinates
    zoom: 13 // Default zoom level
});

// Add a tile layer to the map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function findMyCoordinates() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            // Set the map view to the user's current location
            map.setView([position.coords.latitude, position.coords.longitude], 18);
            map.marker([position.coords.latitude, position.coords.longitude]);
     
        }, (err) => {
            console.error(err.message);
        });
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
}

// Call the function to find user's coordinates and set map view
findMyCoordinates();