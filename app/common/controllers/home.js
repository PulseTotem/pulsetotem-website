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

      $rootScope.$on('$translateChangeSuccess', function () {
        $scope.displayAndTranslate();
      });

      $scope.displayAndTranslate = function () {
        $scope.ppArray = [];

        $translate(['HOME.MULTICONTENT.TITLE', 'HOME.MULTICONTENT.SUBTITLE']).then(function (translation) {
          $scope.ppArray.push({
            image: 'images/home/multi-content.jpg',
            title: translation['HOME.MULTICONTENT.TITLE'],
            subtitle: translation['HOME.MULTICONTENT.SUBTITLE']
          });
        });

        $translate(['HOME.COMMUNITY.TITLE', 'HOME.COMMUNITY.SUBTITLE']).then(function (translation) {
          $scope.ppArray.push({
            image: 'images/home/communaute.jpg',
            title: translation['HOME.COMMUNITY.TITLE'],
            subtitle: translation['HOME.COMMUNITY.SUBTITLE']
          });
        });

        $translate(['HOME.INTERACTION.TITLE', 'HOME.INTERACTION.SUBTITLE']).then(function (translation) {
          $scope.ppArray.push({
            image: 'images/home/interaction.jpg',
            title: translation['HOME.INTERACTION.TITLE'],
            subtitle: translation['HOME.INTERACTION.SUBTITLE']
          });
        });

        $translate(['HOME.DYNAMIZE.TITLE', 'HOME.DYNAMIZE.SUBTITLE']).then(function (translation) {
          $scope.ppArray.push({
            image: 'images/home/dynamiser.jpg',
            title: translation['HOME.DYNAMIZE.TITLE'],
            subtitle: translation['HOME.DYNAMIZE.SUBTITLE']
          });
        });

        $scope.avRow1 = [];

        $translate(['SOLUTION.FEATURES.REALTIME.TITLE', 'SOLUTION.FEATURES.REALTIME.DESCRIPTION']).then(function (translation) {
          $scope.avRow1.push({
            icon: './bower_components/material-design-icons/action/svg/production/ic_history_48px.svg',
            title: translation['SOLUTION.FEATURES.REALTIME.TITLE'],
            description: translation['SOLUTION.FEATURES.REALTIME.DESCRIPTION']
          });
        });

        $translate(['SOLUTION.FEATURES.CENTRALIZATION.TITLE', 'SOLUTION.FEATURES.CENTRALIZATION.DESCRIPTION']).then(function (translation) {
          $scope.avRow1.push({
            icon: './bower_components/material-design-icons/file/svg/production/ic_cloud_circle_48px.svg',
            title: translation['SOLUTION.FEATURES.CENTRALIZATION.TITLE'],
            description: translation['SOLUTION.FEATURES.CENTRALIZATION.DESCRIPTION']
          });
        });

        $translate(['SOLUTION.FEATURES.INTERACTION.TITLE', 'SOLUTION.FEATURES.INTERACTION.DESCRIPTION']).then(function (translation) {
          $scope.avRow1.push({
            icon: './bower_components/material-design-icons/av/svg/production/ic_games_48px.svg',
            title: translation['SOLUTION.FEATURES.INTERACTION.TITLE'],
            description: translation['SOLUTION.FEATURES.INTERACTION.DESCRIPTION']
          });
        });

        $translate(['SOLUTION.FEATURES.AUTOMATED.TITLE', 'SOLUTION.FEATURES.AUTOMATED.DESCRIPTION']).then(function (translation) {
          $scope.avRow1.push({
            icon: './bower_components/material-design-icons/content/svg/production/ic_archive_48px.svg',
            title: translation['SOLUTION.FEATURES.AUTOMATED.TITLE'],
            description: translation['SOLUTION.FEATURES.AUTOMATED.DESCRIPTION']
          });
        });

        $translate(['SOLUTION.FEATURES.DYNAMICEVENTS.TITLE', 'SOLUTION.FEATURES.DYNAMICEVENTS.DESCRIPTION']).then(function (translation) {
          $scope.avRow1.push({
            icon: './bower_components/material-design-icons/notification/svg/production/ic_event_available_48px.svg',
            title: translation['SOLUTION.FEATURES.DYNAMICEVENTS.TITLE'],
            description: translation['SOLUTION.FEATURES.DYNAMICEVENTS.DESCRIPTION']
          });
        });

        $translate(['SOLUTION.FEATURES.CUSTOMIZATION.TITLE', 'SOLUTION.FEATURES.CUSTOMIZATION.DESCRIPTION']).then(function (translation) {
          $scope.avRow1.push({
            icon: './bower_components/material-design-icons/action/svg/production/ic_build_48px.svg',
            title: translation['SOLUTION.FEATURES.CUSTOMIZATION.TITLE'],
            description: translation['SOLUTION.FEATURES.CUSTOMIZATION.DESCRIPTION']
          });
        });

        $translate(['SOLUTION.FEATURES.FULLWEB.TITLE', 'SOLUTION.FEATURES.FULLWEB.DESCRIPTION']).then(function (translation) {
          $scope.avRow1.push({
            icon: './bower_components/material-design-icons/av/svg/production/ic_airplay_48px.svg',
            title: translation['SOLUTION.FEATURES.FULLWEB.TITLE'],
            description: translation['SOLUTION.FEATURES.FULLWEB.DESCRIPTION']
          });
        });
      };

      $scope.displayAndTranslate();

      /*$scope.ppArray.push({
       image: 'images/home/dynamiser.jpg',
       whiteTheme: false,
       title: 'Dynamisez vos évènements avec l\'ajout d\'écrans interactifs n\'est pas dans votre top priorité',
       subtitle: 'Contactez nous, appuyez vous sur notre expérience et nos compétences en interactions !'
       });*/


      $scope.productionsArray = [];
      $scope.productionsArray.push({
        image: "images/productions/fetedelascience.jpg",
        title: "Fête de la science 2015",
        subtitle: "Stand et démonstration d'une prise de contrôle de l'écran avec une tablette pour laisser un message dans notre livre d'interactif",
        description: "3 zones avec les tweets de l'évènement dans la zone de droite, la diffusion des messages de notre livre d'or dans la zone à gauche et la prise de contrôle elle-même dans la zone du haut.",
        IsOpen: false
      });
      $scope.productionsArray.push({
        image: "images/productions/mangameshow.jpg",
        title: "MangameShow 2015",
        subtitle: "Stand et démonstration d'une prise de contrôle de l'écran avec son smartphone, pour déclencher la prise d'une photo par l'écran lui-même",
        description: "3 zones avec des vidéos promotionnelles et les tweets de l'évènement dans les 2 zones à droite, la diffusion des photos prises avec l'écran et la prise de contrôle elle-même dans la zone principale.",
        IsOpen: false
      });
      $scope.productionsArray.push({
        image: "images/productions/pandapero.png",
        title: "Panda'Pero #3",
        subtitle: "Démonstration à l'occasion du Panda'Pero 3ème édition, organisé par Panda'Events",
        description: "4 zones avec des vidéos promotionnelles et les tweets de l'évènement dans les 2 zones à gauche, des slides promotionnels dans la zone principale à droite, et les logos des sponsors de la soirée dans la zone du bas.",
        IsOpen: false
      });
      $scope.productionsArray.push({
        image: "images/productions/choralies2013.jpg",
        title: "Les Choralies 2013",
        subtitle: "9 écrans (dont 2 géants) sur 10 jours à Vaison-La-Romaine, 4000 participants",
        description: "Diffusion de différents types d'informations, photos, vidéos, affiches, annonces, calendrier des animations en cours etc. ",
        IsOpen: false
      });

      $scope.rewards = [];
      $scope.rewards.push({
        logo: 'images/rewards/LogoFondationUnice.png',
        name: "Fondation Unice 2015",
        description: "Lauréat du concours \"Création/Reprise d'entreprise\" 2015"
      });
      $scope.rewards.push({
        logo: 'images/rewards/ilab2015.jpg',
        name: "iLab 2015 - Pepite",
        description: "Lauréat du prix Pepite du concours iLab 2015 du ministère de l'enseignement supérieur et de la recherche"
      });
      $scope.rewards.push({
        logo: 'images/rewards/logo-innovact-center.png',
        name: "Innovact 2014",
        description: "Finaliste campus du forum Innovact 2014"
      });
   //});


    setTimeout(function () {
      $anchorScroll();
    }, 1000);


  }]);
