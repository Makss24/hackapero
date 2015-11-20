/* ---------------------------------------------------- *\
										USERSERVICE
\* ---------------------------------------------------- */

function userService($http) {
	return {
		get : function() {
			return $http.get('http://localhost:8060/users');
		},
		getById : function(id) {
			return $http.get('http://localhost:8060/users/' + id);
		},
		update : function(id, account) {
			return $http.put('http://localhost:8060/users/' + id, account);
		},
		create : function(account) {
			return $http.post('http://localhost:8060/users', account);
		},
		delete : function(id) {
			return $http.delete('http://localhost:8060/users/' + id);
		}
	}
};