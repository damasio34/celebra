(function(angular) {

    var services = angular.module('celebra.services')	
	services.factory('CultoService', function(RestServiceBase) {

		var _service = function() {};

		var base = new RestServiceBase();
		base.setMainRoute('Culto');
		// Herdando a implementação de RestServiceBase
		_service.prototype = base;

		return new _service();

	});

})(angular);