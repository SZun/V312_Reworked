
    function map_1() {
        var var_location = new google.maps.LatLng(42.205303, -87.810798);
    
        var var_mapoptions = {
            center: var_location,
            zoom: 15
        };
    
        var var_map = new google.maps.Map(document.getElementById("map-container-1"),
            var_mapoptions);
    
        var var_marker = new google.maps.Marker({
            position: var_location,
            map: var_map,
            title: "Highwood"
        });
    }
    
    function map_2() {
    
        var var_location = new google.maps.LatLng(41.745629, -87.742211);
    
        var var_mapoptions = {
            center: var_location,
        zoom: 15,
      };
    
        var var_map = new google.maps.Map(document.getElementById("map-container-2"),
            var_mapoptions);
    
        var var_marker = new google.maps.Marker({
            position: var_location,
            map: var_map,
            title: "Burbank"
        });
    }
    
    function map_3() {
    
    var var_location = new google.maps.LatLng(41.888622, -88.312998);
    
    var var_mapoptions = {
      center: var_location,
      zoom: 15,
    };
    
    var var_map = new google.maps.Map(document.getElementById("map-container-3"),
      var_mapoptions);
    
    var var_marker = new google.maps.Marker({
      position: var_location,
      map: var_map,
      title: "Geneva"
    });
    }
    
    function map_4() {
    
    var var_location = new google.maps.LatLng(41.94053, -87.653893);
    
    var var_mapoptions = {
      center: var_location,
      zoom: 15,
    };
    
    var var_map = new google.maps.Map(document.getElementById("map-container-4"),
      var_mapoptions);
    
    var var_marker = new google.maps.Marker({
      position: var_location,
      map: var_map,
      title: "Wrigleyville"
    });
    }
    
    function map_5() {
    
    var var_location = new google.maps.LatLng(41.891316, -87.647044);
    
    var var_mapoptions = {
      center: var_location,
      zoom: 15,
    };
    
    var var_map = new google.maps.Map(document.getElementById("map-container-5"),
      var_mapoptions);
    
    var var_marker = new google.maps.Marker({
      position: var_location,
      map: var_map,
      title: "River West"
    });
    }
    
    function map_6() {
    
    var var_location = new google.maps.LatLng(41.881832, -87.623177);
    
    var var_mapoptions = {
      center: var_location,
      zoom: 12,
    };
    
    var var_map = new google.maps.Map(document.getElementById("map-container-6"),
      var_mapoptions);
    
    var var_marker = new google.maps.Marker({
      position: var_location,
      map: var_map,
      title: "Nearest Location"
    });
    }
    
    google.maps.event.addDomListener(window, 'load', map_1);
    google.maps.event.addDomListener(window, 'load', map_2);
    google.maps.event.addDomListener(window, 'load', map_3);
    google.maps.event.addDomListener(window, 'load', map_4);
    google.maps.event.addDomListener(window, 'load', map_5);
    google.maps.event.addDomListener(window, 'load', map_6);