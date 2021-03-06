'use strict';

/**
 * @ngdoc overview
 * @name vipoitApp
 * @description
 * # vipoitApp
 *
 * Main module of the application.
 */
angular
  .module('vipoitApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch', 
    'gridster',
    'blackboard'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/test', {
        templateUrl: 'views/workbench.html',
        controller: 'blackboardCtrl',
        controllerAs: 'test'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).controller('HeaderController', function($scope, $location){ 
        $scope.isActive = function (viewLocation) { 
            return viewLocation === $location.path();
        };
      
  });
