(function(angular) {

	var services = angular.module('esteticApp.services');
	services.factory('LoginService',
		function($http, $wopo, WebStorageService, CryptSha1Service) {

		var _service = function() {

			this.getToken = function(){
				return WebStorageService.getLocalStorage('_$token') || WebStorageService.getSessionStorage('_$token');
			};

            this.incluir = function(model) {
            	model.password = CryptSha1Service.hash(model.password);
               	return $http.post('https://api.parse.com/1/users', model, {
                    headers:{
                        'X-Parse-Application-Id': $wopo.APP_ID,
                        'X-Parse-REST-API-Key': $wopo.REST_API_KEY,
                        'Content-Type':'application/json'
                    }
                }).success(function(data, status) {
					if (status == 200 && !!data.sessionToken) {
						   //      Role: {
									// "__op": "AddRelation",
							  //         "objects": [
							  //           {
							  //             "__type": "Pointer",
							  //             "className": "Role",
							  //             "objectId": "jqK7bj0mex"
							  //           },
						   //      	]
						   //      }

						if (model.salvarSenha) WebStorageService.setLocalStorage('_$token', data.sessionToken);
						else WebStorageService.setSessionStorage('_$token', data.sessionToken);
					}
                }).error(function (data, status) {
                	console.log(status);
					console.log(data);
				});
            };

			this.efetuarLogin = function (model) {
                // var whereQuery = {type: subtype};
                console.log(model);
				if (!!this.getToken()) this.logOut();

                return $http.get('https://api.parse.com/1/login', {

                    headers:{
                        'X-Parse-Application-Id': $wopo.APP_ID,
                        'X-Parse-REST-API-Key': $wopo.REST_API_KEY,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    params: {
                     	username: model.username, password: CryptSha1Service.hash(model.password),
                      	// where: {username: _usuario, password: _senha},
                     	// limit: 2,
                     	// count: 1
                     	// include: "something"
                    }

                }).success(function(data, status) {
					if (status == 200 && !!data.sessionToken) {
						if (model.salvarSenha) WebStorageService.setLocalStorage('_$token', data.sessionToken);
						else WebStorageService.setSessionStorage('_$token', data.sessionToken);
					}
                }).error(function (data, status) {
                	console.log(status);
					console.log(data);
				});
			};

			this.getUsuario = function() {
				var token = this.getToken();
				return $http.get('https://api.parse.com/1/users/me', {
                    headers: {
                        'X-Parse-Application-Id': $wopo.APP_ID,
                        'X-Parse-REST-API-Key': $wopo.REST_API_KEY,
                        'X-Parse-Session-Token': token,
                    },
                }).success(function(data, status) {
					if (status == 200) {
						console.log(data);
					}
                }).error(function (data, status) {
                	console.log(data.error);
				});
			};

			this.usuarioAutenticado = function() {
				var token = this.getToken();
				if (!token || token === null) return false;
				else return true;
			};

			this.logout = function() {
				var token = this.getToken();
				if (!!token) {
					return $http.post('https://api.parse.com/1/logout', '', {

	                    headers: {
	                        'X-Parse-Application-Id': $wopo.APP_ID,
	                        'X-Parse-REST-API-Key': $wopo.REST_API_KEY,
	                        'X-Parse-Session-Token': token,
	                    }

	                }).success(function(data, status, headers) {
						if (status == 200) {
							sessionStorage.removeItem('_$token');
							sessionStorage.clear();
							localStorage.removeItem('_$token');
							localStorage.clear();
						}
	                }).error(function (data, status) {
	                	// console.log(status);
	                	console.log(data.error);
					});
				}
			};
            
            this.recuperarSenha = function(model) {
                var headers = angular.copy(self.headers, headers);
                _headers['Content-Type'] = 'application/json';
                                
                return $http.post('https://api.parse.com/1/requestPasswordReset', model, { headers: _headers })
                   .success(function(data, status) {
      console.log('Senha enviada com sucesso.');
                }).error(function (data, status) {
                    if (status === 400 && data.code === 202) {
                        console.warn('O nome de usuário ' + model.usuario + ' já está cadastrado.');   
                    }
     console.log(data);
    });
            };
		};

		return new _service();

	});

})(angular);
