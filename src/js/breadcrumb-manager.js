fillBreadcrumbs = (map, sunburst, data, defaultL, aguasLayer, sabLayer, layerTitle) => {
  $(".link-breadcrumbs").unbind();
  let breadcrumbsArr = getNameArray(data.__dataNode, []);

  let breadcrumbs_container = $("#breadcrumbs");
  
  breadcrumbs_container.empty();
  breadcrumbsArr.reverse().forEach((value) => {
    const linkId = 'link-breadcrumbs-' + Math.floor(Math.random() * 1000000);;
    breadcrumbs_container.append('<span class="crumb"><a id="' + linkId + '" class="link-breadcrumbs" imgname="' + value.imgName  + '">' + value.title + '</a></span>');
    
    $(document).on('click', '#' + linkId, function (event) {
       updateSunburst(map, sunburst, value.data, defaultL, aguasLayer, sabLayer, layerTitle)        
    }); 
  });

}