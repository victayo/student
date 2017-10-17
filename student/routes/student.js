var express = require('express');
var student_api = express.Router();
var student_route = "/student";
var studentModel = require("../model/student");

student_api.route(student_route)
        .get(function (request, response) {
            response.json({
                students: studentModel.getStudent(),
                success: true
            });
        })
        .post(function (request, response) {
            var student = request.body;
            studentModel.saveStudent(student);
            response.json({success: true});
        });
        
student_api.route(student_route + "/:id")
        .get(function (request, response) {
            var id = request.params.id;
            response.json({
                student: studentModel.getStudent(id),
                success: true
            });
        })
        .delete(function (request, response) {
            var id = request.params.id;
            studentModel.deleteStudent(id);
            response.json({success: true});
        });

module.exports = student_api;


