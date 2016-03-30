coordinates = []
map = null

initMap = ->
  bounds = new google.maps.LatLngBounds();

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 44.4758, lng: -73.2119}
    zoom: 12
    })

addMarker = ->
  # Get latitue and longitude from forms
  latitude = $('#lat').val()
  longitude = $('#lng').val()

  # Add new coordinates to the array
  coordinates.push([parseFloat(latitude), parseFloat(longitude)])

  # Add all the markers to the map
  for coordinate in coordinates
    # Set the location to the latitude and longitude of the coord
    location =  new google.maps.LatLng(coordinate[0],coordinate[1])

    marker = new google.maps.Marker({
      position: location,
      map: map,
      title: "Location"
      })

    map.panTo(marker.getPosition())
    map.getBounds().contains(marker.getPosition())

  # Add coordinate to sidebar
  $('#coords').append("<p class='coord'> #{latitude}, #{longitude} </p>")

  # Bind click event to coordinate
  $('.coord').on('click', ->
    $(@).remove()
    )
