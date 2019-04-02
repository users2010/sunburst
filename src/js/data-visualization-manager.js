fillLegend = (imgName) => {
  let legendContainerElement = $('#container-legend')
  
  if (imgName == null || imgName === '') {
    legendContainerElement.hide();
    return;
  } else {
    legendContainerElement.show();
  }
  const urlSufix = '?service=wms&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=' + imgName;

  // show loader
  let legendLoadingElement = $('#legend-loader');
  legendLoadingElement.show();
  
  const url = GEOSERVER_URL + urlSufix;
  let legendElement = $('#legend-image');
  legendElement.attr("src", url);

  legendElement.on("load", () => {
    // hidden loader
    legendLoadingElement.hide();
  });
  legendElement.on("error", () => {
    // hidden loader
    legendLoadingElement.hide();
  });      
}

getNameArray = (data, array) => {
  array = array || [];
  array.push({title: data.data.name2, imgName: data.data.imgName, data: data.data});
  if (data.parent) getNameArray(data.parent, array);
  return array;
};

fillDescription = (data) => {      
  let titleContentEl = '#container-title-row-content';
  let descriptionContentEl = '#container-description-row-content';
  $(titleContentEl).text(data.name2 ? data.name2 : '-');
  $(descriptionContentEl).text('');

  let descriptionLoaderElement = $('#description-loader');
  descriptionLoaderElement.show();

  let url = window.location.protocol + '//' + window.location.hostname + '/layers/' + data.imgName + '/metadata_detail_rest';
  $.get(url)
  .done(function (data) {
    $(titleContentEl).text(data.title);
    $(descriptionContentEl).text(data.abstract);
  })
  .fail(function (error) {
    $(titleContentEl).text(data.name2 ? data.name2 : '-');
    $(descriptionContentEl).text('');
  })
  .always(function() {
    descriptionLoaderElement.hide();
  });
}; 