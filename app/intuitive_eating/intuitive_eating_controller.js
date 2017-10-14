'use strict';

angular.module('myApp.intuitive_eating', ['ngRoute'])

   .config(['$routeProvider', function($routeProvider) {
     $routeProvider.when('/intuitive_eating', {
       templateUrl: 'intuitive_eating/intuitive_eating.html',
       controller: 'IntuitiveEatingCtrl'
     });
   }])

   .controller('IntuitiveEatingCtrl', IntuitiveEatingController);


function IntuitiveEatingController() {
  this.name = 'John Smith';
  this.contacts = [
    {type: 'phone', value: '408 555 1212'},
    {type: 'email', value: 'john.smith@example.org'}
  ];
}