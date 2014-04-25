angular.module('helpmeApp')
    .controller('ItemCtrl', function ($scope, $stateParams, $http) {
        $http({method: 'GET', url: '../../fixtures/announcement.json', data: {id: $stateParams.id}})
            .success(function (data, status) {
                $scope.status = status;
                $scope.announcement = data[0];
            })
            .error(function (data, status) {
                $scope.status = status;
                $scope.data = data;
            });

        $scope.slideIndex2 = 2;
    });
