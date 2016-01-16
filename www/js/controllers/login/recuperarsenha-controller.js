(function(angular) {
	
	var controllers = angular.module('celebra.controllers');
	controllers.controller('RecuperarSenhaController', function($scope, $state, LoginService) {
	
		$scope.Model = {
			email: 'ana@damasio34.com'
		};
	
		$scope.recuperarSenha = function (form) {
			LoginService.recuperarSenha($scope.Model).success(function(){
				$state.go('login');
			});
		};
		
	});
	
})(angular);