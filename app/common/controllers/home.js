'use strict';

/**
 * @ngdoc function
 * @name pulsetotemApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the pulsetotemApp
 */
angular.module('PulseTotemCommon')
  .controller('PulseTotemCommon.HomeCtrl', ['$rootScope', '$scope', '$anchorScroll', '$translate', function($rootScope, $scope, $anchorScroll, $translate){

    $scope.ppArray = [];

    $scope.ppArray.push({
      image: 'images/home/communaute.jpg',
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
      image: 'images/home/multi-content.jpg',
      title: 'HOME.MULTICONTENT.TITLE',
      subtitle: 'HOME.MULTICONTENT.SUBTITLE',
      blog: null,
      contactus: false
    });

    $scope.ppArray.push({
      image: 'images/home/dynamiser.jpg',
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
        title: "Fête de la science 2015",
        subtitle: "Stand et démonstration d'une prise de contrôle de l'écran avec une tablette pour laisser un message dans notre livre d'interactif"
      });
      $scope.productionsArray.push({
        image: "images/productions/mangameshow.jpg",
        title: "MangameShow 2015",
        subtitle: "Stand et démonstration d'une prise de contrôle de l'écran avec son smartphone, pour déclencher la prise d'une photo par l'écran lui-même"
      });
      $scope.productionsArray.push({
        image: "images/productions/pandapero.jpg",
        title: "Panda'Pero #3",
        subtitle: "Démonstration à l'occasion du Panda'Pero 3ème édition, organisé par Panda'Events"
      });
      $scope.productionsArray.push({
        image: "images/productions/choralies2013.jpg",
        title: "Les Choralies 2013",
        subtitle: "9 écrans (dont 2 géants) sur 10 jours à Vaison-La-Romaine, 4000 participants"
      });

      $scope.supporters = [];
      $scope.supporters.push({
        logo: 'images/rewards/LogoFondationUnice.png'
      });
      $scope.supporters.push({
        logo: 'images/rewards/ilab2015.jpg'
      });
      $scope.supporters.push({
        logo: 'images/rewards/logo-innovact-center.png'
      });
      $scope.supporters.push({
        logo: 'images/logos/ipe_logo.jpg'
      });

    setTimeout(function () {
      $anchorScroll();
    }, 1000);


  }]);
