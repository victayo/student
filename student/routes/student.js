var express = require('express');
var api = express.Router();
var student_route = "/student";
var students = [{
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
    }];

function deleteStudent(id) {
    students.forEach(function (student, index) {
        if (student.id == id) {
            students.splice(index, 1);
        }
    });
}

api.route(student_route)
        .get(function (request, response) {
            response.json({
                students: students,
                success: true
            });
        })
        .post(function (request, response) {
            var student = request.body;
            var id = student.id;
            if (!id) {//new student
                var length = students.length;
                student.id = !length ? 1 : parseInt(students[students.length - 1].id) + 1;
                student.fullname = student.first_name + ' ' + student.last_name + ' ' + student.other_name;
                students.push(student);
            } else {//update student
                deleteStudent(id);
                student.fullname = student.first_name + ' ' + student.last_name + ' ' + student.other_name;
                students.push(student);
            }
            response.json({success: true});
        });
        
api.route(student_route + "/:id")
        .get(function (request, response) {
            var id = request.params.id;
            console.log(id);
            var student;
            for (var i = 0; i < students.length; i++) {
                if (students[i].id == id) {
                    student = students[i];
                    break;
                }
            }
            response.json({
                student: student,
                success: !student ? false : true
            });
        })
        .delete(function (request, response) {
            var id = request.params.id;
            students.forEach(function (student, index) {
                if (student.id == id) {
                    students.splice(index, 1);
                }
            });
            response.json({success: true});
        });

module.exports = api;


