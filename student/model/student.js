var Students = [{
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

var StudentModel = {
    getStudent: function(id){
        if(!id){
            return Students;
        }
        for(var i = 0; i < Students.length; i++){
            if(Students[i].id == id){
                return Students[i];
            }
        }
        return null;
    },
    saveStudent: function(student){
        var id = student.id;
        if (!id) {//new student
                var length = Students.length;
                student.id = !length ? 1 : parseInt(Students[Students.length - 1].id) + 1;
                student.fullname = student.first_name + ' ' + student.last_name + ' ' + student.other_name;
                Students.push(student);
            } else {//update student
                this.deleteStudent(id);
                student.fullname = student.first_name + ' ' + student.last_name + ' ' + student.other_name;
                Students.push(student);
            }
    },
    deleteStudent: function(student_id){
        Students.forEach(function (student, index) {
                if (student.id == student_id) {
                    Students.splice(index, 1);
                }
            });
    }
};

module.exports = StudentModel;


