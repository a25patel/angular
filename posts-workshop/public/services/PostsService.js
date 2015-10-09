app.factory('PostsService', function($http, $location){
  return{
    all: function(){
      return $http.get('/api/posts').then(function(response){
        return response.data;
      })
    },
    create: function (newPost) {
      return $http.post('/api/posts', newPost)
    },
    one: function(){
      var id = $location.path();
      return $http.get('/api/posts' + id).then(function(response){
        return response.data;
      })
    },
    delete: function(){
      var id = $location.path();
      if(id != '/'){
        return $http.post('/api/posts' + id + '/delete')
      }
    },
    edit: function(){
      var id = $location.path();
      if(id != '/'){
        return $http.get('/api/posts' + id)
      }
    },
    update: function(editPost){
        return $http.post('/api/posts/' + editPost._id, editPost).then(function (response) {
          console.log(response);
          return response;
        })
      }
    }
  })
