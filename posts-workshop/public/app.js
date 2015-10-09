var app = angular.module('posts-workshop', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('posts', {
      url: '/',
      templateUrl: 'partials/posts.html',
      controller: 'PostsController'
    })
    .state('show',{
      url: '/:id',
      templateUrl: 'partials/show.html',
      controller: 'PostsController'
    })
    .state('edit', {
      url: '/:id/edit',
      templateUrl: 'partials/edit.html',
      controller: 'EditController'
    })
});
