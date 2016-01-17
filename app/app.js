'use strict';

angular.module('webApp', [
  'webApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function($urlRouterProvider, $locationProvider, $stateProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController'
      })
      .state('category-detail', {
        url: '/category-detail',
        templateUrl: 'app/category-detail/category-detail.html',
        controller: 'CategoryDetailController',
        controllerAs: 'category-detail'
      })
      .state('topic-detail', {
        url: '/topic-detail',
        templateUrl: 'app/topic-detail/topic-detail.html',
        controller: 'TopicDetailController',
        controllerAs: 'topic-detail'
      })
      .state('sign-up', {
        url: '/sign-up',
        templateUrl: 'app/sign-up/sign-up.html',
        controller: 'SignUpController',
        controllerAs: 'sign-up'
      })

    ;
  });
