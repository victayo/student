angular.module('student.service', [])
        .factory('studentService', ['API_ENDPOINT', '$http', function ($http, API_ENDPOINT) {
                var students = [
                    {
                        id: 1,
                        first_name: 'Okala',
                        last_name: 'Victor',
                        other_name: 'Temitayo',
                        fullname: 'Okala Victor Temitayo',
                        gender: 'male',
                        reg_no: 'ADS/1/2017'
                    },
                    {
                        id: 2,
                        first_name: 'Sebastian',
                        last_name: 'Franklin',
                        other_name: 'Temitope',
                        fullname: 'Sebatian Franklin Temitope',
                        gender: 'male',
                        reg_no: 'ADS/2/2017'
                    },
                    {
                        id: 3,
                        first_name: 'Adaobi',
                        last_name: 'Damilola',
                        other_name: 'Mary',
                        fullname: 'Adaobi Damilola Mary',
                        gender: 'female',
                        reg_no: 'ADS/3/2017'
                    }
                ];
                return {
                    getStudents: function () {
                        return students;
                    },
                    getStudent: function (id) {
                        for (var i = 0; i < students.length; i++) {
                            if (id == students[i].id) {
                                return students[i];
                            }
                        }
                    },
                    saveStudent: function (student) {
//                        $http.post(API_ENDPOINT, {student: student})
//                                .then(function (response) {
//                                    return response.data;
//                                });
                        if (!student.id) {//new student
                            student.id = parseInt(students[students.length - 1].id) + 1;
                            student.fullname = student.first_name + ' ' + student.last_name + ' ' + student.other_name;
                            students.push(student);
                        }else{//update student
                            var id = student.id;
                            var student = this.getStudent(id);
                            this.removeStudent(id);
                            students.push(student);
                        }
                    },
                    removeStudent: function (id) {
                        angular.forEach(students, function (student, key) {
                            if (student.id == id) {
                                students.splice(key, 1);
                            }
                        })
                    }
                };
            }])
        .value('API_ENDPOINT', '');


