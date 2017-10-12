<div class="row">
    <form name="student_form" novalidate>
        <div class="form-group">
            <label for="first_name">First Name</label>
            <input type="text" ng-model="student.first_name" name="first_name" id="first_name" class="form-control" required="required">
        </div>
        <div class="form-group">
            <label for="last_name">Last Name</label>
            <input type="text" ng-model="student.last_name" name="last_name" id="last_name" class="form-control" required="required">
        </div>
        <div class="form-group">
            <label for="other_name">Other Name(s)</label>
            <input type="text" ng-model="student.other_name" name="other_name" id="other_name" class="form-control">
        </div>
        <div class="form-group">
            <label for="reg_no">Registration Number</label>
            <input type="text" ng-model="student.reg_no" name="reg_no" id="reg_no" class="form-control">
        </div>
        <div class="form-group">
            <label for="gender">Gender</label>
            <select id="gender" name="gender" ng-model="student.gender" class="form-control" required="required">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>
        <button type="submit" ng-click="saveStudent()" class="btn btn-default">{{button_text}}</button>
    </form>
</div>