'use strict';

/**
 * @ngdoc function
 * @name pulsetotemApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the pulsetotemApp
 */
angular.module('PulseTotemCommon')
  .controller('PulseTotemCommon.HomeCtrl', ['$scope', '$anchorScroll', function($scope, $anchorScroll){
    $scope.ppArray = [];
    $scope.ppArray.push({
      image: 'images/home/multi-content.jpg',
      title: 'Gagnez du temps sur votre communication',
      subtitle: 'Avec PulseTotem, centralisez vos contenus et diffusez les sur un écran'
    });
    $scope.ppArray.push({
      image: 'images/home/communaute.jpg',
      title: 'Renforcez le dynamisme de vos écrans',
      //subtitle: 'Utilisez votre communauté et laissez la contribuer au contenu de vos écrans !'
      subtitle: 'Laissez votre communauté s\'exprimer en temps réel sur vos écrans'
    });
    $scope.ppArray.push({
      image: 'images/home/interaction.png',
      title: 'Engagez votre audience',
      subtitle: 'Impliquez vos utilisateurs avec de l\'interaction'
    });
    $scope.ppArray.push({
      //image: 'images/home/equipe.jpg',
      image: 'images/home/dynamiser.jpg',
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
      title: "Temps réel",
      description: "Conservez votre audience en diffusant les contenus les plus récents en temps réel !"
    });
    $scope.avRow1.push({
      icon: './bower_components/material-design-icons/file/svg/production/ic_cloud_circle_48px.svg',
      title: "Centralisation des contenus",
      description: "Fini le casse tête pour la gestion de vos différents médias : gérez tous vos contenus depuis une unique plateforme !"
    });
    $scope.avRow1.push({
      icon: './bower_components/material-design-icons/av/svg/production/ic_games_48px.svg',
      title: "Interactions directes",
      description: "Engagez vos usagers en leur permettant d'interagir en direct avec vos écrans et multipliez votre audience !"
    });
    $scope.avRow1.push({
      icon: './bower_components/material-design-icons/content/svg/production/ic_archive_48px.svg',
      title: "Récupération automatisée des contenus existants",
      description: "Pourquoi recréer du contenu s'il existe déjà ? Ne perdez plus de temps et utilisez notre plateforme pour récupérer de manière automatisée les contenus que vous avez déjà réalisés ailleurs !"
    });

    $scope.avRow2 = [];
    $scope.avRow1.push({
      icon: './bower_components/material-design-icons/notification/svg/production/ic_event_available_48px.svg',
      title: "Dynamisation des évènements",
      description: "Tout le monde utilise son smartphone lors de vos événements ? Profitez-en pour donner un second souffle à vos événements en diffusant en direct les réactions de votre communauté sur écran et en les invitant à participer !"
    });
    $scope.avRow1.push({
      icon: './bower_components/material-design-icons/action/svg/production/ic_build_48px.svg',
      title: "Personnalisation",
      description: "Envie d'un affichage original mais pas le temps ni le budget ? Qu'à cela ne tienne : profitez des avantages de personnalisation et des interfaces simplifiées de notre solution et adaptez la diffusion à votre image !"
    });
    $scope.avRow1.push({
      icon: './bower_components/material-design-icons/av/svg/production/ic_airplay_48px.svg',
      title: "Full Web",
      description: "Besoin d'accéder à vos écrans ou de changer du contenu alors que vous êtes en déplacement ? Plus d'inquiétude : notre solution ne nécessite qu'un navigateur web pour être utilisée et administrée !"
    });


    setTimeout(function () {
      $anchorScroll();
    }, 1000);


  }]);
