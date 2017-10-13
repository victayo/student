<div class="content">
    <div class="table-responsive">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Registration Number</th>
                    <th class="text-right">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="student in students">
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