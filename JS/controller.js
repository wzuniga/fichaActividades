var app = angular.module('dataSheet', []);
app.controller('ctrl', function($scope, $compile) {

    $scope.countCourses = 0;


    $scope.addCourse = function() {

        $scope.countCourses++;

        var inp = '<td rowspan="2"><input type="text" class="form-control rectif rectif-letter" ng-model="';
        var skt = '<td><input type="text" class="form-control rectif" ng-model="';
        var models = ['course', 'sem', 'school', 't', 'p', 'l', 'hshare', 'hweek', 'htotal', 'nroom', 'group', 'nstudent', 'ld', 'md', 'mid', 'jd', 'vd', 'lh', 'mh', 'mih', 'jh', 'vh'];
        var placeh = ['Curso','','','','','','','','','','','','','','','','','','','','','']
        var str = '<tr id="courseLine'+$scope.countCourses+'">';
      	
	var temp = '<td rowspan="2"><textarea class="form-control rectif" ng-model="'; 
	str += temp+models[0]+$scope.countCourses+'" placeholder="'+placeh[0]+'"></textarea></td>';

        for (var i = 1; i < 12; i++)
            str += inp+models[i]+$scope.countCourses+'" placeholder="'+placeh[i]+'"></td>';
        str+='<td>De: </td>';

        for (var i = 12; i < 17; i++)
            str += skt+models[i]+$scope.countCourses+'" placeholder="'+placeh[i]+'"></td>';
        str+='</tr><tr id="courseLine'+$scope.countCourses+'"><td>Hasta: </td>';
      
        for (var i = 17; i < 22; i++)
            str += skt+models[i]+$scope.countCourses+'" placeholder="'+placeh[i]+'"></td>';
        str+='</tr>';

        angular.element(document.getElementById('tablet')).append($compile(str)($scope));

    };

    $scope.removeCourse = function() {
        angular.element( document.querySelector( "#courseLine"+$scope.countCourses ) ).remove();
        angular.element( document.querySelector( "#courseLine"+$scope.countCourses ) ).remove();
        $scope.countCourses--;
    }

});
