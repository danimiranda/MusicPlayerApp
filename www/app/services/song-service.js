(function() {
  'use strcit';

  angular.module('starter')
  .service('SongsService', SongsService);

  SongsService.$inject=['$http','API'];

  function SongsService($http, API){
    var service= {
      getSongs:getSongs
    };

    function getSongs(){
      return $http({
        method : 'GET',
        url : 'https://ionic-songhop.herokuapp.com/recommendations'
      })
      .then(function(response){
        return response;
      })
      .catch(function (error){
        console.log('Error trying to get songs');
      });
    }

    return service;

  }


})();
