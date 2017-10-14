'use strict';

angular.module('coachKristi.services', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/services', {
        templateUrl: 'services/services.html',
        controller: 'ServicesController'
      });
    }])

    .controller('ServicesController', ServicesController);


function ServicesController() {
}
