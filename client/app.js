angular.module('chirper', ['ngRoute', 'ngResource', 'chirper.controllers', 'chirper.factories'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', { //This does not have a controller, link is provided to click on list.html
                templateUrl: 'views/welcome.html'
            })
            .when('/Allchirps', {  //This refers to the controller request to get information from database, which shows all chirps.
                templateUrl: 'views/list.html',
                controller: 'ChirpListController' //This is the controller that provides content to list.html.
            })
            .when('/Allchirps/:someId/update', {  //This refers to the controller request to get information from database, which shows single chirp by id from database to update.
                templateUrl: 'views/single_update.html',
                controller: 'UpdateChirpController' //This is the controller that provides content to single_update.html.
            })
            .when('/Allchirps/:someId', {  //This refers to the controller request to get information from database, which shows single chirp by id from database
                templateUrl: 'views/single_view.html',
                controller: 'SingleChirpController'  //This is the controller that provides content to single_view.html.
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);