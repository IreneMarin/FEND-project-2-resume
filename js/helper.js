/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1><hr/>';

// Since I am doing the "resume" like a kind of biography of Da Vinci, I changed the contacts variables:
var HTMLheaderRole = '<li class="flex-item"><span class="orange-text">%data%</span></li>';
var HTMLbirthdate = '<li class="flex-item"><span class="orange-text">Born</span><span class="white-text">%data%</span></li>';
var HTMLbirthplace = '<li class="flex-item"><span class="orange-text">At</span><span class="white-text">%data%</span></li>';
var HTMLdeaddate = '<li class="flex-item"><span class="orange-text">Died</span><span class="white-text">%data%</span></li>';
var HTMLdeadplace = '<li class="flex-item"><span class="orange-text">At</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic" alt="%alt%">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">The genius at a glance:</h3><ul id="skills" class="flex-box skills"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%&nbsp;';
var HTMLworkTitle = '  ܀܀ &nbsp;%data%</a>';
var HTMLworkDates = '<div class="date-text">%data%&nbsp;&nbsp;</div>';
var HTMLworkLocation = '<div class="location-text">⚜&nbsp;&nbsp;%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%" alt="%alt%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = '&nbsp;܀܀ %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%&nbsp;&nbsp;</div>';
var HTMLschoolLocation = '<div class="location-text">⚜&nbsp;&nbsp;%data%</div>';
var HTMLschoolMajor = '<p><br>%data%</p>';

var googleMap = '<div id="map"></div>';

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
Part 5 for project 2.
*/
clickLocations = [];
function logClicks(x, y) {
    clickLocations.push(
      {
          x: x,
          y: y
      }
    );
    console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function (loc) {
    console.log(loc.pageX, loc.pageY);
});

// MAPS!
var map;    // declares a global map variable

// Start here! initializeMap() is called when page is loaded.

function initializeMap() {

    var locations;
    var descriptions;
    var mapOptions = {
        disableDefaultUI: true
    };

    map = new google.maps.Map(document.querySelector('#map'), mapOptions);

    // locationFinder() returns an array of every location string from the JSONs written for bio, education, and work.

    function locationFinder() {

        // initializes an empty array
        var locations = [];

        // adds the location of birth and death:
        locations.push(bio.birth.location);
        locations.push(bio.death.location);

        // iterates through school locations and appends each location to the locations array
        var lengthSchools = education.schools.length;
        for (var school = 0; school < lengthSchools; school++) {
            locations.push(education.schools[school].location);
        }

        // iterates through work locations and appends each location to the locations array
        var lengthJobs = work.jobs.length;
        for (var job = 0; job < lengthJobs; job++) {
            locations.push(work.jobs[job].location);
        }

        return locations;
    }


    function descriptionFinder(location) {

        var description;

        // iterates through school locations and appends each location to the locations array
        var lengthSchools = education.schools.length;
        for (var school = 0; school < lengthSchools; school++) {
            if (location === education.schools[school].location) {
                description = education.schools[school].description;
            }
        }

        // iterates through work locations and appends each location to the locations array
        var lengthJobs = work.jobs.length;
        for (var job = 0; job < lengthJobs; job++) {
            if (location === work.jobs[job].location) {
                description = work.jobs[job].description;
            }
        }

        return description;
    }

    /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information about a single location.
    */
    function createMapMarker(placeData) {

        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat();  // latitude from the place service
        var lon = placeData.geometry.location.lng();  // longitude from the place service
        var name = placeData.name;   // name of the place from the place service
        var description = descriptionFinder(name);
        var bounds = window.mapBounds;            // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            // changing the original icon map
            icon: './images/mapa.png'
        });
        
        // the content inside the windows that opens when we click the markers in the map
        var contentString = '<div id="content"><div id="siteNotice"></div>' +
        '<h1 id="firstHeading" class="firstHeading">' + name + '</h1>' +        
        '</div>';

        // infoWindows are the little helper windows that open when you click or hover over a pin on a map.
        // They usually contain more information about a location.
        var infoWindow = new google.maps.InfoWindow({
            // Here to put the info that will show up in the windows
            content: contentString
        });

        // hmmmm, I wonder what this is about...
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(map, marker);
        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    }

    /*
    callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.
    */
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }

    // pinPoster(locations) takes in the array of locations created by locationFinder() and fires off Google place searches for each location
    function pinPoster(locations) {

        // creates a Google place search service object. PlacesService does the work of actually searching for location data.
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        var lengthLocations = locations.length;
        for (var place = 0; place < lengthLocations; place++) {

            // the search request object
            var request = {
                query: locations[place]
            };

            // Actually searches the Google Maps API for location data and runs the callback function with the search results after each search.
            service.textSearch(request, callback);
        }
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    // pinPoster(locations) creates pins on the map for each location in the locations array
    pinPoster(locations);
}

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window and adjust map bounds
window.addEventListener('resize', function (e) {
    //Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
});