'use strict';

angular.module('coachKristi.coaching', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/coaching', {
        templateUrl: 'coaching/coaching.html',
        controller: 'CoachingController'
      });
    }])

    .controller('CoachingController', CoachingController);

function CoachingController() {

}
