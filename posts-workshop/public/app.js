var app = angular.module('posts-workshop', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('/', {
      url: '/',
      templateUrl: 'partials/posts.html',
      controller: 'PostsController'
    });
});
