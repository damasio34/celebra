var app = angular.module('celebra.controllers');

app.controller('CultoIncluirController', function($scope, $state, CultoService) {

    $scope.Model = {};

	$scope.incluir = function (form) {
		if(form.$valid) {
			CultoService.incluir($scope.Model).then(function() {
		    	$state.go('app.culto');
		  	}, function() {
			    console.log("erro");
		  	});
	  	};
	};

});