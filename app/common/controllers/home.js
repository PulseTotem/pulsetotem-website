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


    setTimeout(function () {
      $anchorScroll();
    }, 1000);


  }]);
