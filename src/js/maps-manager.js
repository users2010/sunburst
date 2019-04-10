let currentLayer;
createLayer = (imgName) => {
  currentLayer = imgName;
  layer = new ol.layer.Tile({
    opacity: DEFAULT_LAYER_OPACITY,
    visible: true,
    source: new ol.source.TileWMS({
      url: GEOSERVER_URL,
      params: {
        'LAYERS': imgName,
        'TILED': 'true'
      },
      ratio: 1,
      serverType: "geoserver"
    })
  });

  tryForceEndLoading();
  layer.getSource().on('tileloadstart', function (event) {        
    tryStartLoading();
  });

  layer.getSource().on('tileloadend', function (event) {
    tryEndLoading();
  });

  layer.getSource().on('tileloaderror', function (event) {
    tryEndLoading();
  });

  return layer;
}

const layerTitleSource = new ol.source.XYZ({
    url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}'
});

const layerTitle = new ol.layer.Tile({
    source: layerTitleSource
});

const sabLayer = new ol.layer.Tile({
    visible: true,
    source: new ol.source.TileWMS({
        url: GEOSERVER_URL,
        params: {
        LAYERS: LAYER_LIMIT_CITY,
        TILED: "true"
        },
        ratio: 3,
        serverType: "geoserver"
    })
});

const aguasLayer = new ol.layer.Tile({
visible: true,
    source: new ol.source.TileWMS({
        url: GEOSERVER_URL,
        params: {
        LAYERS: LAYER_LIMIT_WATER,
        TILED: "true"
        },
        ratio: 3,
        serverType: "geoserver"
    })
});

const defaultLSource = new ol.source.XYZ({
    url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
});

let defaultL = new ol.layer.Tile({
    source: defaultLSource
});

const initialImgNameLayer = dataDesertificacao.imgName;
let rootLayer = createLayer(initialImgNameLayer);

let map = new ol.Map({
    layers: [ defaultL, rootLayer, aguasLayer, sabLayer, layerTitle ],
    target: 'map',
    pixelRatio: 1,
    view: new ol.View({
        center: CENTER_COORDS,
        zoom: 5
    })
});

/**
 * This function is required to add the layers for rendering on the map.
 * As a parameter, an object that represents the index that was clicked by the user on the chart is received.
 * After a layer is created, passing as the parameter the object that is initially received by the function, all layers are added to the map.
 * The order of addition of the layers is important in this case, therefore, a variation in load order, can compromise the data visualization on the map.
 * 
 * @param variant_layer
 *      Represents the index that was clicked by the user on the chart.
 */
addLayersToMap = (variant_layer) => {
    let imd_layer_updated = createLayer(variant_layer);
    map.addLayer(defaultL);
	  map.addLayer(imd_layer_updated);
	  map.addLayer(aguasLayer);
	  map.addLayer(sabLayer);
	  map.addLayer(layerTitle);
}
