'use strict';

angular.module('coachKristi.about', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/about', {
        templateUrl: 'about/about.html',
        controller: 'AboutController'
      });
    }])
    .controller('AboutController', AboutController);

function AboutController() {
}
