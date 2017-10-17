angular.module('chirper.controllers', [])
//This controller uses the factories.js.
//When list.html is used, it will refer to this to show chirps, and create chirps.
    .controller('ChirpListController', ['$scope', 'Chirp', 'User', function ($scope, Chirp, User) { 
        function getChirps() {
            $scope.Allchirps = Chirp.query(); //This query method will pull all varaiable of chirp that are used the SQL database.
        }
        getChirps();

        $scope.users = User.query();

        $scope.createChirp = function () {
            var payload = {
                message: $scope.newMessage,
                userid: $scope.newUserId
            };
            var c = new Chirp(payload);
            c.$save(function (success) {
                $scope.newMessage = '';
                $scope.newUserId = '';
                getChirps();
            }, function (error) {
                console.log(error);
            });
        }
    }])

    //This controller uses the factories.js
    //This will use the route in app.js for single.view.html 
    //The location dependency is used because routeParams is used.
    .controller('SingleChirpController', ['$scope', 'Chirp', '$location', '$routeParams', function ($scope, Chirp, $location, $routeParams) {
        $scope.chirp = Chirp.get({ id: $routeParams.someId });

        $scope.updateChirp = function () {
            $location.path('/Allchirps/' + $routeParams.someId + '/update');
        }

        //When clicked confirm if you are sure window.
        //This will use the route in app.js for single.view.html 
        //The location dependency is used becuase when deleteChirp is clicked it changes route. 
        $scope.deleteChirp = function () {
            if (confirm('Are you sure you want to delete this chirp?')) {
                $scope.chirp.$delete(function () {
                    $location.replace().path('/Allchirps'); //Goes back to list.html and replaces the path.
                }, function (error) {
                    console.log(error);
                });
            }
        }
    }])

    //This controller uses the factories.js
    //This will use the route in app.js for update_single.view.html 
    //The location dependency is used because routeParams is used.
    .controller('UpdateChirpController', ['$scope', 'Chirp', '$location', '$routeParams', function ($scope, Chirp, $location, $routeParams) {
        $scope.chirp = Chirp.get({ id: $routeParams.someId });

        $scope.updateChirp = function () {
            $scope.chirp.$update(function () {
                window.history.back();
            }, function (error) {
                console.log(error);
            });
        }
    }]);