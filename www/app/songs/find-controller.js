(function() {
  'use strict';
  angular
    .module('starter')
    .controller('FindController', FindController);

    FindController.$inject=['$scope','$rootScope', 'SongsService', '$ionicPlatform'];

    function FindController($scope, $rootScope, SongsService, $ionicPlatform){
      var vm = this;
          var audio = new Audio();
          vm.songs = [];
          vm.addToFavorites = addToFavorites;
          vm.pushSongs = pushSongs;
          vm.removeSong = removeSong;
          vm.playSong = playSong;

          $ionicPlatform.ready(onReady);

          function onReady() {

            setTimeout(function () {
              vm.pushSongs();
            }, 1000);

          }

          function playSong() {
              audio.src = vm.songs[0].preview_url;
              audio.play();
              console.log("Now playing: " + vm.songs[0].title);
          }

          function pushSongs() {
              SongsService.getSongs()
              .then(function (response) {
                vm.songs = vm.songs.concat(response.data);
                vm.playSong();
              });
          }

          function addToFavorites(image, song_name){
            $rootScope.favorite.push(vm.songs[0]);
            vm.removeSong();
          }

          function removeSong() {
            vm.songs.splice(0, 1);
            vm.playSong();
            if(vm.songs.length < 3){
              vm.pushSongs();
            }
          }

        }
})();
