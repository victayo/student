<div class="content">
    <div class="table-responsive">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Registration Number</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="student in students">
                    <td>{{student.fullname}}</td>
                    <td>{{student.reg_no}}</td>
                    <td>
                        <a href="/student/edit/{{student.id}}" class="btn btn-default">Edit</a>
                        <button class="btn btn-danger" ng-click="deleteStudent(student)">Remove</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>