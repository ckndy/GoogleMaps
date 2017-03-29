var app = function(){
  var container = document.getElementById("main-map");
  var center = { lat: 57.1497, lng: -2.0943};
  var zoom = 10;

  var mainMap = new MapWrapper(container, center, zoom);
  mainMap.addMarker(center);
  mainMap.addClickEvent();
};

var MapWrapper = function(container, center, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: center,
    zoom: zoom
  });
};

MapWrapper.prototype = {

  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap,
      animation: google.maps.Animation.BOUNCE
    });

    var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 200
    });

    var marker = new google.maps.Marker({
      position: ,
      map: mainMap,
    });

    marker.addListener('click', function() {
      infowindow.open(mainMap, marker);
    });

    var chicago = document.querySelector();
    chicagoButton.onclick = function(){
      mainMap.setCenter();
    });

    var whereAmI = document.querySelector();
      navigator.geolocation.getCurrentPosition(function(position) {
      do_something(position.coords.latitude, position.coords.longitude);
    });






addClickEvent: function(){
  google.maps.event.addListener(this.googleMap, "click", function(event){
    // console.log(event);
    console.log("latitude: ", event.latLng.lat());
    console.log("longitude: ", event.latLng.lng());

    this.addMarker({lat: event.latLng.lat(), lng: event.latLng.lng()});

  }.bind(this));

}


};





window.onload = app;