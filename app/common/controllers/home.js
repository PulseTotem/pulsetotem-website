'use strict';

/**
 * @ngdoc function
 * @name pulsetotemApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the pulsetotemApp
 */
angular.module('PulseTotemCommon')
  .controller('PulseTotemCommon.HomeCtrl', ['$rootScope', '$scope', '$anchorScroll', '$translate', '$http', 'CONSTANTS', 'vcRecaptchaService', function($rootScope, $scope, $anchorScroll, $translate, $http, CONSTANTS, vcRecaptchaService){

    $scope.ppArray = [];

    $scope.ppArray.push({
      image: 'images/home/dynamiser.jpg',
      title: 'HOME.COMMUNITY.TITLE',
      subtitle: 'HOME.COMMUNITY.SUBTITLE',
      blog: null,
      contactus: false
    });

    $scope.ppArray.push({
      image: 'images/home/interaction.jpg',
      title: 'HOME.INTERACTION.TITLE',
      subtitle: 'HOME.INTERACTION.SUBTITLE',
      blog: null,
      contactus: false
    });

    $scope.ppArray.push({
      image: 'images/home/communaute_hiweb.jpg',
      title: 'HOME.MULTICONTENT.TITLE',
      subtitle: 'HOME.MULTICONTENT.SUBTITLE',
      blog: null,
      contactus: false
    });

    $scope.ppArray.push({
      image: 'images/home/innovation_hiweb.jpg',
      title: 'HOME.DYNAMIZE.TITLE',
      subtitle: 'HOME.DYNAMIZE.SUBTITLE',
      blog: null,
      contactus: true
    });

    $scope.avRow1 = [];

    $scope.avRow1.push({
      //icon: './bower_components/material-design-icons/av/svg/production/ic_games_48px.svg',
      icon: './images/solution/svg/web40.svg',
      title: 'SOLUTION.FEATURES.INTERACTION.TITLE',
      description: 'SOLUTION.FEATURES.INTERACTION.DESCRIPTION',
      showDescription: false
    });

    $scope.avRow1.push({
      //icon: './bower_components/material-design-icons/action/svg/production/ic_history_48px.svg',
      icon: './images/solution/svg/pc11.svg',
      title: 'SOLUTION.FEATURES.REALTIME.TITLE',
      description: 'SOLUTION.FEATURES.REALTIME.DESCRIPTION',
      showDescription: false
    });

    $scope.avRow1.push({
      //icon: './bower_components/material-design-icons/content/svg/production/ic_archive_48px.svg',
      icon: './images/solution/svg/manager.svg',
      title: 'SOLUTION.FEATURES.SOCIAL.TITLE',
      description: 'SOLUTION.FEATURES.SOCIAL.DESCRIPTION',
      showDescription: false
    });

    $scope.avRow1.push({
      //icon: './bower_components/material-design-icons/file/svg/production/ic_cloud_circle_48px.svg',
      icon: './images/solution/svg/marketing8.svg',
      title: 'SOLUTION.FEATURES.CENTRALIZATION.TITLE',
      description: 'SOLUTION.FEATURES.CENTRALIZATION.DESCRIPTION',
      showDescription: false
    });

    $scope.avRow1.push({
      icon: './bower_components/material-design-icons/notification/svg/production/ic_event_available_48px.svg',
      title: 'SOLUTION.FEATURES.DYNAMICEVENTS.TITLE',
      description: 'SOLUTION.FEATURES.DYNAMICEVENTS.DESCRIPTION',
      showDescription: false
    });

    $scope.avRow1.push({
      //icon: './bower_components/material-design-icons/action/svg/production/ic_build_48px.svg',
      icon: './images/solution/svg/wrench1.svg',
      title: 'SOLUTION.FEATURES.CUSTOMIZATION.TITLE',
      description: 'SOLUTION.FEATURES.CUSTOMIZATION.DESCRIPTION',
      showDescription: false
    });

    $scope.avRow1.push({
      //icon: './bower_components/material-design-icons/av/svg/production/ic_airplay_48px.svg',
      icon: './images/solution/svg/onlinestore2.svg',
      title: 'SOLUTION.FEATURES.FULLWEB.TITLE',
      description: 'SOLUTION.FEATURES.FULLWEB.DESCRIPTION',
      showDescription: false
    });

    $scope.avRow1.push({
      //icon: './bower_components/material-design-icons/av/svg/production/ic_airplay_48px.svg',
      icon: './images/solution/svg/group41.svg',
      title: 'SOLUTION.FEATURES.TEAM.TITLE',
      description: 'SOLUTION.FEATURES.TEAM.DESCRIPTION',
      showDescription: false
    });

      $scope.productionsArray = [];
      $scope.productionsArray.push({
        image: "images/productions/fetedelascience.jpg",
        title: 'PRODUCTIONS.FETESCIENCE.TITLE',
        subtitle: 'PRODUCTIONS.FETESCIENCE.SUBTITLE'
      });
      $scope.productionsArray.push({
        image: "images/productions/mangameshow.jpg",
        title: 'PRODUCTIONS.MANGAME.TITLE',
        subtitle: 'PRODUCTIONS.MANGAME.SUBTITLE'
      });
      $scope.productionsArray.push({
        image: "images/productions/pandapero.jpg",
        title: 'PRODUCTIONS.PANDAPERO.TITLE',
        subtitle: 'PRODUCTIONS.PANDAPERO.SUBTITLE'
      });
      $scope.productionsArray.push({
        image: "images/productions/choralies2013.jpg",
        title: 'PRODUCTIONS.CHORALIES.TITLE',
        subtitle: 'PRODUCTIONS.CHORALIES.SUBTITLE'
      });

      $scope.supporters = [];
      $scope.supporters.push({
        logo: 'images/rewards/LogoFondationUnice.png',
        url: 'http://blog.pulsetotem.fr/2015/11/02/octobre-science-et-celebration-pour-pulsetotem/'
      });
      $scope.supporters.push({
        logo: 'images/rewards/ilab2015.jpg',
        url: '#'
      });
      $scope.supporters.push({
        logo: 'images/rewards/logo-innovact-center.png',
        url: '#'
      });
      $scope.supporters.push({
        logo: 'images/logos/ipe_logo.jpg',
        url: 'http://www.incubateurpacaest.org/'
      });

    $scope.mailSending = false;
    $scope.mailSent = false;
    $scope.mailError = false;

    $scope.sendMail = function(contact) {
      $scope.mailSending = true;

      var response = vcRecaptchaService.getResponse();
      contact['recaptcha'] = response;

      $http.post(CONSTANTS.backendUrl + 'contact/send', contact)
        .success(function(data, status, headers, config) {
          $scope.mailSending = false;
          $scope.mailSent = true;
        })
        .error(function(data, status, headers, config) {
          $scope.mailSending = false;
          $scope.mailError = true;
        });
    };

    setTimeout(function () {
      $anchorScroll();
    }, 1000);


  }]);
