var addMarker, coordinates, initMap, map;

coordinates = [];

map = null;

initMap = function() {
  var bounds;
  bounds = new google.maps.LatLngBounds();
  return map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 44.4758,
      lng: -73.2119
    },
    zoom: 12
  });
};

addMarker = function() {
  var coordinate, i, latitude, len, location, longitude, marker;
  latitude = $('#lat').val();
  longitude = $('#lng').val();
  coordinates.push([parseFloat(latitude), parseFloat(longitude)]);
  for (i = 0, len = coordinates.length; i < len; i++) {
    coordinate = coordinates[i];
    location = new google.maps.LatLng(coordinate[0], coordinate[1]);
    marker = new google.maps.Marker({
      position: location,
      map: map,
      title: "Location"
    });
    map.panTo(marker.getPosition());
    map.getBounds().contains(marker.getPosition());
  }
  $('#coords').append("<p class='coord'> " + latitude + ", " + longitude + " </p>");
  return $('.coord').on('click', function() {
    return $(this).remove();
  });
};
