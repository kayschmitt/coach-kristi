'use strict';

angular.module('myApp.melt', ['ngRoute'])

   .config(['$routeProvider', function($routeProvider) {
     $routeProvider.when('/melt', {
       templateUrl: 'melt/melt.html',
       controller: 'MeltCtrl'
     });
   }])

   .controller('MeltCtrl', MeltController);


function MeltController() {
  this.name = 'John Smith';
  this.contacts = [
    {type: 'phone', value: '408 555 1212'},
    {type: 'email', value: 'john.smith@example.org'}
  ];
}