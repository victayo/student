angular.module('app', [
    'ngRoute',
    'ngCookies',
    'student'
]);

angular.module('app')
        .config(function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('');
            $routeProvider.when('/student', {
                templateUrl: '/Student/app/modules/student/views/index.tpl',
                controller: 'StudentController'
            })
                    .when('/student/view/:id', {
                        templateUrl: '/Student/app/modules/student/views/single-student.tpl',
                controller: 'SingleStudentController'
            })
                    .when('/student/add', {
                        templateUrl: '/Student/app/modules/student/views/student-form.tpl',
                        controller: 'AddStudentController'
                    })
                    .when('/student/edit/:id', {
                        templateUrl: '/Student/app/modules/student/views/student-form.tpl',
                        controller: 'EditStudentController'
                    })
        })


