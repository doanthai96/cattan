'use strict';

angular.module('webApp')
  .directive('navbar', function() {
    return {
      templateUrl: 'components/navbar/navbar.html',
      restrict: 'E'
    }
  });
