angular.module('helpmeApp')
    .controller('MainCtrl', function ($scope, $http, Base64) {
        var username = 'tst', password = 'foo';
        $http({method: 'GET', url: 'http://chebdogs.herokuapp.com/announcement/index', headers: {
            Authorization: 'Basic ' + Base64.encode(username + ':' + password)
        }})
            .success(function (data, status) {
                $scope.status = status;
                $scope.data = data;
            })
            .error(function (data, status) {
                $scope.data = data || "Request failed";
                $scope.status = status;
            });
    });
