'use strict';

/**
 * @ngdoc function
 * @name pulsetotemApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the pulsetotemApp
 */
angular.module('PulseTotemCommon')
  .controller('PulseTotemCommon.HomeCtrl', ['$scope', function($scope){
    $scope.ppArray = [];
    $scope.ppArray.push({
      image: 'images/home/multi-content.jpg',
      whiteTheme: false,
      title: 'Gagnez du temps sur votre communication',
      subtitle: 'Avec PulseTotem, centralisez vos contenus et diffusez les sur un écran'
    });
    $scope.ppArray.push({
      image: 'images/home/communaute.jpg',
      whiteTheme: false,
      title: 'Renforcez le dynamisme de vos écrans',
      //subtitle: 'Utilisez votre communauté et laissez la contribuer au contenu de vos écrans !'
      subtitle: 'Laissez votre communauté s\'exprimer en temps réel sur vos écrans'
    });
    $scope.ppArray.push({
      image: 'images/home/interaction.png',
      whiteTheme: false,
      title: 'Engagez votre audience',
      subtitle: 'Impliquez vos utilisateurs avec de l\'interaction'
    });
    $scope.ppArray.push({
      //image: 'images/home/equipe.jpg',
      image: 'images/home/dynamiser.jpg',
      whiteTheme: false,
      title: 'Différenciez vous, soyez innovants dans vos communications numériques',
      subtitle: 'Appuyez vous sur l\'équipe de PulseTotem et construisons ensemble la solution qui vous convient'
    });

    /*$scope.ppArray.push({
      image: 'images/home/dynamiser.jpg',
      whiteTheme: false,
      title: 'Dynamisez vos évènements avec l\'ajout d\'écrans interactifs n\'est pas dans votre top priorité',
      subtitle: 'Contactez nous, appuyez vous sur notre expérience et nos compétences en interactions !'
    });*/

    $scope.avRow1 = [];
    $scope.avRow1.push({
      icon: './bower_components/material-design-icons/action/svg/production/ic_history_48px.svg',
      text: "Temps réel"
    });
    $scope.avRow1.push({
      icon: './bower_components/material-design-icons/file/svg/production/ic_cloud_circle_48px.svg',
      text: "Centralisation des contenus"
    });
    $scope.avRow1.push({
      icon: './bower_components/material-design-icons/av/svg/production/ic_games_48px.svg',
      text: "Interactions directes"
    });
    $scope.avRow1.push({
      icon: './bower_components/material-design-icons/content/svg/production/ic_archive_48px.svg',
      text: "Récupération automatisée des contenus existants"
    });

    $scope.avRow2 = [];
    $scope.avRow2.push({
      icon: './bower_components/material-design-icons/notification/svg/production/ic_event_available_48px.svg',
      text: "Dynamisation des évènements"
    });
    $scope.avRow2.push({
      icon: './bower_components/material-design-icons/action/svg/production/ic_build_48px.svg',
      text: "Personnalisation"
    });
    $scope.avRow2.push({
      icon: './bower_components/material-design-icons/av/svg/production/ic_airplay_48px.svg',
      text: "Full Web"
    });

  }]);
