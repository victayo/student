var mongoose=require('mongoose');
//var bcrypt=require('bcrypt-nodejs');
var Schema=mongoose.Schema;

var studentSchema=new Schema({
    first_name:'String',
    last_name:'String',
    other_name:'String',
    fullname: 'String',
    reg_no: 'String',
    gender: 'String'
});


module.exports=mongoose.model('student',studentSchema);




