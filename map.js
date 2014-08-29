L.mapbox.accessToken = 'pk.eyJ1IjoiamFtZXMtbGFuZS1jb25rbGluZyIsImEiOiJ3RHBOc1BZIn0.edCFqVis7qgHPRgdq0WYsA';
var map = L.mapbox.map('map')
    .addLayer(L.tileLayer('http://tiles.osm.moabi.org/moabi_base/{z}/{x}/{y}.png'))
    .setView([-2, 22.83], 6);

