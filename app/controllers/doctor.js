var max = 10;

function mainFun($scope, $http) {
    
    $scope.doctors = false;
    
    $scope.category = [
        {
            model: 'Gorakhpur'
        },
        {
            model: 'Dibrugarh'
        }
    ];
    
    
    var url = "http://127.0.0.1:8080/healthokapp/rest/Doctor/search/";
    console.log(url);
    $scope.formSubmit = function (params) {
        var category = params.selectedOption;
        var cityid = 0;
        if(category=='Gorakhpur')
            cityid = 1;
        if(category=='Dibrugarh')
            cityid = 14;
        console.log(category+cityid);
        var d = params.dname.split(" ");
        url = "http://127.0.0.1:8080/healthokapp/rest/doctor/search/"+d[0]+"/"+cityid;
        console.log(url);
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
    
    
    
    
    
    
    
    //appointment show and hide div
    $scope.isVisibleButton = true;
    $scope.isVisible = false;
    $scope.appointmentShow = function(doctorId){
        $scope.id = doctorId;
        $scope.isVisible = $scope.isVisible ? false : true;
//        $scope.isVisibleButton = $scope.isVisibleButton ? false : true;
    }
    
    //appointDoctor
    $scope.appointDoctor = function (appoint) {
        var data = {
            firstName: appoint.firstname,
            lastName: appoint.lastName,
            mobile: appoint.mobile,
            appointDate: appoint.appointDate
        };
        
        console.log(data);
        
        var url = "make an url for doctor appointment";
        
        window.alert('Appointment has been done we will call you soon');
        
        $http.post(url)
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
app.controller('formController', mainFun);




//ask


function askFun($scope, $http) {
    $scope.category = [
        {
            model: 'GENERAL INFORMATION'
        },
        {
            model: 'ABOUT TREATMENT'
        },
        {
            model: 'ABOUT HEALTH'
        },
        {
            model: 'ABOUT CHILD HEALTH'
        },
        {
            model: 'ABOUT FAMILY HEALTH'
        },
        {
            model: 'ABOUT MEDICINE'
        },
        {
            model: 'ASK ABOUT DOCTOR'
        }
    ];
    $scope.askSubmit = function (params) {
        var category = params.selectedOption;
        var data = {
            category: params.selectedOption,
            username: params.username,
            useremail: params.useremail,
            comment: params.question
        };
        console.log(data);
        var url = "http://127.0.0.1:8080/healthokapp/rest/Doctor/search/";
        $http.post(url)
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
app.controller('askController', askFun);





//response


function responseFun($scope, $http) {
    $scope.isVisible = false;
    $scope.showResponse = function (commentNumber) {
        $scope.foo = commentNumber;
        console.log(commentNumber);
        $scope.isVisible = $scope.isVisible ? false : true;
    }


    var url = "http://localhost:8080/healthokapp/rest/Comments/";
    console.log(url);
    $http.get(url)
        .success(function (data, status) {
            $scope.comments = data;
            console.log(data);
        })
        .error(function (data, status) {
            $scope.doctor = data;
            console.log(data);
        });




    $scope.responseSubmit = function (params) {
        $scope.m = max;
        var data = {
            parentId: params.selectedOption,
            categoryid : 0,
            username: params.username,
            useremail: params.useremail,
            comment: params.question
        };
        console.log(data);
        var url = "http://127.0.0.1:8080/healthokapp/rest/Doctor/search/";
        $http.post(url)
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


app.controller('responseController', responseFun);



//healthcamps completed projects

function projectFun($scope, $http) {
        var url = "http://localhost:8080/healthokapp/rest/Project";
        $http.get(url)
            .success(function (data, status) {
                $scope.healthcamps = data;
                console.log(data);
                console.log($scope.healthcamps);

            })
            .error(function (data, status) {
                $scope.doctor = data;
                console.log(data);
            });



}
app.controller('healthcampController', projectFun);


//schoolhealth completed projects

function schoolFun($scope, $http) {
        var url = "http://localhost:8080/healthokapp/rest/Project/Child Health/completed";
    $scope.school = "This is my school";
        $http.get(url)
            .success(function (data, status) {
                $scope.schoolhealth = data;
                console.log(data);

            })
            .error(function (data, status) {
                $scope.doctor = data;
                console.log(data);
            });



}
app.controller('schoolhealthController', schoolFun);
