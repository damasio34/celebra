(function(angular){

	angular.module('celebra', [

	    // lib
	    'ionic',
        'wopo',

	    // modulos
	    'celebra.services',
	    'celebra.controllers'

	]);

})(angular);

(function(angular) {

    var app = angular.module('celebra');
    app.constant('$ionicLoadingConfig', {
        template: '<ion-spinner icon="android"></ion-spinner>',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
    });
    
})(angular);