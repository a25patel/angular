app.controller('PostsController', function($scope, PostsService){
  $scope.variable = 'yellow';
  $scope.newForm = false;
  $scope.showForm = function(){
    $scope.newForm = !$scope.newForm;
  }
  PostsService.all().then(function(posts){
    $scope.posts = posts;
  });
});
