'use strict';

/**
 * @ngdoc function
 * @name pulsetotemApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the pulsetotemApp
 */
angular.module('PulseTotemCommon')
    .controller('PulseTotemCommon.MenuCtrl', ['$rootScope', '$scope', '$translate', 'backendSocket', '$cookies', '$location', '$anchorScroll', 'CONSTANTS', '$mdSidenav', function ($rootScope, $scope, $translate, backendSocket, $cookies, $location, $anchorScroll, CONSTANTS, $mdSidenav) {

        $scope.langKey = $translate.use();

        $scope.changeLanguage = function (langKey) {
          $scope.langKey = langKey;
          $translate.use(langKey);
        };

        $scope.logout = function() {
          $rootScope.user = {};

          delete($cookies.tmpPulseTotemToken);
          delete($cookies.pulseTotemToken);

          backendSocket.exit();

          if (!$rootScope.$$phase) {
            $rootScope.$apply(function () {
              $location.path(CONSTANTS.homeRoute);
            });
          } else {
            $location.path(CONSTANTS.homeRoute);
          }
        };

        $scope.toggleLeft = buildToggler('left');
        /**
         * Build handler to open/close a SideNav;
         */
        function buildToggler(navID) {
          return function() {
            $mdSidenav(navID)
              .toggle();
          }
        }

    }]);
