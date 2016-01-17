var app = angular.module('celebra.controllers');

app.controller('CultoIncluirController', function($scope, $state, $filter, CultoService) {

    $scope.Model = {};

	$scope.salvar = function (form) {
		if(form.$valid) {     
            var model = { 
                data: {
                "__type": "Date",
                "iso": new Date($scope.Model.dia.getFullYear(), 
                    $scope.Model.dia.getMonth(), $scope.Model.dia.getDay(), 
                    $scope.Model.hora.getHours(), $scope.Model.hora.getMinutes(), 
                    $scope.Model.hora.getSeconds()).toISOString()
                }
            };
            
			CultoService.incluir(model).then(function() {
		    	$state.go('app.culto');
		  	}, function() {
			    console.log("erro");
		  	});
	  	};
	};

});