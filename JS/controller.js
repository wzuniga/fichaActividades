var app = angular.module('dataSheet', []);
app.controller('ctrl', function($scope, $compile) {
    
	$scope.test = "gg";
	$scope.tr = "gg2";

	$scope.courses = [{"value":"course0"}];
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
    $scope.mds = [{"value":"md0"}];
    $scope.mids = [{"value":"mid0"}];
    $scope.jds = [{"value":"jd0"}];
    $scope.vd = [{"value":"vd0"}];
    $scope.lhs = [{"value":"lh0"}];
    $scope.mhs = [{"value":"mh0"}];
    $scope.mihs = [{"value":"mih0"}];
    $scope.jhs = [{"value":"jh0"}];
    $scope.vhs = [{"value":"vh0"}];


	var getMeMyValue = $scope[$scope.courses[0].value];
	//var r= $compile("$scope.test")
	//$scope.courses.push(r(scope));
	//console.log($scope.courses);
	console.log(getMeMyValue);
	$scope.countCourses = 0;

	$scope.addCourse = function() {
    	$scope.countCourses++;
        $scope.courses.push({"value":"course"+$scope.countCourses});
        $scope.sems.push({"value":"sem"+$scope.countCourses});
        $scope.schools.push({"value":"school"+$scope.countCourses});
        $scope.ts.push({"value":"t"+$scope.countCourses});
        $scope.ps.push({"value":"p"+$scope.countCourses});
        $scope.ls.push({"value":"l"+$scope.countCourses});
        $scope.hshares.push({"value":"hshare"+$scope.countCourses});
        $scope.hweeks.push({"value":"hweek"+$scope.countCourses});
        $scope.htotals.push({"value":"htotal"+$scope.countCourses});
        $scope.nrooms.push({"value":"nroom"+$scope.countCourses});
        $scope.groups.push({"value":"group"+$scope.countCourses});
        $scope.nstudents.push({"value":"nstudent"+$scope.countCourses});
        $scope.lds.push({"value":"ld"+$scope.countCourses});
        $scope.mds.push({"value":"md"+$scope.countCourses});
        $scope.mids.push({"value":"mid"+$scope.countCourses});
        $scope.jds.push({"value":"jd"+$scope.countCourses});
        $scope.vd.push({"value":"vd"+$scope.countCourses});
        $scope.lhs.push({"value":"lh"+$scope.countCourses});
        $scope.mhs.push({"value":"mh"+$scope.countCourses});
        $scope.mihs.push({"value":"mih"+$scope.countCourses});
        $scope.jhs.push({"value":"jh"+$scope.countCourses});
        $scope.vhs.push({"value":"vh"+$scope.countCourses});


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
        console.log($scope.courses);
        var getMeMyValue = $scope[$scope.courses[$scope.countCourses-1].value];
        console.log(getMeMyValue);
  	};

  	$scope.ttt = function() {
  		console.log("botoncito");
  	}

});
