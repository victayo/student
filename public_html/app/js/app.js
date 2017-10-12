angular.module('app', [
    'ngRoute',
    'student'
]);

angular.module('app')
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider.when('/student', {
                templateUrl: '/app/modules/student/views/index.tpl',
                controller: 'StudentController'
            })
                    .when('/student/add', {
                        templateUrl: '/app/modules/student/views/student-form.tpl',
                        controller: 'AddStudentController'
                    })
                    .when('/student/edit/:id', {
                        templateUrl: '/app/modules/student/views/student-form.tpl',
                        controller: 'EditStudentController'
                    })
        })


