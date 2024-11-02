(function ($) {
    $(document).ready(function() {
        $('.popup-st-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            }
        });
     
    });

    function initMapContactPage(mapEl) {
      const styles = {
          default: [],
          silver: [
            {
              elementType: "geometry",
              stylers: [{ color: "#f5f5f5" }],
            },
            {
              elementType: "labels.icon",
              stylers: [{ visibility: "off" }],
            },
            {
              elementType: "labels.text.fill",
              stylers: [{ color: "#616161" }],
            },
            {
              elementType: "labels.text.stroke",
              stylers: [{ color: "#f5f5f5" }],
            },
            {
              featureType: "administrative.land_parcel",
              elementType: "labels.text.fill",
              stylers: [{ color: "#bdbdbd" }],
            },
            {
              featureType: "poi",
              elementType: "geometry",
              stylers: [{ color: "#eeeeee" }],
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [{ color: "#757575" }],
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [{ color: "#e5e5e5" }],
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [{ color: "#9e9e9e" }],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ color: "#ffffff" }],
            },
            {
              featureType: "road.arterial",
              elementType: "labels.text.fill",
              stylers: [{ color: "#757575" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [{ color: "#dadada" }],
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.fill",
              stylers: [{ color: "#616161" }],
            },
            {
              featureType: "road.local",
              elementType: "labels.text.fill",
              stylers: [{ color: "#9e9e9e" }],
            },
            {
              featureType: "transit.line",
              elementType: "geometry",
              stylers: [{ color: "#e5e5e5" }],
            },
            {
              featureType: "transit.station",
              elementType: "geometry",
              stylers: [{ color: "#eeeeee" }],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#c9c9c9" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{ color: "#9e9e9e" }],
            },
          ],
          night: [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            {
              featureType: "administrative.locality",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [{ color: "#263c3f" }],
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [{ color: "#6b9a76" }],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ color: "#38414e" }],
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [{ color: "#212a37" }],
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [{ color: "#9ca5b3" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [{ color: "#746855" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [{ color: "#1f2835" }],
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.fill",
              stylers: [{ color: "#f3d19c" }],
            },
            {
              featureType: "transit",
              elementType: "geometry",
              stylers: [{ color: "#2f3948" }],
            },
            {
              featureType: "transit.station",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#17263c" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{ color: "#515c6d" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#17263c" }],
            },
          ],
          retro: [
            { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
            {
              featureType: "administrative",
              elementType: "geometry.stroke",
              stylers: [{ color: "#c9b2a6" }],
            },
            {
              featureType: "administrative.land_parcel",
              elementType: "geometry.stroke",
              stylers: [{ color: "#dcd2be" }],
            },
            {
              featureType: "administrative.land_parcel",
              elementType: "labels.text.fill",
              stylers: [{ color: "#ae9e90" }],
            },
            {
              featureType: "landscape.natural",
              elementType: "geometry",
              stylers: [{ color: "#dfd2ae" }],
            },
            {
              featureType: "poi",
              elementType: "geometry",
              stylers: [{ color: "#dfd2ae" }],
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [{ color: "#93817c" }],
            },
            {
              featureType: "poi.park",
              elementType: "geometry.fill",
              stylers: [{ color: "#a5b076" }],
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [{ color: "#447530" }],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ color: "#f5f1e6" }],
            },
            {
              featureType: "road.arterial",
              elementType: "geometry",
              stylers: [{ color: "#fdfcf8" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [{ color: "#f8c967" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [{ color: "#e9bc62" }],
            },
            {
              featureType: "road.highway.controlled_access",
              elementType: "geometry",
              stylers: [{ color: "#e98d58" }],
            },
            {
              featureType: "road.highway.controlled_access",
              elementType: "geometry.stroke",
              stylers: [{ color: "#db8555" }],
            },
            {
              featureType: "road.local",
              elementType: "labels.text.fill",
              stylers: [{ color: "#806b63" }],
            },
            {
              featureType: "transit.line",
              elementType: "geometry",
              stylers: [{ color: "#dfd2ae" }],
            },
            {
              featureType: "transit.line",
              elementType: "labels.text.fill",
              stylers: [{ color: "#8f7d77" }],
            },
            {
              featureType: "transit.line",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#ebe3cd" }],
            },
            {
              featureType: "transit.station",
              elementType: "geometry",
              stylers: [{ color: "#dfd2ae" }],
            },
            {
              featureType: "water",
              elementType: "geometry.fill",
              stylers: [{ color: "#b9d3c2" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{ color: "#92998d" }],
            },
          ],
          hiding: [
            {
              featureType: "poi.business",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "transit",
              elementType: "labels.icon",
              stylers: [{ visibility: "off" }],
            },
          ],
        };
      var mapLat = mapEl.data('lat');
      var mapLng = mapEl.data('lng');
      var zoomMap = mapEl.data('zoom');
      var style = mapEl.data('style');
      var image = mapEl.data('icon');
      console.log(zoomMap);
      var map = new google.maps.Map(document.getElementById('contact-map-new-agency'), {
          zoom: zoomMap,
          center: {lat: parseFloat(mapLat), lng: parseFloat(mapLng)},
          disableDefaultUI: true, 
          styles: styles[style]
      });
      const beachMarker = new google.maps.Marker({
          position: { lat: parseFloat(mapLat), lng: parseFloat(mapLng) },
          map,
          icon: image,
        });
  
    }

    function initMapBoxContactPage(mapEl) {
        var mapLat = mapEl.data('lat');
        var mapLng = mapEl.data('lng');
        var zoomMap = mapEl.data('zoom');
        var token = mapEl.data('token');
        var style = mapEl.data('style');
        mapboxgl.accessToken = token;
        /* Map: This represents the map on the page. */
        var map = new mapboxgl.Map({
            container: "contact-mapbox-new-agency",
            style: style,
            zoom: zoomMap,
            center: [parseFloat(mapLng), parseFloat(mapLat)]
        });
    
        map.on("load", function () {
            /* Image: An image is loaded and added to the map. */
            map.loadImage("https://i.imgur.com/MK4NUzI.png", function (error, image) {
                if (error) throw error;
                map.addImage("custom-marker", image);
                /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
                map.addLayer({
                    id: "markers",
                    type: "symbol",
                    /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
                    source: {
                        type: "geojson",
                        data: {
                            type: 'FeatureCollection',
                            features: [{
                                type: 'Feature',
                                properties: {},
                                geometry: {
                                    type: "Point",
                                    coordinates: [parseFloat(mapLng), parseFloat(mapLat)]
                                }
                            }]
                        }
                    },
                    layout: {
                        "icon-image": "custom-marker",
                    }
                });
            });
            map.resize();
        });
    }
    $(window).on('elementor/frontend/init', function () {
     
      elementorFrontend.hooks.addAction('frontend/element_ready/map.default', function ($wrapper) {
        let wrapper_id_map = $('#contact-map-new-agency', $wrapper);
        if (wrapper_id_map.length) {
          initMapContactPage(wrapper_id_map);
        }
        let wrapper_id_mapbox = $('#contact-mapbox-new-agency', $wrapper);
        if (wrapper_id_mapbox.length) {
          initMapBoxContactPage(wrapper_id_mapbox);
        }
      });
    });
})(jQuery);