var express = require('express');
var student_api = express.Router();
var student_route = "/student";
var Student = require("../model/student");

student_api.route(student_route)
        .get(function (request, response) {
            Student.find(function (err, students) {
                if (err) {
                    response.json({success: false, error: err});
                }
                response.json({
                    students: students,
                    success: true
                });
            });
        })
        .post(function (request, response) {
            if (request.body._id) {//update
                Student.findOne({_id: request.body._id}).exec(function (err, stud) {
                    for (var prop in request.body) {
                        stud[prop] = request.body[prop];
                    }
                    stud.save(function (err) {
                        if (err) {
                            response.json({success: false, error: err});
                        }
                        response.json({success: true});
                    });
                });
            } else {
                var student = new Student(request.body);
                student.save(function (err) {
                    if (err) {
                        response.json({success: false, error: err});
                    }
                    response.json({success: true});
                });
            }
        });

student_api.route(student_route + "/:id")
        .get(function (request, response) {
            var id = request.params.id;
            Student.findOne({_id: id}).exec(function (err, student) {
                if (err) {
                    response.json({success: false, error: err});
                }
                response.json({
                    student: student,
                    success: true
                });
            });
        })
        .delete(function (request, response) {
            var id = request.params.id;
            Student.remove({_id: id}, function (err, student) {
                if (err) {
                    response.json({success: false, error: err});
                }
                response.json({success: true});
            });
        });

module.exports = student_api;


