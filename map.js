L.mapbox.accessToken = 'pk.eyJ1IjoiamFtZXMtbGFuZS1jb25rbGluZyIsImEiOiJ3RHBOc1BZIn0.edCFqVis7qgHPRgdq0WYsA';
var map = L.mapbox.map('map')
    .addLayer(L.tileLayer('http://tiles.osm.moabi.org/moabi_base/{z}/{x}/{y}.png'));
    // .setView([-2, 22.83], 6);

var data = L.mapbox.featureLayer()
        .loadURL('data.geojson')
        .on('ready', function(){
            this.eachLayer(function(marker){
                marker.setIcon(L.mapbox.marker.icon({
                            'marker-color': '#5DAF01',
                            'marker-size': 'small'
                        }));
            });
            map.fitBounds(this.getBounds());
        })
        .addTo(map);
