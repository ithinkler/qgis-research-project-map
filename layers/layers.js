var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRISatellite_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_DarkMatterretina_2 = new ol.layer.Tile({
            'title': 'Dark Matter (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_CategoryArts_3 = new ol.format.GeoJSON();
var features_CategoryArts_3 = format_CategoryArts_3.readFeatures(json_CategoryArts_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CategoryArts_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CategoryArts_3.addFeatures(features_CategoryArts_3);
var lyr_CategoryArts_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CategoryArts_3, 
                style: style_CategoryArts_3,
                popuplayertitle: 'Category: Arts',
                interactive: true,
                title: '<img src="styles/legend/CategoryArts_3.png" /> Category: Arts'
            });
var format_CategoryCounselling_4 = new ol.format.GeoJSON();
var features_CategoryCounselling_4 = format_CategoryCounselling_4.readFeatures(json_CategoryCounselling_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CategoryCounselling_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CategoryCounselling_4.addFeatures(features_CategoryCounselling_4);
var lyr_CategoryCounselling_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CategoryCounselling_4, 
                style: style_CategoryCounselling_4,
                popuplayertitle: 'Category: Counselling',
                interactive: true,
                title: '<img src="styles/legend/CategoryCounselling_4.png" /> Category: Counselling'
            });
var format_CategoryCrisis_5 = new ol.format.GeoJSON();
var features_CategoryCrisis_5 = format_CategoryCrisis_5.readFeatures(json_CategoryCrisis_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CategoryCrisis_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CategoryCrisis_5.addFeatures(features_CategoryCrisis_5);
var lyr_CategoryCrisis_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CategoryCrisis_5, 
                style: style_CategoryCrisis_5,
                popuplayertitle: 'Category: Crisis',
                interactive: true,
                title: '<img src="styles/legend/CategoryCrisis_5.png" /> Category: Crisis'
            });
var format_CategoryFlex_6 = new ol.format.GeoJSON();
var features_CategoryFlex_6 = format_CategoryFlex_6.readFeatures(json_CategoryFlex_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CategoryFlex_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CategoryFlex_6.addFeatures(features_CategoryFlex_6);
var lyr_CategoryFlex_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CategoryFlex_6, 
                style: style_CategoryFlex_6,
                popuplayertitle: 'Category: Flex',
                interactive: true,
                title: '<img src="styles/legend/CategoryFlex_6.png" /> Category: Flex'
            });
var format_CategoryGames_7 = new ol.format.GeoJSON();
var features_CategoryGames_7 = format_CategoryGames_7.readFeatures(json_CategoryGames_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CategoryGames_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CategoryGames_7.addFeatures(features_CategoryGames_7);
var lyr_CategoryGames_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CategoryGames_7, 
                style: style_CategoryGames_7,
                popuplayertitle: 'Category: Games',
                interactive: true,
                title: '<img src="styles/legend/CategoryGames_7.png" /> Category: Games'
            });
var format_CategoryGroup_8 = new ol.format.GeoJSON();
var features_CategoryGroup_8 = format_CategoryGroup_8.readFeatures(json_CategoryGroup_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CategoryGroup_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CategoryGroup_8.addFeatures(features_CategoryGroup_8);
var lyr_CategoryGroup_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CategoryGroup_8, 
                style: style_CategoryGroup_8,
                popuplayertitle: 'Category: Group',
                interactive: true,
                title: '<img src="styles/legend/CategoryGroup_8.png" /> Category: Group'
            });
var format_CategoryLibrary_9 = new ol.format.GeoJSON();
var features_CategoryLibrary_9 = format_CategoryLibrary_9.readFeatures(json_CategoryLibrary_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CategoryLibrary_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CategoryLibrary_9.addFeatures(features_CategoryLibrary_9);
var lyr_CategoryLibrary_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CategoryLibrary_9, 
                style: style_CategoryLibrary_9,
                popuplayertitle: 'Category: Library',
                interactive: true,
                title: '<img src="styles/legend/CategoryLibrary_9.png" /> Category: Library'
            });
