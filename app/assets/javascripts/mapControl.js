
var initMap = function() {
  handler = Gmaps.build('Google');
  handler.buildMap({ provider: {}, internal: {id: 'map'}}, function(){
    var json_array = [
    { lat: 40, lng: -80, name: 'Foo1', id: 'map-image1', infowindow: "I'm Foo" },
    { lat: 45, lng: -90, name: 'Bar2', id: 'map-image2', infowindow: "I'm Bar" },
    { lat: 50, lng: -85, name: 'Baz3', id: 'map-image3', infowindow: "I'm Baz" },
    { lat: 55, lng: -75, name: 'Foo4', id: 'map-image4', infowindow: "I'm Foo2" },
    { lat: 40.7249906, lng: -73.9963616, name: 'Bleeker St 6 Train', id: 'map-image5', infowindow: "I'm down here a lot." },
    { lat: 65, lng: -88, name: 'Baz6', id: 'map-image6', infowindow: "I'm Baz2" }
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
        $('html, body').animate({
        scrollTop: $("#above-map").offset().top
        }, 500);
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