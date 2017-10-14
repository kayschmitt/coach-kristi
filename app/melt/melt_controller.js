'use strict';

angular.module('coachKristi.melt', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/melt', {
        templateUrl: 'melt/melt.html',
        controller: 'MeltController'
      });
    }])

    .controller('MeltController', MeltController);


function MeltController() {}
