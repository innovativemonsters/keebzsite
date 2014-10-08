var keebzSite = angular.module('keebzSite', ['ngRoute']);

keebzSite.config(function ($routeProvider) {
   $routeProvider
      .when('/',
        {
      templateUrl: 'views/music.html'
        })
 });
