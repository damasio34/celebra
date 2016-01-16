(function(angular) {

    var services = angular.module('esteticApp.services')	
	services.factory('ProfissionalService', function(RestServiceBase) {

		var _service = function() {};

		var base = new RestServiceBase();
		base.setMainRoute('Profissional');
		// Herdando a implementação de RestServiceBase
		_service.prototype = base;

		return new _service();

	});

})(angular);