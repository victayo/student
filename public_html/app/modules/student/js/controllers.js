angular.module('student.controller', [])
        .controller('StudentController', ['$scope', '$location', 'studentService', function ($scope, $location, studentService) {
//                $scope.students = [];

//                    studentService.getStudents()
//                            .then(function (response) {
//                                if (response.success) {
//                                    $scope.students = response.students;
//                                }
//                            }, serverError);
                $scope.students = studentService.getStudents();

                $scope.deleteStudent = function (student) {
                    studentService.removeStudent(student);
                    $location.path('/student');
//                    studentService.removeStudent(student.id)
//                            .then(function(response){
//                                if(response.success){
//                                    $location.path('/student');
//                                }
//                    });
                };

                function serverError() {
                    console.log('an error occured while fetching data');
                }
            }])
        .controller('SingleStudentController', ['$scope', '$routeParams', 'studentService', function ($scope, $routeParams, studentService) {
                $scope.student = studentService.getStudent($routeParams.id);
                console.log($scope.student);
            }])
        .controller('AddStudentController', ['$scope', '$location', 'studentService', function ($scope, $location, studentService) {
                $scope.student = {};
                $scope.button_text = 'Add';
//                $scope.saveStudent = function () {
//                    studentService.saveStudent($scope.student)
//                            .then(function (response) {
//                                if (response.success) {
//                                    $location.path('/student');
//                                }
//                            }, function () {
//                                //studentService.errorPopup()?
//                            })
//                }
                $scope.saveStudent = function(){
                    console.log($scope.student);
                    studentService.saveStudent($scope.student);
                    $location.path('/student');
                };
            }])
        .controller('EditStudentController', ['$scope', '$location', '$routeParams', 'studentService', function ($scope, $location, $routeParams, studentService) {
//                $scope.student = {};
                $scope.button_text = 'Edit';
//                studentService.getStudent($routeParams.id)
//                        .then(function (response) {
//                            if (response.success) {
//                                $scope.student = response.student;
//                            }
//                        });

                $scope.student = studentService.getStudent($routeParams.id);
                $scope.saveStudent = function () {
                    studentService.saveStudent($scope.student)
                    $location.path('/student');
//                            .then(function (response) {
//                                if (response.success) {
//                                    //redirect to route /student
//                                    $location.path('/student');
//                                }
//                            }, function () {
//                                //studentService.errorPopup()?
//                            })
                };
            }])

