const map = L.map('mapid').setView([-9.974057,-67.8212127], 20);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map);

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})

const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240
}).setContent('Educandario Santa Margarida <a href="orphanages.html" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')

L
.marker([-9.974057,-67.8212127], { icon })
.addTo(map)
