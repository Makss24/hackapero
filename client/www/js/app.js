// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app', ['ionic', 'app.controllers'])
    //.service('userService', userService)
    //.service('partyService', partyService)

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    .state('connexion', {
      url: '/connexion',
      templateUrl: 'templates/connexion.html',
      controller: 'connexionCtrl'
    })

    .state('tab.profil', {
      url: '/profil',
      views: {
        'tab-profil': {
          templateUrl:'templates/tab-profil.html'
        }
      }
    })

    .state('tab.party', {
      url: '/party',
      views: {
        'tab-party': {
          templateUrl:'templates/tab-party.html'
        }
      }
    })
    .state('tab.party_detail', {
      url: '/party/party_detail',
      views: {
        'tab-party': {
          templateUrl: 'templates/party_detail.html'
        }
      }
    })

    .state('tab.create_party', {
      url: '/create_party',
      views: {
        'tab-create_party': {
          templateUrl:'templates/tab-create_party.html'
        }
      }
    });

  // si aucun des resultats n'est trouver alors redirection sur 
  $urlRouterProvider.otherwise('/connexion');
});
