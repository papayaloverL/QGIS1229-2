ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3826").setExtent([129825.938261, 2510271.540029, 235498.142104, 2584620.126378]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_temple_1 = new ol.format.GeoJSON();
var features_temple_1 = format_temple_1.readFeatures(json_temple_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3826'});
var jsonSource_temple_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_temple_1.addFeatures(features_temple_1);
var lyr_temple_1 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_temple_1, 
                radius: 50 * 2,
                gradient: ['#f1eef6', '#d7b5d8', '#df65b0', '#dd1c77', '#980043'],
                blur: 15,
                shadow: 250,
                title: 'temple'
            });
var format_2_2 = new ol.format.GeoJSON();
var features_2_2 = format_2_2.readFeatures(json_2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3826'});
var jsonSource_2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_2.addFeatures(features_2_2);
var lyr_2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2_2, 
                style: style_2_2,
                interactive: true,
                title: '<img src="styles/legend/2_2.png" /> 地下道2'
            });
var format_busstip_3 = new ol.format.GeoJSON();
var features_busstip_3 = format_busstip_3.readFeatures(json_busstip_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3826'});
var jsonSource_busstip_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_busstip_3.addFeatures(features_busstip_3);
var lyr_busstip_3 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_busstip_3, 
                radius: 50 * 2,
                gradient: ['#f0f9e8', '#bae4bc', '#7bccc4', '#43a2ca', '#0868ac'],
                blur: 15,
                shadow: 250,
                title: 'bus stip'
            });
var format_4_4 = new ol.format.GeoJSON();
var features_4_4 = format_4_4.readFeatures(json_4_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3826'});
var jsonSource_4_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4_4.addFeatures(features_4_4);
var lyr_4_4 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_4_4, 
                radius: 10 * 2,
                gradient: ['#fef0d9', '#fdcc8a', '#fc8d59', '#e34a33', '#b30000'],
                blur: 15,
                shadow: 250,
                title: '公廁4'
            });

        var lyr_GoogleRoads_5 = new ol.layer.Tile({
            'title': 'Google Roads',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_temple_1.setVisible(true);lyr_2_2.setVisible(true);lyr_busstip_3.setVisible(true);lyr_4_4.setVisible(true);lyr_GoogleRoads_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_temple_1,lyr_2_2,lyr_busstip_3,lyr_4_4,lyr_GoogleRoads_5];
lyr_2_2.set('fieldAliases', {'編號': '編號', });
lyr_2_2.set('fieldImages', {'編號': 'TextEdit', });
lyr_2_2.set('fieldLabels', {'編號': 'header label', });
lyr_2_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});