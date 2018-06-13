(function () {
    var app = angular.module('readHomes', [])

    app.controller('homeController', function ($scope, $http) {
        $scope.homes = []
        $http.get('../data/sample-read-data.json').then(function(response) {
            $scope.homes = response.data
        })
    })
})()