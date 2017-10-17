angular.module('student.controller', [])
        .controller('StudentController', ['$scope', '$route', 'studentService', 'popupService', function ($scope, $route, studentService, popupService) {
                $scope.students = [];
                $scope.selectAll = false;
                studentService.getStudent()
                        .then(function (response) {
                            if (response.success) {
                                $scope.students = response.students;
                            }
                        }, serverError);

                $scope.selectAllClicked = function () {
                    angular.forEach($scope.students, function (student) {
                        student.checked = $scope.selectAll;
                    });
                };

                $scope.studentChecked = function (student) {
                    if ($scope.selectAll && !student.checked) {
                        $scope.selectAll = false;
                    }
                }

                $scope.multipleDelete = function () {
                    if (popupService.showPopup('Are you sure you want to delete')) {
//                        var checked = [];
//                        angular.forEach($scope.students, function (student) {
//                            if (student.checked) {
//                                checked.push(student.id);
//                            }
//                        });
//                        studentService.removeMultiple(checked)
//                                .then(function(response){
//                                    if(response.success){
//                                        $route.reload();
//                                    }
//                        });
                        angular.forEach($scope.students, function (student) {
                            if (student.checked) {
                                studentService.removeStudent(student.id);
                            }
                        });
                        $route.reload();
                    }
                };

                $scope.deleteStudent = function (student_id) {
                    if (popupService.showPopup('Are you sure you want to delete')) {
                        studentService.removeStudent(student_id)
                                .then(function (response) {
                                    if (response.success) {
                                        $route.reload();
                                    }
                                });
                    }
                };

                function serverError(data, status, config, header) {
                    console.log('an error occured while fetching data');
                }
            }])
        .controller('SingleStudentController', ['$scope', '$routeParams', 'studentService', function ($scope, $routeParams, studentService) {
                $scope.student = {};
                studentService.getStudent($routeParams.id)
                        .then(function (response) {
                            if (response.success) {
                                $scope.student = response.student;
                            }
                        });
            }])
        .controller('AddStudentController', ['$scope', '$location', 'studentService', function ($scope, $location, studentService) {
                $scope.student = {};
                $scope.button_text = 'Add';
                $scope.saveStudent = function () {
                    studentService.saveStudent($scope.student)
                            .then(function (response) {
                                if (response.success) {
                                    $location.path('/student');
                                }
                            }, function () {
                                //studentService.errorPopup()?
                            });
                };
            }])
        .controller('EditStudentController', ['$scope', '$location', '$routeParams', 'studentService', function ($scope, $location, $routeParams, studentService) {
                $scope.student = {};
                $scope.button_text = 'Edit';
                studentService.getStudent($routeParams.id)
                        .then(function (response) {
                            if (response.success) {
                                $scope.student = response.student;
                            }
                        });

                $scope.saveStudent = function () {
                    studentService.saveStudent($scope.student)
                            .then(function (response) {
                                if (response.success) {
//                                    redirect to route /student
                                    $location.path('/student');
                                }
                            }, function () {
                                //studentService.errorPopup()?
                            });
                };
            }])


