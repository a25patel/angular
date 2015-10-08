app.factory('PostsService', function($http){
  return{
    all: function(){
      return $http.get('/api/posts').then(function(response){
        return response.data;
      })
    },
    create: function (newPost) {
      return $http.post('/api/posts', newPost).then(function(response){
        console.log(response);
      })
    },
    
  }
})
