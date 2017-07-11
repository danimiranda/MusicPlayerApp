(function() {

  'use strict';
  angular.module('starter').config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('find', {
      url: '/find',
      templateUrl: 'app/songs/find.html',
      controller: 'FindController',
      controllerAs: 'vm'
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/find');
  });
})();
