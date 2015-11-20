angular.module('app.controllers', [])

.controller('connexionCtrl', function($scope, $timeout, $location) {

  $scope.doLogin = function() {

    // var spinner = document.createElement('ion-spinner');
    // spinner.className = "bubbles";


    // var loading = document.querySelector('.loading');
    // loading.appendChild(spinner);

    var loading = document.querySelector("ion-spinner");
    loading.className="show";

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $location.path("/tab/party")
    }, 6000);
  };

});
