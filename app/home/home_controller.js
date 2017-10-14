'use strict';

angular.module('coachKristi.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeController'
      });
    }])

    .controller('HomeController', HomeController);

function HomeController() {
}
