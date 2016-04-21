var app = angular.module('dataSheet', []);
app.controller('ctrl', function($scope, $compile) {
    
    $scope.test = "gg";
    $scope.tr = "gg2";

    //var getMeMyValue = $scope[$scope.courses[0].value];
    //var r= $compile("$scope.test")
    //$scope.courses.push(r(scope));
    //console.log($scope.courses);
    //console.log(getMeMyValue);
    $scope.countCourses = 0;

    $scope.addCourse = function() {

        $scope.countCourses++;

        //window.location.reload();
        //window.alert("hi!");
        var inp = '<td rowspan="2"><input type="text" class="form-control rectif" ng-model="';
        var skt = '<td><input type="text" class="form-control rectif" ng-model="';
        var models = ['course', 'sem', 'school', 't', 'p', 'l', 'hshare', 'hweek', 'htotal', 'nroom', 'group', 'nstudent', 'ld', 'md', 'mid', 'jd', 'vd', 'lh', 'mh', 'mih', 'jh', 'vh'];
        var placeh = ['Curso','','','','','','','','','','','','','','','','','','','','','']
        var str = '<tr>';
      
        for (var i = 0; i < 12; i++)
            str += inp+models[i]+$scope.countCourses+'" placeholder="'+placeh[i]+'"></td>';
        str+='<td>De: </td>';

        for (var i = 12; i < 17; i++)
            str += skt+models[i]+$scope.countCourses+'" placeholder="'+placeh[i]+'"></td>';
        str+='</tr><tr><td>Hasta: </td>';
      
        for (var i = 17; i < 22; i++)
            str += skt+models[i]+$scope.countCourses+'" placeholder="'+placeh[i]+'"></td>';
        str+='</tr>';

        angular.element(document.getElementById('tablet')).append($compile(str)($scope));
        console.log("fnka");
        //console.log($scope.courses);
        var getMeMyValue = $scope["course"+($scope.countCourses-1)];
        //var getMeMyValue = $scope[$scope.courses[$scope.countCourses-1].value];
        console.log(getMeMyValue);
    };

    $scope.ttt = function() {
        console.log("botoncito");
    }

});
