let layersLoadingCount = 0;
tryStartLoading = () => {
  if (layersLoadingCount <= 0) {
      $('#map-loader').show();
    }
    layersLoadingCount++;
}

tryEndLoading = () => {
  layersLoadingCount > 0 && layersLoadingCount--;
  if (layersLoadingCount == 0) {
    $('#map-loader').hide();
  }
}

tryForceEndLoading = () => {
  $('#map-loader').hide();
  layersLoadingCount = 0;
}