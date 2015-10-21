'use strict';

/**
 * @ngdoc function
 * @name pulsetotemApp.controller:GlobalCtrl
 * @description
 * # GlobalCtrl
 * Controller of the pulsetotemApp
 */
angular.module('PulseTotemCommon')
  .controller('PulseTotemCommon.GlobalCtrl', ['$mdMedia', '$scope', function ($mdMedia, $scope) {

    $scope.screenIsSmall = $mdMedia('sm');

  }]);
