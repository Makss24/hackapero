/* ---------------------------------------------------- *\
										PARTYSERVICE
\* ---------------------------------------------------- */

function partyService($http) {
	return {
		get : function() {
			return $http.get('http://localhost:8060/partys');
		},
		getById : function(id) {
			return $http.get('http://localhost:8060/partys/' + id);
		},
		create : function(account) {
			return $http.post('http://localhost:8060/partys/', account);
		},
		update : function(id, account) {
			return $http.put('http://localhost:8060/partys/' + id, account);
		},
		delete : function(id) {
			return $http.delete('http://localhost:8060/partys/' + id);
		}
	}
};