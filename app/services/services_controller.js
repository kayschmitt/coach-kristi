'use strict';

angular.module('myApp.services', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/services', {
    templateUrl: 'services/services.html',
    controller: 'ServicesController'
  });
}])

.controller('ServicesController', SettingsController1);


function SettingsController1() {
    this.name = 'John Smith';
    this.contacts = [
        {type: 'phone', value: '408 555 1212'},
        {type: 'email', value: 'john.smith@example.org'}
    ];
}