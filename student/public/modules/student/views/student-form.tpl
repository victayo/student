<div class="page-header">
    <div class="container-fluid">
        <div class="pull-right">
            <a href="/" class="btn btn-default" data-toggle="tooltip" title="Cancel" data-original-title="Cancel"><i class="fa fa-reply"></i></a>
        </div>
        <h1>Students</h1>
        <ol class="breadcrumb">
            <li><a href="/">Home</a></li>
            <li class="active">Students</li>
        </ol>
    </div>
</div>
<div class="container-fluid">
    <form name="studentForm" class="form-horizontal" ng-submit="saveStudent()" novalidate>
        <div class="form-group">
            <label for="first_name" class="col-sm-2">First Name</label>
            <div class="col-sm-10">
                <input type="text" name="first_name" id="first_name" class="form-control" ng-model="student.first_name" ng-minlength="2" ng-required="true" >
                <div class="error-message" ng-show="studentForm.first_name.$dirty" ng-messages="studentForm.first_name.$error" role="alert">
                    <div ng-messages-include="error-messages"></div>
                </div>
            </div>
        </div>
        <div class="form-group">
            <label for="last_name" class="col-sm-2">Last Name</label>
            <div class="col-sm-10">
                <input type="text" name="last_name" id="last_name" class="form-control" ng-model="student.last_name" ng-minlength="2" ng-required="true">
                <div class="error-message" ng-show="studentForm.last_name.$dirty" ng-messages="studentForm.last_name.$error" role="alert">
                    <div ng-messages-include="error-messages"></div>
                </div>
            </div>
        </div>
        <div class="form-group">
            <label for="other_name" class="col-sm-2">Other Name(s)</label>
            <div class="col-sm-10">
                <input type="text" name="other_name" id="other_name" class="form-control" ng-model="student.other_name">
            </div>
        </div>
        <div class="form-group">
            <label for="reg_no" class="col-sm-2">Registration Number</label>
            <div class="col-sm-10">
                <input type="text" name="reg_no" id="reg_no" class="form-control" ng-model="student.reg_no" ng-minlength="1" ng-required="true">
                <div class="error-message" ng-show="studentForm.reg_no.$dirty" ng-messages="studentForm.reg_no.$error" role="alert">
                    <div ng-messages-include="error-messages"></div>
                </div>
            </div>
        </div>
        <div class="form-group">
            <label for="gender" class="col-sm-2">Gender</label>
            <div class="col-sm-10">
                <select id="gender" name="gender" class="form-control" ng-model="student.gender" ng-required="true">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <div class="error-message" ng-show="studentForm.gender.$dirty" ng-messages="studentForm.gender.$error" role="alert">
                    <div ng-messages-include="error-messages"></div>
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-primary" ng-disabled="studentForm.$invalid">{{button_text}}</button>
            </div>
        </div>
    </form>
</div>
<script type="text/ng-template" id="error-messages">
    <div ng-message="required">This field is required</div>
    <div ng-message="minlength">This field is too short. At least 2 characters required</div>
</script>