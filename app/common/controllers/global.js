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
    $scope.$watch(function() { return $mdMedia('max-width: 800px'); }, function(isSmall) {
      $scope.screenIsSmall = isSmall;
    });
    $scope.screenIsSmall = $mdMedia('max-width: 800px');

  }]);
