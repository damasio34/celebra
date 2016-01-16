var app = angular.module('esteticApp.controllers');

app.controller('LoginIncluirController', function($scope, $state, LoginService) {

    $scope.Model = {};

	$scope.signUp = function (form) {
        $scope.Model.diaNascimento = parseInt($scope.Model.diaNascimento);
        $scope.Model.mesNascimento = parseInt($scope.Model.mesNascimento);
		if(form.$valid) {
			LoginService.incluir($scope.Model).then(function() {
		    	$state.go('login');
		  	}, function() {
			    console.log("erro");
		  	});
	  	};
	};

});