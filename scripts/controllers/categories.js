angular.module('helpmeApp')
    .controller('CategoriesC', function ($scope, $http, Base64) {
        var username = 'tst', password = 'foo';
        $http({method: 'GET', url: '../../fixtures/categories.json', headers: {
            Authorization: 'Basic ' + Base64.encode(username + ':' + password)
        }})
            .success(function (data, status) {
                $scope.status = status;
                $scope.categories = data;
            })
            .error(function (data, status) {
                $scope.status = status;
                $scope.data = data;
            })
    });