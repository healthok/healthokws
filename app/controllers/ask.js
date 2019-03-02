function mainFun($scope, $http) {
    $scope.category = [
        {model: 'GENERAL INFORMATION'},
        {model: 'ABOUT TREATMENT'},
        {model: 'ABOUT HEALTH'},
        {model: 'ABOUT CHILD HEALTH'},
        {model: 'ABOUT FAMILY HEALTH'},
        {model: 'ABOUT MEDICINE'},
        {model: 'ASK ABOUT DOCTOR'}
    ];
    $scope.askSubmit = function (params) {
        $scope.ask = params.selectedOption;
        var d = params.dname.split(" ");
        var url = "http://127.0.0.1:8080/healthokapp/rest/Doctor/search/" + d[0];
        $http.get(url)
            .success(function (data, status) {
                $scope.doctor = data;
                $scope.doctors = true;
            console.log(data);
            })
            .error(function (data, status) {
                $scope.doctor = data;
                console.log(data);
            });
    }
}
app.controller('askController', mainFun);


