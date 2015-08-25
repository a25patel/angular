My notes and questions on the angular curriculum:

* Helps build complex and single-page applications very quickly


Why Angular:
  compared to the others (backbone, ember, knockout), Angular takes way less code,
  easier to understand
  live templating engine
  great for testing
  forward thinking, mobile market
  directives can be a pro and a con

Complaints:
  1. directives can be hard for developers to wrap their heads around
  2. hard to debug
  3. router is limited

MVC: yes  WHY?!?!?!?!?

Yes and no. Angular can use the jQuery file available in our app, if that file does not exist then angula falls back on it's built in jQuery subset, jQlite.
ng stands for angular.



Codecademy Angular Notes:
app.js
var app = angular.module('myApp', []);
    // can name things anything but this goes into the html,
      <body ng-app> or <body ng-app='myApp'>
    //directives -

mainController.js
app.controller('MainController', ['$scope', function($scope){
$scope.title = 'Top Sellers in Books'}]);
  //controller manages apps data
  ng-controller defines controller scope. properties attached become available to use.

{{name}} - expression (used to display values on a page)

filter - formats value of an expression



Anguar Animations:
https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.4.0/animate.min.css
https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.4/angular-animate.js