var format_CategorySTEM_10 = new ol.format.GeoJSON();
var features_CategorySTEM_10 = format_CategorySTEM_10.readFeatures(json_CategorySTEM_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CategorySTEM_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CategorySTEM_10.addFeatures(features_CategorySTEM_10);
var lyr_CategorySTEM_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CategorySTEM_10, 
                style: style_CategorySTEM_10,
                popuplayertitle: 'Category - STEM',
                interactive: true,
                title: '<img src="styles/legend/CategorySTEM_10.png" /> Category - STEM'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ESRISatellite_1.setVisible(true);lyr_DarkMatterretina_2.setVisible(true);lyr_CategoryArts_3.setVisible(true);lyr_CategoryCounselling_4.setVisible(true);lyr_CategoryCrisis_5.setVisible(true);lyr_CategoryFlex_6.setVisible(true);lyr_CategoryGames_7.setVisible(true);lyr_CategoryGroup_8.setVisible(true);lyr_CategoryLibrary_9.setVisible(true);lyr_CategorySTEM_10.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ESRISatellite_1,lyr_DarkMatterretina_2,lyr_CategoryArts_3,lyr_CategoryCounselling_4,lyr_CategoryCrisis_5,lyr_CategoryFlex_6,lyr_CategoryGames_7,lyr_CategoryGroup_8,lyr_CategoryLibrary_9,lyr_CategorySTEM_10];
