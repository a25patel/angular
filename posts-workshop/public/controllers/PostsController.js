app.controller('PostsController', function($scope, PostsService, $http){
  $scope.variable = 'yellow';
  $scope.newForm = false;
  $scope.showForm = function(){
    $scope.newForm = !$scope.newForm;
  }
  PostsService.all().then(function(posts){
    $scope.posts = posts;
  });
  $scope.createPost = function(newPost){
    PostsService.create(newPost);
    $scope.newForm = !$scope.newForm;
  }
});
