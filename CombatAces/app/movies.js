(function(){
	var app = angular.module('combat-movies', [ ]);

    //Directives
    app.directive('movieSnippet', function(){
    	return{
    		restrict: 'E',
    		templateUrl: '../views/movie-snippet.html'
    	};
    });

    app.directive("movieModal", function(){
      return{
        restrict: 'E',
        templateUrl: '../views/movie-modal.html',
        controller: function(){
            this.current = 0;
            this.setCurrent = function(current){
              this.current = current || 0;
            };
            this.isSet = function(current){
              return this.current === current;
            };
          
        },
        controllerAs: 'myModal'
      };
    });

 

})();