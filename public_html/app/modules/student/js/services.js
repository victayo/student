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
                    
                    getStudent: function(id){
                       angular.forEach(students, function(student){
                           if(student.id == id){
                               return student;
                           }
                       });
                    },
                    
                    saveStudent: function (student) {
//                        $http.post(API_ENDPOINT, {student: student})
//                                .then(function (response) {
//                                    return response.data;
//                                });
                            students.push(student);
                    },
                    removeStudent: function (id) {
                        angular.forEach(students, function(student, key){
                            if(student.id == id){
                                students.splice(key, 1);
                            }
                        })
                    }
                };
            }])
        .value('API_ENDPOINT', '');


