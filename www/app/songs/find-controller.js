(function() {
  'use strict';
  angular
    .module('starter')
    .controller('FindController', FindController);

    FindController.$inject=['$scope','$rootScope', 'SongsService', '$ionicPlatform'];

    function FindController($scope, $rootScope, SongsService, $ionicPlatform){
      var vm=this;
      var audio=new Audio();
      vm.songs = [];
       vm.addToFavorites=addToFavorites;
       vm.removeSong=removeSong;
       vm.addSongs=addSongs;
       vm.playSong=playSong;
       $ionicPlatform.ready(onReady);

      function removeSong(){
        vm.songs.splice(0,1);
        console.log(vm.songs.length);
        vm.playSong();
        if(vm.songs.length < 3){
          vm.addSongs();
        }
      }

      function onReady(){
        vm.addSongs();
      }

      function start(){
        concatSongs();

      }
      function concatSongs(){
        vm.addSongs()
        .then(function(songs){
          vm.songs=vm.songs.concat(songs);

        });
      }

      function addToFavorites(){
        $rootScope.favorite.push(vm.songs[0]);
        vm.removeSong();
        console.log('Favorites length: '+$rootScope.favorite.length);
      }

      function addSongs(){
        SongsService.getSongs()
        .then(function (response) {
          vm.songs=vm.songs.concat(response.data);
          vm.playSong();
        });
      }

      function playSong(){
        audio.src=vm.songs[0].preview_url;
        audio.play();
        console.log(vm.songs[0].title);
      }

    }
})();
