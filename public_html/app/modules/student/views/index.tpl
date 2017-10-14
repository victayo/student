<div class="content">
    <div class="row">
        <div class="container-fluid">
            <div class="pull-right">
                <a href="#/student/add" class="btn btn-primary"><i class="fa fa-plus"></i></a>
                <button class="btn btn-danger" ng-click="multipleDelete()"><i class="fa fa-trash"></i></button>
               <!-- <input type="text" class="form-control" ng-model="studentSearch" placeholder="Search..." style="width: auto" /> -->
            </div>
            <h4>Students</h4>
        </div>
    </div>
    <div class="panel panel-default">
        <div class="panel-heading">
            <i class="fa fa-list"></i>
        </div>
        <div class="table-responsive">
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th><input type="checkbox" ng-model="selectAll" ng-click="selectAllClicked()" /></th>
                        <th>Name</th>
                        <th>Registration Number</th>
                        <th class="text-right">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="student in students | orderBy:'first_name' | filter:studentSearch">
                        <th><input type="checkbox" ng-model="student.checked" ng-click="studentChecked(student)"/></th>
                        <td class="text-capitalize"><a href="#/student/view/{{student.id}}">{{student.fullname}}</a></td>
                        <td>{{student.reg_no}}</td>
                        <td class="text-right">
                            <a href="#/student/edit/{{student.id}}" class="btn btn-primary">
                                <i class="fa fa-pencil"></i>
                            </a>
                            <button class="btn btn-danger" ng-click="deleteStudent(student)">
                                <i class="fa fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>