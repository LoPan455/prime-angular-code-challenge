app.controller('HeroListController',['$http', function($http){
    console.log('Hero List Controller loaded');
    var self = this;
    self.testMessage = 'Test message is good';
    self.heroesList = {};

    getHeroes()

    function getHeroes(){
      $http({
        method: 'GET',
        url: '/heroes'
      }).then(function(response){
        // console.log('response from server is: ',response);
         self.heroesList.list = response.data;
      })//end AJAX HTTP GET
    }//end function getHeroes()

    self.deleteHero = function(id){
      console.log('hit the deleteHeroes() function in the controller');
      $http({
        method: 'DELETE',
        url: '/heroes/' + id
      }).then(function(response){
        console.log('deleteHeroes() complete. Response from server is: ',response);
        getHeroes();
      })
    }






}]); //end controller
