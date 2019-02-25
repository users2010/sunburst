const GEONODE_URL = "http://150.165.85.9";
const GEOSERVER_URL = "http://150.165.85.9/geoserver/ows/";
const DEFAULT_LAYER_OPACITY = 0.85;

changeAdvancedButton = imgName => {
  let url = GEONODE_URL + "/maps/new?layer=" + imgName;
  $("#advanced-button").attr("href", url);
};
fillLegend = imgName => {
  let legendContainerElement = $("#container-legend");

  if (imgName == null || imgName === "") {
    legendContainerElement.hide();
    return;
  } else {
    legendContainerElement.show();
  }
  const urlSufix =
    "?service=wms&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=" +
    imgName;
  // show loader
  let legendLoadingElement = $("#legend-loader");
  legendLoadingElement.show();

  const url = GEOSERVER_URL + urlSufix;
  let legendElement = $("#legend-image");
  legendElement.attr("src", url);
  legendElement.on("load", () => {
    // hidden loader
    legendLoadingElement.hide();
  });
  legendElement.on("error", () => {
    // hidden loader
    legendLoadingElement.hide();
  });
};
fillBreadcrumbs = data => {
  let breadcrumbsArr = getNameArray(data.__dataNode, []);
  let breadcrumbs_container = $("#breadcrumbs");

  breadcrumbs_container.empty();
  breadcrumbsArr.reverse().forEach(value => {
    breadcrumbs_container.append(
      '<span class="crumb"><a id="breadcumbLinks" href="#">' + value + "</span>"
    );
  });
};
getNameArray = (data, array) => {
  array = array || [];
  array.push(data.data.name2);
  if (data.parent) getNameArray(data.parent, array);
  return array;
};
fillDescrition = data => {
  let titleContentEl = "#container-title-row-content";
  let descriptionContentEl = "#container-description-row-content";
  $(titleContentEl).text(data.name2 ? data.name2 : "-");
  $(descriptionContentEl).text("");
  let descriptionLoaderElement = $("#description-loader");
  descriptionLoaderElement.show();
  let url = GEONODE_URL + "/layers/" + data.imgName + "/metadata_detail_rest";
  $.get(url)
    .done(function(data) {
      $(titleContentEl).text(data.title);
      $(descriptionContentEl).text(data.abstract);
    })
    .fail(function(error) {
      $(titleContentEl).text(data.name2 ? data.name2 : "-");
      $(descriptionContentEl).text("");
    })
    .always(function() {
      descriptionLoaderElement.hide();
    });
};
// TODO check. This "Loading" management might become a new js file
let layersLoadingCount = 0;
tryStartLoading = () => {
  if (layersLoadingCount <= 0) {
    $("#map-loader").show();
  }
  layersLoadingCount++;
};
tryEndLoading = () => {
  layersLoadingCount > 0 && layersLoadingCount--;
  if (layersLoadingCount == 0) {
    $("#map-loader").hide();
  }
};
tryForceEndLoading = () => {
  $("#map-loader").hide();
  layersLoadingCount = 0;
};

let currentLayer;
createLayer = imgName => {
  currentLayer = imgName;
  layer = new ol.layer.Tile({ 
    opacity: DEFAULT_LAYER_OPACITY,
    visible: true,
    source: new ol.source.TileWMS({
      url: GEOSERVER_URL,
      params: {
        LAYERS: imgName,
        TILED: "true"
      },
      ratio: 3,
      serverType: "geoserver"
    })
  });
  tryForceEndLoading();
  layer.getSource().on("tileloadstart", function(event) {
    tryStartLoading();
  });
  layer.getSource().on("tileloadend", function(event) {
    tryEndLoading();
  });
  layer.getSource().on("tileloaderror", function(event) {
    tryEndLoading();
  });
  return layer;
};
calculateChartSize = () => {
  const DEFAULT_PERCENT_SIZE = 0.9;
  const DEFAULT_SIZE = 400;
  try {
    return parseInt($("#container-chart").css("width")) * DEFAULT_PERCENT_SIZE;
  } catch (error) {
    return DEFAULT_SIZE;
  }
};

stopPeddingRequests = () => {
  window.stop();
};
let sunburst;
$(document).ready(() => {

  let sabLayer = new ol.layer.Tile({
    opacity: 0.25,
    visible: true,
    source: new ol.source.TileWMS({
      url: GEOSERVER_URL,
      params: {
        LAYERS: 'geonode:lim_semiarido_municipal_oficial',
        TILED: "true"
      },
      ratio: 3,
      serverType: "geoserver"
    })
  });

  let defaultL = new ol.layer.Tile({
    source: new ol.source.OSM()
  });
  const initialImgNameLayer = dataDesertificacao.imgName;
  let rootLayer = createLayer(initialImgNameLayer);
  // TODO (refactoring) put the center parameters in a constant (Issue 4)
  let map = new ol.Map({
    layers: [defaultL, rootLayer, sabLayer],
    target: "map",
    pixelRatio: 1,
    view: new ol.View({
      center: [-4615573.515972, -794945.094166],
      zoom: 5
    })
  });
  let geocoder = new Geocoder("nominatim", {
    provider: "osm",
    lang: "pt-BR",
    placeholder: "Pesquisa por município . . .",
    targetType: "glass-button",
    limit: 2,
    keepOpen: true
  });
  geocoder.on("addresschosen", function(evt) {
    map.getView().animate({ zoom: 10, center: evt.coordinate });
    // TODO study who the geocode works
    // to colapse the search field
    $("#map").click();
  });
  map.addControl(geocoder);
  // TODO analyze this approach, because only works in the page initialization (Issue 5)
  let chartContainerSize = calculateChartSize();
  let color = d3.scaleOrdinal(d3.schemePaired);
  // TODO (refactoring) put the "data" in another file. (Issue 6)
  const DATA_DESERT_ATTR_LABEL = "name2";
  const DATA_DESERT_ATTR_SIZE = "size";
  sunburst = Sunburst()
    .data(dataDesertificacao)
    .label(DATA_DESERT_ATTR_LABEL)
    .size(DATA_DESERT_ATTR_SIZE)
    .width(chartContainerSize)
    .height(chartContainerSize)
    .color((d, parent) => d.color);
  sunburst.onNodeClick(choosenData => {
    let imgName = choosenData.imgName;
    if (currentLayer === imgName) {
      console.log("The same image. Do nothing.");
      return;
    }
    stopPeddingRequests();
    map.getLayers().clear();
    sunburst.focusOnNode(choosenData);

    let layer1 = createLayer(imgName);
    map.addLayer(defaultL);
    map.addLayer(layer1);
    map.addLayer(sabLayer);

    changeAdvancedButton(choosenData.imgName);
    fillBreadcrumbs(choosenData);
    fillLegend(choosenData.imgName);
    fillDescrition(choosenData);
  });
  sunburst($("#chart")[0]);
  changeAdvancedButton(initialImgNameLayer);
  fillBreadcrumbs(dataDesertificacao);
  fillLegend(initialImgNameLayer);
  fillDescrition(dataDesertificacao);
});

$("#navbar li").on("click", () => {
  stopPeddingRequests();
});
let resizing = false;
$(window).on("resize", function() {
  const RESIZING_TIMEOUT = 1000;
  if (!resizing) {
    resizing = true;
    setTimeout(() => {
      let chartContainerSize = calculateChartSize();
      sunburst.width(chartContainerSize);
      sunburst.height(chartContainerSize);
      $("#chart").html("");
      sunburst($("#chart")[0]);
      resizing = false;
    }, RESIZING_TIMEOUT);
  }
});