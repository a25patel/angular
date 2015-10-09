app.controller('PostsController', function($scope, PostsService, $http, $location){
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
  PostsService.one().then(function(onePost){
    $scope.onePost = onePost;
  });
  $scope.delete = function () {
    PostsService.delete().then(function(response){
        $location.path('/');
    });
  }
});

app.controller('EditController', function($scope, PostsService, $location){
  PostsService.edit().then(function(editPost){
    console.log(editPost.data);
    $scope.editPost = editPost.data;
  });

  $scope.update = function(editPost){
    PostsService.update(editPost).then(function(response){
      console.log("IN THE CONTROLLER RESPONSE");
      console.log(response);
      $location.path('/');
    });
  }
});
