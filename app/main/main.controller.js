'use strict';

(function () {

  angular.module('webApp')
    .controller('MainController', ['$http', '$scope', function ($http, $scope) {
      $scope.documents = [];
      $http({
        method: 'GET',
        url: '/api/documents'
      }).then(function (response) {
        console.log(response);
        $scope.documents = response.data;
      }, function (response) {
        console.log(response);
      });
    }]);
})();
