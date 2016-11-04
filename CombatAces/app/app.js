(function(){
 
  var app = angular.module('combatAces', []);


  app.controller('MainController', ['$http', function($http){
     var main = this;
    //store.products = gems;
     main.quotes = quoteList;
   main.movies = movieList; //init page to empty to array so no error before page loads
    $http.get('../data.json').success(function(data){
      main.movies = data.movies;
    });
    
     

      main.getQuote = function(){
       var numQuotes = this.quotes.length;
          var rand = Math.floor((Math.random()*numQuotes));
        return this.quotes[rand];

      };
  }]);

    //     app.controller('MainController', function(){
  //   var main = this;
  //   //store.products = gems;
  //   main.movies = []; //init page to empty to array so no error before page loads
  //   // $http.get('../data.json').success(function(data){
  //   //   main.movies = data.movies;
  //   // });

  //   main.quotes = quoteList;

  //   main.getQuote = function(){
  //      var numQuotes = this.quotes.length;
  //         var rand = Math.floor((Math.random()*numQuotes));
  //       return this.quotes[rand];

  //   };
  // });

  app.filter('isAccurate', function () {
    return function (items, level) {
      var filtered = []
      var min, max; 
      if(level === 3){
        min = 7;
        max = 10; 
      }else if(level === 2){
        min = 4;
        max = 7;
      }else if(level === 1){
        min = 1;
        max = 4;
      }else{
        min = 0;
        max = 1; 
      }
      angular.forEach(items, function(item){
          if(item.accuracy > min && item.accuracy <= max){
            filtered.push(item)
          }
      });
    return filtered;
   };
  });
 






    // app.controller('ModuleController', function(){
    //   this.movieChoice = 0; 
    //   this.setMovie = function(setMovie){
    //     this.movieChoice = setMovie;
    //   }
    //   this.isSet = function(setMovie){
    //       return this.tab  === setMovie; 
    //   }
    // });

 


    var quoteList = [

    "''Never in the field of human conflict, has so much, been owed by so many, to so few!'' -Winston Churchill",
    "''An army is a team. It lives, eats, sleeps, fights as a team. This individuality stuff is a bunch of bullshit.'' - George Patton",
    "''Courage is fear holding on a minute longer. '' - George Patton",   
    "''I'd rather have a German division infront of me, than a French one behind.'' - George Patton ",
    "''We herd sheep, we drive cattle, we lead people. Lead me, follow me, or get out of my way.'' - George Patton",
    "''Never in the field of human conflict, has so much, been owed by so many, to so few!'' -Winston Churchill",
    "''The tragedy of war is that it uses man's best to do man's worst'' - Henry Fosdick",
    "''We are going to have peace even if we have to fight for it.'' - Dwight D. Eisenhower",
    "''The death of one man is a tragedy.  The death of millions is a statistic.'' - Joseph Stalin ",
    "''The object of war is not to die for your country, but to make the other bastard die for his. '' - George Patton"
    ];



    var movieList = [
      {
        name: 'Band of Brothers',
        year: 2001,
        type: "The Movies",
        size: 50,
        accuracy: 5,
        images: [
        "img/movies/bob3.jpg",
        "img/movies/bob2.jpg",
          "img/movies/bob1.jpg"
        ]
      },
        {
        name: 'Lost Battalion',
        year: 2001,
        type: "The Movies",
        size: 5,
        accuracy: 6,
        images: [
          "img/movies/lb1.jpg"
        ]
      },
        {
        name: 'Pearl Harbor',
        year: 2001,
        type: "The Movies",
        size: 10,
        accuracy: 3,

        images: [
          "img/movies/ph1.jpg"
        ]
      },
        {
        name: 'Saving Private Ryan',
        year: 1998,
        type: "The Movies",
        size: 8,
        accuracy: 4,
         images: [
          "img/movies/spr2.jpg",
          "img/movies/spr1.jpg"
        
        ]
      },
        {
        name: 'Windtalkers',
        year: 2002,
        type: "The Movies",
        size: 9,
        accuracy: 2,
        images: [
        "img/movies/wt2.jpg",
          "img/movies/wt1.jpg"
        
        ]
      },
      {
        name: 'Patton',
        year: 1970,
        type: "The Classics",
        size: 1,
        accuracy: 7,


      },
       {
        name: 'The Desert Fox',
        year: 1951,
        type: "The Classics",
        size: 1,
        accuracy: 10
      },
       {
        name: 'The Longest Day',
        year: 1962,
        type: "The Classics",
        size: 150,
        accuracy: 9,
         images: [
          "img/movies/tld1.jpg"
        ]
      },
       {
        name: 'To the Shores of Tripoli',
        year: 1942,
        type: "The Classics",
        size: 5,
        accuracy: 1,
         images: [
          "img/movies/ttsot1.jpg"
        ]
      },
       {
        name: 'Tora! Tora! Tora!',
        year: 1970,
        type: "The Classics",
        size: 80,
        accuracy: 8
      }
    ]
   




 

})();
