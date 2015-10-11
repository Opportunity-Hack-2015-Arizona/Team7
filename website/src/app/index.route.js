(function() {
  'use strict';

  angular
    .module('website')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main',{
        abstract: true,
        templateUrl: 'app/templates/main.html'
      })
      .state('home', {
        parent: 'main',
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('admin',{
        abstract: true,
        url: '/admin',
        templateUrl: 'app/templates/admin.html'
      })
      .state('dashboard',{
        parent: 'admin',
        data: {requiresLogin: true},
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html'
      })
      .state('events',{
        abstract: true,
        parent: 'admin',
        url: '/events',
        template: '<div ui-view></div>'
      })
      .state('events.list',{
        data: {requiresLogin: true},
        url: '/events',
        templateUrl: 'app/events/events.html',
        controller: 'EventsController',
        controllerAs: 'events'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .state('logout', {
        url: '/logout',
        templateUrl: 'app/logout/logout.html',
        resolve: {
          logout: function (authHelper) {
            return authHelper.logout();
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
