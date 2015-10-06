app.controller('mainController', ['$scope' , function($scope){
  $scope.favColor = 'red';
  $scope.secondsInACentury= (100 * 365 * 24 * 60 * 60);
  $scope.rightNow = new Date();
  $scope.symbols = [
    '\u2660', '\u2663', '\u2665', '\u2666'];
  $scope.numbers = [1,1,2,5,6,9,9,9,9];
  $scope.objects=[
    {
      Name: 'Aanal',
      Age: 24,
      School: 'Galvanize',
    }, {
      Name: 'Jaylyn',
      Age: 24,
      School: 'Galvanize',
    }
  ];
  $scope.cameras = [
    {
      title: "Nikon D3100 DSLR",
      image: "http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg",
      rating: 3.4,
      price: 369.99,
      onSale: true
    },
    {
      title: "Canon EOS 70D",
      image: "http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg",
      rating: 2.0,
      price: 1099.0,
      onSale: false
    },
    {
      title: "Nikon D810A",
      image:"http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg",
      rating: 4.2,
      price: 3796.95,
      onSale: true
    }
  ];
  $scope.number = 5;
  $scope.pickRandomNumber = function(){
    $scope.number = Math.floor(Math.random() * 10) + 1
  };
  $scope.reverse = function(word){
    var array = word.split('').reverse().join('');
    $scope.word = array;
  };
  $scope.score1 = 0;
  $scope.score2 = 0;
  $scope.addScore1 = function (score) {
    $scope.score1 = score + 1
  };
  $scope.addScore2 = function (score) {
    $scope.score2 = score + 1
  };
  $scope.reset = function () {
    $scope.score1 = 0;
    $scope.score2 = 0;
  };
}]);

app.controller('contacts', function ($scope) {
  $scope.contacts = [{name: 'Harry', email: 'theChosenOne@gmail.com', phone: '483-423-4231'}];
  $scope.addContact = function (name, email, phone) {
    $scope.contacts.push({name: name, email: email, phone: phone})
    $scope.name = '';
    $scope.email = '';
    $scope.phone = '';
  };
  $scope.show = function (){
    $scope.name = 'Hermione'
  };
})
