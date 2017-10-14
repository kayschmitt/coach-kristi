'use strict';

angular.module('myApp.coaching', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/coaching', {
    templateUrl: 'coaching/coaching.html',
    controller: 'CoachingCtrl'
  });
}])

.controller('CoachingCtrl', CoachingController);

function CoachingController() {

}
