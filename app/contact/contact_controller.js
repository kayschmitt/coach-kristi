'use strict';

angular.module('coachKristi.contact', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/contact', {
        templateUrl: 'contact/contact.html',
        controller: 'ContactController'
      });
    }])

    .controller('ContactController', ContactController);

function ContactController() {
}
