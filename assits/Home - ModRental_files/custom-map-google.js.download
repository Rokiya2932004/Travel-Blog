function initHalfMap(mapEl, mapData, mapLat, mapLng, mapZoom, mapIcon) {
    var popupPos = mapEl.data('popup-position');
    if (mapData.length <= 0)
        mapData = mapEl.data('data_show');
    if (mapLat.length <= 0)
        mapLat = mapEl.data('lat');
    if (mapLng.length <= 0)
        mapLng = mapEl.data('lng');
    if (mapZoom.length <= 0)
        mapZoom = mapEl.data('zoom');
    if (mapIcon.length <= 0)
        mapIcon = mapEl.data('icon');
    var map = new google.maps.Map(mapEl.get(0), {
        zoom: mapZoom,
        center: {lat: parseFloat(mapLat), lng: parseFloat(mapLng)},
        disableDefaultUI: true
    });
    bounds = new google.maps.LatLngBounds();
    if (typeof mapData != 'undefined' && Object.keys(mapData).length) {
        var marker = [];
        var ib = [];
        var c = {};
        var markers = jQuery.map(mapData, function (location, i) {
            marker[i] = new google.maps.Marker({
                position: {lat: parseFloat(location.lat), lng: parseFloat(location.lng)},
                options: {
                    icon: mapIcon,
                    animation: google.maps.Animation.DROP
                },
                map: map
            });
            var loc = new google.maps.LatLng(parseFloat(location.lat), parseFloat(location.lng));
            bounds.extend(loc);
            var ibOptions = {
                content: '',
                disableAutoPan: true
                , maxWidth: 0
                , pixelOffset: new google.maps.Size(-135, -55)
                , zIndex: null
                , boxStyle: {
                    padding: "0px 0px 0px 0px",
                    width: "270px",
                },
                closeBoxURL: "",
                cancelBubble: true,
                infoBoxClearance: new google.maps.Size(1, 1),
                isHidden: false,
                pane: "floatPane",
                enableEventPropagation: true,
                alignBottom: true
            };
            if (window.matchMedia("(min-width: 768px)").matches) {
                if (popupPos == 'right') {
                    ibOptions.pixelOffset = new google.maps.Size(35, -208);
                    ibOptions.alignBottom = false;
                }
            }
            jQuery(window).on('resize',function () {
                if (window.matchMedia("(min-width: 768px)").matches) {
                    if (popupPos == 'right') {
                        ibOptions.pixelOffset = new google.maps.Size(35, -208);
                        ibOptions.alignBottom = false;
                    }
                }
            });
            google.maps.event.addListener(marker[i], 'click', (function () {
                var source = location.content_html;
                var boxText = document.createElement("div");
                if (window.matchMedia("(min-width: 768px)").matches) {
                    if (popupPos == 'right') {
                        boxText.classList.add("right-box");
                    }
                }
                jQuery(window).on('resize',function () {
                    if (window.matchMedia("(min-width: 768px)").matches) {
                        if (popupPos == 'right') {
                            boxText.classList.add("right-box");
                        }
                    } else {
                        boxText.classList.remove("right-box");
                    }
                });
                boxText.style.cssText = "border-radius: 5px; background: #fff; padding: 0px;";
                boxText.innerHTML = source;
                ibOptions.content = boxText;
                var ks = Object.keys(c);
                if (ks.length) {
                    for (var j = 0; j < ks.length; j++) {
                        c[ks[j]].close();
                    }
                }
                ib[i] = new InfoBox(ibOptions);
                c[i] = ib[i];
                ib[i].open(map, this);
                map.panTo(ib[i].getPosition());
                google.maps.event.addListener(ib[i], 'domready', function () {
                    var closeInfoBox = document.getElementById("close-popup-on-map");
                    google.maps.event.addDomListener(closeInfoBox, 'click', function () {
                        ib[i].close();
                    });
                });
            }));
            return marker[i];
        });
        customControlGoogleMap(mapEl.get(0), map);
    }
    map.fitBounds(bounds);
    map.panToBounds(bounds);
    var listener = google.maps.event.addListener(map, "idle", function () {
        if (map.getZoom() > 16)
            map.setZoom(16);
        google.maps.event.removeListener(listener);
    });
}