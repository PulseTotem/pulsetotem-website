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
      title: 'Créer de l\'information pour diffuser sur des écrans est une perte de temps',
      subtitle: 'Centralisez vos contenus et diffusez les sur un écran !'
    });
    $scope.ppArray.push({
      image: 'images/home/communaute.jpg',
      whiteTheme: false,
      title: 'Trop de contenus à maintenir et à renouveller',
      subtitle: 'Passez au temps réel, utilisez votre communauté et laissez la s\'exprimer sur vos écrans !'
    });
    $scope.ppArray.push({
      image: 'images/home/interaction.png',
      whiteTheme: false,
      title: 'Un manque d\'engagement des utilisateurs face aux informations diffusées',
      subtitle: 'Engagez votre audience avec de l\'interaction !'
    });
    $scope.ppArray.push({
      image: 'images/home/equipe.jpg',
      whiteTheme: false,
      title: 'Une bonne communication sur écran est couteuse en temps et complexe à déployer',
      subtitle: 'Appuyez vous sur l\'équipe de PulseTotem et construisons ensemble la solution qui vous convient !'
    });
    $scope.ppArray.push({
      image: 'images/home/dynamiser.jpg',
      whiteTheme: false,
      title: 'Dynamisez vos évènements avec l\'ajout d\'écrans interactifs n\'est pas dans votre top priorité',
      subtitle: 'Contactez nous, appuyez vous sur notre expérience et nos compétences en interactions !'
    });
  }]);
