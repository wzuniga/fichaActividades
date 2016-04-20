var app = angular.module('dataSheet', []);
app.controller('ctrl', function($scope, $compile) {
    
	$scope.test = "gg";
	$scope.tr = "gg2";

	$scope.courses = [{"value":"test"}];
    $scope.sems = [{"value":"sem0"}];
    $scope.schools = [{"value":"school0"}];
    $scope.ts = [{"value":"t0"}];
    $scope.ps = [{"value":"p0"}];
    $scope.ls = [{"value":"l0"}];
    $scope.hshares = [{"value":"hshare0"}];
    $scope.hweeks = [{"value":"hweek0"}];
    $scope.htotals = [{"value":"htotal0"}];
    $scope.nrooms = [{"value":"nroom0"}];
    $scope.groups = [{"value":"group0"}];
    $scope.nstudents = [{"value":"nstudent0"}];
    $scope.lds = [{"value":"ld0"}];
    $scope.mds = [{"value":""}];
    $scope.mids = [{"value":""}];
    $scope.jds = [{"value":""}];
    $scope.vd = [{"value":""}];
    $scope.lhs = [{"value":""}];
    $scope.mhs = [{"value":""}];
    $scope.mihs = [{"value":""}];
    $scope.jhs = [{"value":""}];
    $scope.vhs = [{"value":""}];


	var getMeMyValue = $scope[$scope.courses[0].value];
	//var r= $compile("$scope.test")
	//$scope.courses.push(r(scope));
	//console.log($scope.courses);
	console.log(getMeMyValue);
	$scope.countCourses = 0;

	$scope.addCourse = function() {
    	$scope.countCourses++;
    	$scope.courses.push({"name":"course"+$scope.countCourses});

    	var str = '<tr>'+
              '<td rowspan="2"><input type="text" class="form-control rectif" ng-model="course'+$scope.countCourses+'" placeholder="Curso"></td>'+
              '<td rowspan="2"><input type="text" class="form-control rectif" ng-model="sem'+$scope.countCourses+'" placeholder=""></td>'+
              '<td rowspan="2"><input type="text" class="form-control rectif" ng-model="school'+$scope.countCourses+'" placeholder=""></td>'+
              '<td rowspan="2"><input type="text" class="form-control rectif" ng-model="t'+$scope.countCourses+'" placeholder=""></td>'+
              '<td rowspan="2"><input type="text" class="form-control rectif" ng-model="p'+$scope.countCourses+'" placeholder=""></td>'+
              '<td rowspan="2"><input type="text" class="form-control rectif" ng-model="l'+$scope.countCourses+'" placeholder=""></td>'+
              '<td rowspan="2"><input type="text" class="form-control rectif" ng-model="hshare'+$scope.countCourses+'" placeholder=""></td>'+
              '<td rowspan="2"><input type="text" class="form-control rectif" ng-model="hweek'+$scope.countCourses+'" placeholder=""></td>'+
              '<td rowspan="2"><input type="text" class="form-control rectif" ng-model="htotal'+$scope.countCourses+'" placeholder=""></td>'+
             '<td rowspan="2"><input type="text" class="form-control rectif" ng-model="nroom'+$scope.countCourses+'" placeholder=""></td>'+
              '<td rowspan="2"><input type="text" class="form-control rectif" ng-model="group'+$scope.countCourses+'" placeholder=""></td>'+
              '<td rowspan="2"><input type="text" class="form-control rectif" ng-model="nstudent'+$scope.countCourses+'" placeholder=""></td>'+
              '<td>De: </td>'+
              '<td><input type="text" class="form-control rectif" ng-model="ld'+$scope.countCourses+'" placeholder=""></td>'+
              '<td><input type="text" class="form-control rectif" ng-model="md'+$scope.countCourses+'" placeholder=""></td>'+
              '<td><input type="text" class="form-control rectif" ng-model="mid'+$scope.countCourses+'" placeholder=""></td>'+
              '<td><input type="text" class="form-control rectif" ng-model="jd'+$scope.countCourses+'" placeholder=""></td>'+
              '<td><input type="text" class="form-control rectif" ng-model="vd'+$scope.countCourses+'" placeholder=""></td>'+
            '</tr>'+
            '<tr>'+
              '<td>Hasta: </td>'+
              '<td><input type="text" class="form-control rectif" ng-model="lh'+$scope.countCourses+'" placeholder=""></td>'+
              '<td><input type="text" class="form-control rectif" ng-model="mh'+$scope.countCourses+'" placeholder=""></td>'+
              '<td><input type="text" class="form-control rectif" ng-model="mih'+$scope.countCourses+'" placeholder=""></td>'+
              '<td><input type="text" class="form-control rectif" ng-model="jh'+$scope.countCourses+'" placeholder=""></td>'+
              '<td><input type="text" class="form-control rectif" ng-model="vh'+$scope.countCourses+'" placeholder=""></td>'+
            '</tr>';
    	//var str = "<button class='btn btn-primary' ng-click='ttt()'>Show alert #1</button>";

    	angular.element(document.getElementById('tablet')).append($compile(str)($scope));
  		console.log("fnka");
  	};

  	$scope.ttt = function() {
  		console.log("botoncito");
  	}

});
