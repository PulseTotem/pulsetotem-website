'use strict';

/**
 * @ngdoc overview
 * @name pulsetotemApp
 * @description
 * # pulsetotemApp
 *
 * Main module of the application.
 */
angular
    .module('pulsetotemApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ngTextFill',
    'pascalprecht.translate',
    'btford.socket-io',
    'angular-carousel',
    'fox.scrollReveal',
    'duScroll',
    'PulseTotemCommon'
    ])
    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');
    }])
    .config(['$mdThemingProvider', function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey', {
          'default' : '600'
        })
        .accentPalette('blue');
    }])
    .config(['$anchorScrollProvider', function($anchorScrollProvider) {
      $anchorScrollProvider.disableAutoScrolling();
    }])
    .value('duScrollOffset', 64)
    .value('duScrollActiveClass', 'selectedMenu')
    .value('duScrollBottomSpy', true)
    .run(['$rootScope', '$location', '$cookies', '$http', 'CONSTANTS', 'backendSocket', '$route', '$anchorScroll', function($rootScope, $location, $cookies, $http, CONSTANTS, backendSocket, $route, $anchorScroll) {
      $anchorScroll.yOffset = 64;

      /*$rootScope.$on('duScrollspy:becameActive', function ($event, $element, $target) {
        var hash = $element[0].attributes["du-scrollspy"].value;
        if (hash != 'home') {
          $location.hash(hash);
        } else {
          $location.hash(null);
        }
      });*/

      $rootScope.header = "home";

      if(typeof($rootScope.currentLogingFromToken) == "undefined" || $rootScope.currentLogingFromToken == null) {
        $rootScope.currentLogingFromToken = false;
      }

      $rootScope.$on("$routeChangeStart", function(event, next, last) {
        if(! $rootScope.currentLogingFromToken) {
          if (typeof($rootScope.user) == "undefined" || typeof($rootScope.user.id) == "undefined") {
            var pulseTotemToken = null;
            var tmpToken = false;
            if ($cookies.pulseTotemToken) {
              pulseTotemToken = $cookies.pulseTotemToken;
            } else {
              if ($cookies.tmpPulseTotemToken) {
                pulseTotemToken = $cookies.tmpPulseTotemToken;
                tmpToken = true;
              }
            }

            if (pulseTotemToken != null) {
              $rootScope.currentLogingFromToken = true;
              $http.post(CONSTANTS.backendUrl + CONSTANTS.loginFromTokenBackendPath, {
                'token': pulseTotemToken,
                'tmp': tmpToken
              })
                .success(function (data, status, headers, config) {
                  var successBackendInit = function() {
                    if(tmpToken) {
                      delete($cookies.pulseTotemToken);
                      $cookies.tmpPulseTotemToken = data.token;
                    } else {
                      delete($cookies.tmpPulseTotemToken);
                      $cookies.pulseTotemToken = data.token;
                    }

                    $rootScope.currentLogingFromToken = false;

                    $rootScope.header = "default";
                    if (next.templateUrl === "views/home.html") {
                      if (!$rootScope.$$phase) {
                        $rootScope.$apply(function () {
                          $location.path(CONSTANTS.afterLoginRoute);
                        });
                      } else {
                        $location.path(CONSTANTS.afterLoginRoute);
                      }
                    }
                  };

                  var failBackendInit = function(errorDesc) {
                    console.error(errorDesc);
                    delete($cookies.pulseTotemToken);
                    delete($cookies.tmpPulseTotemToken);

                    $rootScope.header = "home";
                    if (!$rootScope.$$phase) {
                      $rootScope.$apply(function () {
                        $location.path(CONSTANTS.homeRoute);
                      });
                    } else {
                      $location.path(CONSTANTS.homeRoute);
                    }
                  };

                  backendSocket.init(data.token, successBackendInit, failBackendInit);
                })
                .error(function (data, status, headers, config) {
                  $rootScope.currentLogingFromToken = false;
                  delete($cookies.pulseTotemToken);
                  delete($cookies.tmpPulseTotemToken);
                  $rootScope.header = "home";
                  if (next.templateUrl != "../common/views/home.html") {
                    if (!$rootScope.$$phase) {
                      $rootScope.$apply(function () {
                        $location.path(CONSTANTS.homeRoute);
                      });
                    } else {
                      $location.path(CONSTANTS.homeRoute);
                    }
                  }
                });
            } else { //Not connected, path changed
              $rootScope.header = "home";
              if (next.templateUrl != "../common/views/home.html") {
                if (!$rootScope.$$phase) {
                  $rootScope.$apply(function () {
                    $location.path(CONSTANTS.homeRoute);
                  });
                } else {
                  $location.path(CONSTANTS.homeRoute);
                }
              }
            }

          } else {
            $rootScope.header = "default";
            if (next.templateUrl === "../common/views/home.html") {
              if (!$rootScope.$$phase) {
                $rootScope.$apply(function () {
                  $location.path(CONSTANTS.afterLoginRoute);
                });
              } else {
                $location.path(CONSTANTS.afterLoginRoute);
              }
            }
          }
        }
      });
    }]);
