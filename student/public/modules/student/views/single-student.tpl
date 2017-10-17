<div class="page-header">
    <div class="container-fluid">
        <div class="pull-right">
            <a href="#/student" class="btn btn-default" data-toggle="tooltip" title="Back" data-original-title="Back"><i class="fa fa-arrow-left"></i></a>
        </div>
        <h1>Students</h1>
        <ol class="breadcrumb">
            <li><a href="#">Home</a></li>
            <li class="active">Students</li>
        </ol>
    </div>
</div>
<div class="container-fluid">
    <div class="table-responsive">
        <table class="table table-condensed table-bordered">
            <tbody>
                <tr>
                    <td>First Name</td>
                    <td>{{student.first_name}}</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>{{student.last_name}}</td>
                </tr>
                <tr>
                    <td>Other Names</td>
                    <td>{{student.other_name}}</td>
                </tr>
                <tr>
                    <td>Registration Number</td>
                    <td>{{student.reg_no}}</td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>{{student.gender}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>