app.controller('PostsController', function($scope, PostsService){
  $scope.variable = 'yellow';
  PostsService.all().then(function(posts){
    $scope.posts = posts;
  })
});
