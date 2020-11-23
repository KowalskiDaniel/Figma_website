var mymap = L.map('mapid').setView([51.785633663870584, 1.191490503996881], 5);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri'
}).addTo(mymap);

var markersContainer = [];

function onMapClick(event) {
    markersContainer.push(L.marker(event.latlng).addTo(mymap));
    console.log(markersContainer);
}

mymap.on('click', onMapClick)