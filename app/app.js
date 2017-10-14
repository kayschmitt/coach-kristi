'use strict';

// Declare app level module which depends on views, and components
angular.module('coachKristi', [
  'ngRoute',
  'coachKristi.home',
  'coachKristi.melt',
  'coachKristi.about',
  'coachKristi.contact',
  'coachKristi.services',
  'coachKristi.coaching'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
