angular.module('app', [
    'ngRoute',
    'ngCookies',
    'ngMessages',
    'student'
]);

angular.module('app')
        .config(function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('');
            $routeProvider.when('/student', {
                templateUrl: '/modules/student/views/index.tpl',
                controller: 'StudentController'
            })
                    .when('/student/view/:id', {
                        templateUrl: '/modules/student/views/single-student.tpl',
                controller: 'SingleStudentController'
            })
                    .when('/student/add', {
                        templateUrl: '/modules/student/views/student-form.tpl',
                        controller: 'AddStudentController'
                    })
                    .when('/student/edit/:id', {
                        templateUrl: '/modules/student/views/student-form.tpl',
                        controller: 'EditStudentController'
                    })
        })

