var app = angular.module('dataSheet', []);
app.controller('ctrl', function($scope, $compile) {

    $scope.countCourses = 0;
    $scope.countInvest = 0;
    $scope.countTrabajo = 0;

    $scope.suma = "gg1";

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

        console.log("fnka mierda por fin");
        //console.log($scope.courses);
        var getMeMyValue = $scope["course"+($scope.countCourses-1)];
        //var getMeMyValue = $scope[$scope.courses[$scope.countCourses-1].value];
        console.log(getMeMyValue);
    };

    $scope.addInvestigation = function(){
	$scope.countInvest++;
	var models2 = ['investigation', 'duration', 'schedule', 'physicalplant', 'hourweek', 'totalhour'];
	var textarea = '<td><textarea class="form-control rectif" rows="2" ng-model="';
	var tamcel = '<td class="tamCeldas"><input type="text" class="form-control  rectif-letter" ng-model="';
	var tamcelH= '<td class="tamCeldasHor"><input type="text" class="form-control  rectif-letter" ng-model="';
	var placeh2= ['Investigacion', '2 meses', 'martes de 9:00 a 13:00', 'EPIS', 'horas/semana', 'total horas'];
	var exit= '"></td>';

	var str2 = '<tr id="investigationLine' + $scope.countInvest + '">' ;
	str2 += textarea + models2[0] + $scope.countInvest + '" placeholder="' + placeh2[0] + '"></textarea></td>';
	for(var i = 1; i < 6; i++){
	    if(i == 2){
		str2 += tamcelH + models2[i] + $scope.countInvest + '" placeholder="' + placeh2[i] + exit;
	    }
	    else{
		str2 += tamcel + models2[i] + $scope.countInvest + '" placeholder="' + placeh2[i] + exit;
	    }
	}
	str2+= '</tr>';
	
	angular.element(document.getElementById('tablet2')).append($compile(str2)($scope));
	console.log("fnk2");
    };
    $scope.addWorks = function(){
	$scope.countTrabajo++;
	var models3 = ['works2', 'duration2', 'schedule2', 'physicalplant2', 'hourweek2', 'totalhour2'];
	var textarea3 = '<td><textarea class="form-control rectif" rows="2" ng-model="';
	var tamcel3 = '<td class="tamCeldas"><input type="text" class="form-control  rectif-letter" ng-model="';
	var tamcelH3= '<td class="tamCeldasHor"><input type="text" class="form-control  rectif-letter" ng-model="';
	var placeh3= ['Trabajos', '2 meses', 'martes de 9:00 a 13:00', 'EPIS', 'horas/semana', 'total horas'];
	var exit3= '"></td>';

	var str3 = '<tr id="worksLine' + $scope.countTrabajo + '">'; 
	    str3 += textarea3 + models3[0] + $scope.countTrabajo + '" placeholder="' + placeh3[0] + '"></textarea></td>';
	for(var i = 1; i < 6; i++){
	    if(i == 2){
		str3 += tamcelH3 + models3[i] + $scope.countTrabajo + '" placeholder="' + placeh3[i] + exit3;
	    }
	    else{
		str3 += tamcel3 + models3[i] + $scope.countTrabajo + '" placeholder="' + placeh3[i] + exit3;
	    }
	}
	str3+= '</tr>';
	
	angular.element(document.getElementById('tablet3')).append($compile(str3)($scope));
	console.log("fnk3");
    };

    $scope.removeCourse = function() {
	if($scope.countCourses >= 1){
	    angular.element( document.querySelector( "#courseLine"+$scope.countCourses ) ).remove();
	    angular.element( document.querySelector( "#courseLine"+$scope.countCourses ) ).remove();
	    $scope.countCourses--;
	}
    };
    $scope.removeInvest = function() {
	if($scope.countInvest >= 1){
	    angular.element( document.querySelector( "#investigationLine"+$scope.countInvest ) ).remove();
	    //ngular.element( document.querySelector( "#investigationLine"+$scope.countInvest ) ).remove();
	    $scope.countInvest--;
	}
    };
    $scope.removeWorks = function() {
        if($scope.countTrabajo >= 1){
            angular.element( document.querySelector( "#worksLine"+$scope.countTrabajo ) ).remove();
            //angular.element( document.querySelector( "#worksLine"+$scope.countCourses ) ).remove();
            $scope.countTrabajo--;
        }
    };

    $scope.testing = function() {
        $scope.suma += " + gg2";
        $scope.gg3 = $scope.$eval('gg1 + gg2');
    }

    $scope.makeJSON = function(){
        var today = new Date();
        var names = $scope.getName($scope.name);
        var days = ["l","m","mi","j","v"];
        var JSON = '';
        JSON += '{\n';
        JSON += '"year": ' + today.getFullYear() + ',\n'+
                '"month": ' + (today.getMonth()+1) + ',\n'+
                '"day": ' + today.getDate() + ',\n'+
                '"firstname": "' + names[1] + '",\n'+
                '"lastname": "' + names[0] + '", \n'+
                '"faculty": "' + $scope.faculty + '",\n'+
                '"deparment": "' + $scope.deparment + '",\n'+
                '"category": "' + $scope.category + '",\n'+
                '"regime": "' + $scope.regime + '",\n'+
                '"status": "' + $scope.status + '",\n'+
                '"title": "' + $scope.title + '",\n'+
                '"speciality": "' + $scope.speciality + '",\n'+
                '"courses": [';

        for (var i = 0; i <= $scope.countCourses; i++) {
            JSON += '{\n'+
                        '"name": "' + $scope["course"+(i)] + '",\n'+
                        '"school": "' + $scope["school"+(i)] + '",\n'+
                        '"type": "' + $scope.getType(i) + '",\n'+
                        '"group": "' + $scope["group"+(i)] + '",\n'+
                        '"schedule": [\n';
                            
            for (var e = 0; e < days.length; e++) {
                var desde = $scope[days[e]+"d"+i];
                var hasta = $scope[days[e]+"h"+i];
                console.log(typeof desde !== "undefined" && desde != "" && typeof hasta !== "undefined" && hasta != "");
                if ( typeof desde !== "undefined" && desde != "" && typeof hasta !== "undefined" && hasta != "" ){
                    JSON+='{\n'+
                        '"day": ' + (e+1) + ',\n'+
                        '"start": ' + desde + ',\n'+
                        '"end": ' + hasta + '\n'+
                    '},\n';
                }
            }
            JSON +=    ']\n'+
                    '},\n';
        }

        JSON += '  ]\n';
        JSON += '}';
        console.log(JSON);
    }

    $scope.getName = function(fullName){
        return fullName.split(",");
    }
    $scope.getType = function(index){
        var t = $scope["t"+(index)];
        var p = $scope["p"+(index)];
        var l = $scope["l"+(index)];
        if ( typeof t !== "undefined" && t != "" ) return "T";
        if ( typeof p !== "undefined" && p != "" ) return "P";
        if ( typeof l !== "undefined" && l != "" ) return "L";
    }

});
    
