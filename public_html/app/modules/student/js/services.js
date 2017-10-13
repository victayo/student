angular.module('student.service', [])
        .factory('studentService', ['API_ENDPOINT', '$http', '$cookies', function (API_ENDPOINT, $http, $cookies) {
                var cookie_key = 'STUDENT';
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
                        var stud = $cookies.getObject(cookie_key);
                        if(stud){
                            return stud;
                        }
                        return students;
                    },
                    getStudent: function (id) {
                        var studs = $cookies.getObject(cookie_key);
                        if(!studs){
                            studs = students;
                        }
                        for (var i = 0; i < studs.length; i++) {
                            if (id == studs[i].id) {
                                return studs[i];
                            }
                        }
                    },
                    saveStudent: function (student) {
//                        $http.post(API_ENDPOINT, {student: student})
//                                .then(function (response) {
//                                    return response.data;
//                                });
                        var studs = $cookies.getObject(cookie_key);
                        if(!studs){
                            studs = students;
                        }
                        var id = student.id;
                        if (!id) {//new student
                            student.id = parseInt(students[students.length - 1].id) + 1;
                            student.fullname = student.first_name + ' ' + student.last_name + ' ' + student.other_name;
                            studs.push(student);
                        }else{//update student
                            var student = this.getStudent(id);
                            this.removeStudent(id);
                            studs.push(student);
                        }
                        $cookies.putObject(cookie_key, studs);
                    },
                    removeStudent: function (id) {
                        var studs = $cookies.getObject(cookie_key);
                        if(!studs){
                            studs = students;
                        }
                        angular.forEach(studs, function (student, key) {
                            if (student.id == id) {
                                studs.splice(key, 1);
                                $cookies.putObject(cookie_key, studs);
                            }
                        });
                    }
                };
            }])
        .value('API_ENDPOINT', '');


