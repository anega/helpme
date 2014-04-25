angular.module('helpmeApp', [
        'ui.router',
        'ngTouch',
        'angular-carousel'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
        //delete $httpProvider.defaults.headers.common['X-Requested-With'];

        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .state('item', {
                url: '/item/{id}',
                templateUrl: 'views/item.html',
                controller: 'ItemCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .state('registration', {
                url: '/registration',
                templateUrl: 'views/registration.html',
                controller: 'RegistrationCtrl'
            })
            .state('addAnnouncement', {
                url: '/add-announcement',
                templateUrl: 'views/addAnnouncement.html',
                controller: 'AddannouncementCtrl'
            });
    });
