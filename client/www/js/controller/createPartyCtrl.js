/* ---------------------------------------------------- *\
								CREATE PARTY CONTROLLER
\* ---------------------------------------------------- */

function createPartyCtrl($scope, $http, partyService, $location) {

	$scope.create = function(){
		partyService.create($scope.party).then(function(res) {
			//Redirige vers la liste des parties
			$location.path('/party');
		});
	}

}