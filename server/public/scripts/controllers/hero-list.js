app.controller('HeroListController',['$http', function($http){
    console.log('Hero List Controller loaded');
    var self = this;
    self.testMessage = 'Test message is good';
    getHeroes()
    self.heroesList = {};

    function getHeroes(){
      $http({
        method: 'GET',
        url: '/heroes'
      }).then(function(response){
        console.log('response from server is: ',response);
         self.heroesList.list = response.data;

      })//end AJAX HTTP GET
    }//end function getHeroes()







}]); //end controller
