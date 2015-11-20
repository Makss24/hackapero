function partyListCtrl($scope, $http, partyService) {

  function load(){
    partyService.get().then(function(res){
      $scope.partys = res.data;
    });
  }

load();

  // function loadById(){
  //   partyService.getById().then(function(res){
  //     $scope.party = res.data;
  //   });
  // }
}