lyr_CategoryArts_3.set('fieldAliases', {'Organization': 'Organization', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Program Name': 'Program Name', 'Demographic': 'Demographic', 'Nature of Digital Practice': 'Nature of Digital Practice', 'Snapshot': 'Snapshot', 'Organization Address or Program Site': 'Organization Address or Program Site', 'Link': 'Link', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'field_15': 'field_15', 'field_16': 'field_16', 'field_17': 'field_17', 'field_18': 'field_18', 'field_19': 'field_19', 'field_20': 'field_20', 'field_21': 'field_21', 'field_22': 'field_22', 'field_23': 'field_23', 'field_24': 'field_24', 'field_25': 'field_25', 'field_26': 'field_26', 'field_27': 'field_27', });
lyr_CategoryCounselling_4.set('fieldAliases', {'Organization': 'Organization', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Program Name': 'Program Name', 'Demographic': 'Demographic', 'Nature of Digital Practice': 'Nature of Digital Practice', 'Snapshot': 'Snapshot', 'Organization Address or Program Site': 'Organization Address or Program Site', 'Link': 'Link', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'field_15': 'field_15', 'field_16': 'field_16', 'field_17': 'field_17', 'field_18': 'field_18', 'field_19': 'field_19', 'field_20': 'field_20', 'field_21': 'field_21', 'field_22': 'field_22', 'field_23': 'field_23', 'field_24': 'field_24', 'field_25': 'field_25', 'field_26': 'field_26', 'field_27': 'field_27', });
lyr_CategoryCrisis_5.set('fieldAliases', {'Organization': 'Organization', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Program Name': 'Program Name', 'Demographic': 'Demographic', 'Nature of Digital Practice': 'Nature of Digital Practice', 'Snapshot': 'Snapshot', 'Organization Address or Program Site': 'Organization Address or Program Site', 'Link': 'Link', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'field_15': 'field_15', 'field_16': 'field_16', 'field_17': 'field_17', 'field_18': 'field_18', 'field_19': 'field_19', 'field_20': 'field_20', 'field_21': 'field_21', 'field_22': 'field_22', 'field_23': 'field_23', 'field_24': 'field_24', 'field_25': 'field_25', 'field_26': 'field_26', 'field_27': 'field_27', });
lyr_CategoryFlex_6.set('fieldAliases', {'Organization': 'Organization', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Program Name': 'Program Name', 'Demographic': 'Demographic', 'Nature of Digital Practice': 'Nature of Digital Practice', 'Snapshot': 'Snapshot', 'Organization Address or Program Site': 'Organization Address or Program Site', 'Link': 'Link', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'field_15': 'field_15', 'field_16': 'field_16', 'field_17': 'field_17', 'field_18': 'field_18', 'field_19': 'field_19', 'field_20': 'field_20', 'field_21': 'field_21', 'field_22': 'field_22', 'field_23': 'field_23', 'field_24': 'field_24', 'field_25': 'field_25', 'field_26': 'field_26', 'field_27': 'field_27', });
lyr_CategoryGames_7.set('fieldAliases', {'Organization': 'Organization', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Program Name': 'Program Name', 'Demographic': 'Demographic', 'Nature of Digital Practice': 'Nature of Digital Practice', 'Snapshot': 'Snapshot', 'Organization Address or Program Site': 'Organization Address or Program Site', 'Link': 'Link', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'field_15': 'field_15', 'field_16': 'field_16', 'field_17': 'field_17', 'field_18': 'field_18', 'field_19': 'field_19', 'field_20': 'field_20', 'field_21': 'field_21', 'field_22': 'field_22', 'field_23': 'field_23', 'field_24': 'field_24', 'field_25': 'field_25', 'field_26': 'field_26', 'field_27': 'field_27', });
lyr_CategoryGroup_8.set('fieldAliases', {'Organization': 'Organization', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Program Name': 'Program Name', 'Demographic': 'Demographic', 'Nature of Digital Practice': 'Nature of Digital Practice', 'Snapshot': 'Snapshot', 'Organization Address or Program Site': 'Organization Address or Program Site', 'Link': 'Link', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'field_15': 'field_15', 'field_16': 'field_16', 'field_17': 'field_17', 'field_18': 'field_18', 'field_19': 'field_19', 'field_20': 'field_20', 'field_21': 'field_21', 'field_22': 'field_22', 'field_23': 'field_23', 'field_24': 'field_24', 'field_25': 'field_25', 'field_26': 'field_26', 'field_27': 'field_27', });
lyr_CategoryLibrary_9.set('fieldAliases', {'Organization': 'Organization', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Program Name': 'Program Name', 'Demographic': 'Demographic', 'Nature of Digital Practice': 'Nature of Digital Practice', 'Snapshot': 'Snapshot', 'Organization Address or Program Site': 'Organization Address or Program Site', 'Link': 'Link', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'field_15': 'field_15', 'field_16': 'field_16', 'field_17': 'field_17', 'field_18': 'field_18', 'field_19': 'field_19', 'field_20': 'field_20', 'field_21': 'field_21', 'field_22': 'field_22', 'field_23': 'field_23', 'field_24': 'field_24', 'field_25': 'field_25', 'field_26': 'field_26', 'field_27': 'field_27', });
lyr_CategorySTEM_10.set('fieldAliases', {'Organization': 'Organization', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Program Name': 'Program Name', 'Demographic': 'Demographic', 'Nature of Digital Practice': 'Nature of Digital Practice', 'Snapshot': 'Snapshot', 'Organization Address or Program Site': 'Organization Address or Program Site', 'Link': 'Link', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'field_15': 'field_15', 'field_16': 'field_16', 'field_17': 'field_17', 'field_18': 'field_18', 'field_19': 'field_19', 'field_20': 'field_20', 'field_21': 'field_21', 'field_22': 'field_22', 'field_23': 'field_23', 'field_24': 'field_24', 'field_25': 'field_25', 'field_26': 'field_26', 'field_27': 'field_27', });
lyr_CategoryArts_3.set('fieldImages', {'Organization': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Program Name': 'TextEdit', 'Demographic': 'TextEdit', 'Nature of Digital Practice': 'TextEdit', 'Snapshot': 'TextEdit', 'Organization Address or Program Site': 'TextEdit', 'Link': 'TextEdit', 'field_10': 'Hidden', 'field_11': 'Hidden', 'field_12': 'Hidden', 'field_13': 'Hidden', 'field_14': 'Hidden', 'field_15': 'Hidden', 'field_16': 'Hidden', 'field_17': 'Hidden', 'field_18': 'Hidden', 'field_19': 'Hidden', 'field_20': 'Hidden', 'field_21': 'Hidden', 'field_22': 'Hidden', 'field_23': 'Hidden', 'field_24': 'Hidden', 'field_25': 'Hidden', 'field_26': 'Hidden', 'field_27': 'Hidden', });
lyr_CategoryCounselling_4.set('fieldImages', {'Organization': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Program Name': 'TextEdit', 'Demographic': 'TextEdit', 'Nature of Digital Practice': 'TextEdit', 'Snapshot': 'TextEdit', 'Organization Address or Program Site': 'TextEdit', 'Link': 'TextEdit', 'field_10': 'Hidden', 'field_11': 'Hidden', 'field_12': 'Hidden', 'field_13': 'Hidden', 'field_14': 'Hidden', 'field_15': 'Hidden', 'field_16': 'Hidden', 'field_17': 'Hidden', 'field_18': 'Hidden', 'field_19': 'Hidden', 'field_20': 'Hidden', 'field_21': 'Hidden', 'field_22': 'Hidden', 'field_23': 'Hidden', 'field_24': 'Hidden', 'field_25': 'Hidden', 'field_26': 'Hidden', 'field_27': 'Hidden', });
lyr_CategoryCrisis_5.set('fieldImages', {'Organization': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Program Name': 'TextEdit', 'Demographic': 'TextEdit', 'Nature of Digital Practice': 'TextEdit', 'Snapshot': 'TextEdit', 'Organization Address or Program Site': 'TextEdit', 'Link': 'TextEdit', 'field_10': 'Hidden', 'field_11': 'Hidden', 'field_12': 'Hidden', 'field_13': 'Hidden', 'field_14': 'Hidden', 'field_15': 'Hidden', 'field_16': 'Hidden', 'field_17': 'Hidden', 'field_18': 'Hidden', 'field_19': 'Hidden', 'field_20': 'Hidden', 'field_21': 'Hidden', 'field_22': 'Hidden', 'field_23': 'Hidden', 'field_24': 'Hidden', 'field_25': 'Hidden', 'field_26': 'Hidden', 'field_27': 'Hidden', });
lyr_CategoryFlex_6.set('fieldImages', {'Organization': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Program Name': 'TextEdit', 'Demographic': 'TextEdit', 'Nature of Digital Practice': 'TextEdit', 'Snapshot': 'TextEdit', 'Organization Address or Program Site': 'TextEdit', 'Link': 'TextEdit', 'field_10': 'Hidden', 'field_11': 'Hidden', 'field_12': 'Hidden', 'field_13': 'Hidden', 'field_14': 'Hidden', 'field_15': 'Hidden', 'field_16': 'Hidden', 'field_17': 'Hidden', 'field_18': 'Hidden', 'field_19': 'Hidden', 'field_20': 'Hidden', 'field_21': 'Hidden', 'field_22': 'Hidden', 'field_23': 'Hidden', 'field_24': 'Hidden', 'field_25': 'Hidden', 'field_26': 'Hidden', 'field_27': 'Hidden', });
lyr_CategoryGames_7.set('fieldImages', {'Organization': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Program Name': 'TextEdit', 'Demographic': 'TextEdit', 'Nature of Digital Practice': 'TextEdit', 'Snapshot': 'TextEdit', 'Organization Address or Program Site': 'TextEdit', 'Link': 'TextEdit', 'field_10': 'Hidden', 'field_11': 'Hidden', 'field_12': 'Hidden', 'field_13': 'Hidden', 'field_14': 'Hidden', 'field_15': 'Hidden', 'field_16': 'Hidden', 'field_17': 'Hidden', 'field_18': 'Hidden', 'field_19': 'Hidden', 'field_20': 'Hidden', 'field_21': 'Hidden', 'field_22': 'Hidden', 'field_23': 'Hidden', 'field_24': 'Hidden', 'field_25': 'Hidden', 'field_26': 'Hidden', 'field_27': 'Hidden', });
lyr_CategoryGroup_8.set('fieldImages', {'Organization': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Program Name': 'TextEdit', 'Demographic': 'TextEdit', 'Nature of Digital Practice': 'TextEdit', 'Snapshot': 'TextEdit', 'Organization Address or Program Site': 'TextEdit', 'Link': 'TextEdit', 'field_10': 'Hidden', 'field_11': 'Hidden', 'field_12': 'Hidden', 'field_13': 'Hidden', 'field_14': 'Hidden', 'field_15': 'Hidden', 'field_16': 'Hidden', 'field_17': 'Hidden', 'field_18': 'Hidden', 'field_19': 'Hidden', 'field_20': 'Hidden', 'field_21': 'Hidden', 'field_22': 'Hidden', 'field_23': 'Hidden', 'field_24': 'Hidden', 'field_25': 'Hidden', 'field_26': 'Hidden', 'field_27': 'Hidden', });
lyr_CategoryLibrary_9.set('fieldImages', {'Organization': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Program Name': 'TextEdit', 'Demographic': 'TextEdit', 'Nature of Digital Practice': 'TextEdit', 'Snapshot': 'TextEdit', 'Organization Address or Program Site': 'TextEdit', 'Link': 'TextEdit', 'field_10': 'Hidden', 'field_11': 'Hidden', 'field_12': 'Hidden', 'field_13': 'Hidden', 'field_14': 'Hidden', 'field_15': 'Hidden', 'field_16': 'Hidden', 'field_17': 'Hidden', 'field_18': 'Hidden', 'field_19': 'Hidden', 'field_20': 'Hidden', 'field_21': 'Hidden', 'field_22': 'Hidden', 'field_23': 'Hidden', 'field_24': 'Hidden', 'field_25': 'Hidden', 'field_26': 'Hidden', 'field_27': 'Hidden', });
lyr_CategorySTEM_10.set('fieldImages', {'Organization': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Program Name': 'TextEdit', 'Demographic': 'TextEdit', 'Nature of Digital Practice': 'TextEdit', 'Snapshot': 'TextEdit', 'Organization Address or Program Site': 'TextEdit', 'Link': 'TextEdit', 'field_10': 'Hidden', 'field_11': 'Hidden', 'field_12': 'Hidden', 'field_13': 'Hidden', 'field_14': 'Hidden', 'field_15': 'Hidden', 'field_16': 'Hidden', 'field_17': 'Hidden', 'field_18': 'Hidden', 'field_19': 'Hidden', 'field_20': 'Hidden', 'field_21': 'Hidden', 'field_22': 'Hidden', 'field_23': 'Hidden', 'field_24': 'Hidden', 'field_25': 'Hidden', 'field_26': 'Hidden', 'field_27': 'Hidden', });
lyr_CategoryArts_3.set('fieldLabels', {'Organization': 'header label - visible with data', 'Program Name': 'header label - visible with data', 'Demographic': 'header label - visible with data', 'Nature of Digital Practice': 'header label - visible with data', 'Snapshot': 'header label - visible with data', 'Organization Address or Program Site': 'header label - visible with data', 'Link': 'header label - visible with data', });
lyr_CategoryCounselling_4.set('fieldLabels', {'Organization': 'header label - visible with data', 'Program Name': 'header label - visible with data', 'Demographic': 'header label - visible with data', 'Nature of Digital Practice': 'header label - visible with data', 'Snapshot': 'header label - visible with data', 'Organization Address or Program Site': 'header label - visible with data', 'Link': 'header label - visible with data', });
lyr_CategoryCrisis_5.set('fieldLabels', {'Organization': 'header label - visible with data', 'Program Name': 'header label - visible with data', 'Demographic': 'header label - visible with data', 'Nature of Digital Practice': 'header label - visible with data', 'Snapshot': 'header label - visible with data', 'Organization Address or Program Site': 'header label - visible with data', 'Link': 'header label - visible with data', });
lyr_CategoryFlex_6.set('fieldLabels', {'Organization': 'header label - visible with data', 'Program Name': 'header label - visible with data', 'Demographic': 'header label - visible with data', 'Nature of Digital Practice': 'header label - visible with data', 'Snapshot': 'header label - visible with data', 'Organization Address or Program Site': 'header label - visible with data', 'Link': 'header label - visible with data', });
lyr_CategoryGames_7.set('fieldLabels', {'Organization': 'header label - visible with data', 'Program Name': 'header label - visible with data', 'Demographic': 'header label - visible with data', 'Nature of Digital Practice': 'header label - visible with data', 'Snapshot': 'header label - visible with data', 'Organization Address or Program Site': 'header label - visible with data', 'Link': 'header label - visible with data', });
lyr_CategoryGroup_8.set('fieldLabels', {'Organization': 'header label - visible with data', 'Program Name': 'header label - visible with data', 'Demographic': 'header label - visible with data', 'Nature of Digital Practice': 'header label - visible with data', 'Snapshot': 'header label - visible with data', 'Organization Address or Program Site': 'header label - visible with data', 'Link': 'header label - visible with data', });
lyr_CategoryLibrary_9.set('fieldLabels', {'Organization': 'header label - visible with data', 'Program Name': 'header label - visible with data', 'Demographic': 'header label - visible with data', 'Nature of Digital Practice': 'header label - visible with data', 'Snapshot': 'header label - visible with data', 'Organization Address or Program Site': 'header label - visible with data', 'Link': 'header label - visible with data', });
lyr_CategorySTEM_10.set('fieldLabels', {'Organization': 'header label - visible with data', 'Program Name': 'header label - visible with data', 'Demographic': 'header label - visible with data', 'Nature of Digital Practice': 'header label - visible with data', 'Snapshot': 'header label - visible with data', 'Organization Address or Program Site': 'header label - visible with data', 'Link': 'header label - visible with data', });
lyr_CategorySTEM_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});