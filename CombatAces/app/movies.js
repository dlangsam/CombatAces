(function(){
	var app = angular.module('combat-movies', [ ]);

    //Directives
    app.directive('movieSnippet', function(){
    	return{
    		restrict: 'E',
    		templateUrl: '../views/movie-snippet.html'
    	};
    });

 

})();