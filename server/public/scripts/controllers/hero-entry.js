app.controller('HeroEntryController',['$http',function($http){
    console.log('Hero Entry Controller loaded');
    var self = this;

    self.newHeroObject = {};

    self.addNewHero = function(){
      $http({
        method: 'POST',
        url:'/heroes',
        data: self.newHeroObject
      }).then(function(response){
        console.log('addHero() done, response from server is: ',response);
        self.newHeroObject = {}
      });//end http AJAX

    }//end self.addHero




}]);//end controller
