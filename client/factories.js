angular.module('chirper.factories', [])
    .factory('Chirp', ['$resource', function ($resource) {
        return $resource('/api/Allchirps/:id', { id: '@id' }, {
            update: {
                method: 'PUT'
            }
        });
    }])
    .factory('User', ['$resource', function ($resource) {
        return $resource('/api/users/:id');
    }]);