My notes and questions on the angular curriculum:

* Helps build complex and single-page applications very quickly


Why Angular:
  1. compared to the others (backbone, ember, knockout), Angular
  2. takes way less code,
  3. easier to understand
  4. live templating engine
  5. great for testing
  6. forward thinking, mobile market
  7. directives can be a pro and a con

Complaints:
  1. directives can be hard for developers to wrap their heads around
  2. hard to debug
  3. router is limited

*MVC: yes  WHY?!?!?!?!?*

jQuery Dependency:
  Yes and no. Angular can use the jQuery file available in our app, if that file does not exist then angula falls back on it's built in jQuery subset, jQlite.

ng stands for angular.



Codecademy Angular Notes:
app.js
var app = angular.module('myApp', []);
    // Contains difference components of angular app
    // can name things anything but this goes into the html,
      <body ng-app> or <body ng-app='myApp'>
    //directives -

mainController.js
app.controller('MainController', ['$scope', function($scope){
$scope.title = 'Top Sellers in Books'}]);
  //controller manages apps data
  ng-controller defines controller scope. properties attached become available to use.

{{name}} - expression (used to display values on a page)

filter - formats value of an expression {{name | uppercase (filter)}}

Directives:
  Create new directive:
    app.directive('appInfo', function(){return{
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: 'js/directives/appInfo.html'
      };});
    * restrict - how the directive will be used
    * E - used as a new HTML element
    * scope - pass information in this directive through attribute 'info'
    * = - tells directive to look for attribute names 'info' in element
      ex: <app-info info='something'></app-info>
    * data in 'info' becomes available to use in template given by templateUrl
      * templateUrl specs HTML to use in order to display data in scope.info


Anguar Animations:
https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.4.0/animate.min.css
https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.4/angular-animate.js
