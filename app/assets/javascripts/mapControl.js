
var initMap = function() {
  handler = Gmaps.build('Google');
  handler.buildMap({ provider: {
      zoomControl: true
  }, internal: {id: 'map'}}, function(){
    var json_array = [
    { lat: 59.9071442, lng: 10.7508653, name: 'Oslo Opera House', id: 'map-image1', infowindow: "The view at the Opera House in Oslo" },
    { lat: 51.505828, lng: -0.0916832, name: 'Brew Wharf Bar', id: 'map-image2', infowindow: "Umbrellas at the Brew Wharf Bar" },
    { lat: 47.486207, lng: 19.0469849, name: 'Near Budapest Citadel', id: 'map-image3', infowindow: "The view from the Citadel in Budapest" },
    { lat: 20.7092583, lng: -156.2550063, name: 'Haleakalā Visitors Center', id: 'map-image4', infowindow: "Looking off into the void at the Haleakalā Crater" },
    { lat: 40.7452994, lng: -73.99848320000001, name: 'Donut Plant', id: 'map-image5', infowindow: "The Best Donuts in NYC" },
    { lat: 40.7526872, lng: -73.9403649, name: 'Brooklyn Boulders', id: 'map-image6', infowindow: "Rock Climbing at Brooklyn Boulders" },
    { lat: 40.72237519999999, lng: -73.99286949999998, name: 'New Museum', id: 'map-image7', infowindow: "View of Soho from the New Museum" },
    { lat: 40.6734473, lng: -73.95722510000002, name: "Chavela's", id: 'map-image8', infowindow: "My Favorite Mexican food in NYC" }
    ];

    var markers = handler.addMarkers(json_array);

    _.each(json_array, function(json, index){
      json.marker = markers[index];
    });

    var imageLink = $('.ev-about-img');
    bindLinkToMarker(imageLink, json_array);
    handler.bounds.extendWith(markers);
    handler.fitMapToBounds();
  });
};

var bindLinkToMarker = function(imageLink, json_array){
  _.each(json_array, function(json){
    imageLink.on('click', function(){
      if(json.id === $(this).attr("id")) {
        // $('html, body').animate({
        // scrollTop: $("#above-map").offset().top
        // }, 500);
        handler.getMap().setZoom(16);
        json.marker.setMap(handler.getMap()); //because clusterer removes map property from marker
        json.marker.panTo();
        google.maps.event.trigger(json.marker.getServiceObject(), 'click');
      };
    })
  });
};

// var createSidebar = function(json_array){
//   _.each(json_array, function(json){
    
//     $li.appendTo('#sidebar_container');
//     bindLiToMarker($li, json.marker);
//   });
// };