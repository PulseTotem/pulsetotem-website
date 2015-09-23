'use strict';

/**
 * @ngdoc overview
 * @name pulsetotemApp
 * @description
 * # routes
 *
 * Define routes available in application.
 */
angular
  .module('pulsetotemApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider

      // Routes for home
      .when('/', {
        templateUrl: '../common/views/home.html',
        controller: 'PulseTotemCommon.HomeCtrl'
      })

      // Routes for authentication
      .when('/login', {
        templateUrl: '../common/views/login.html',
        controller: 'PulseTotemCommon.LoginCtrl'
      })

      // Routes for Dashboard
      .when('/dashboard', {
        templateUrl: '../common/views/login.html',
        controller: 'PulseTotemCommon.LoginCtrl'
      })

      // All other stuff
      .otherwise({
        redirectTo: '/'
      });
  }]);
