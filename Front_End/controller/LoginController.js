$("#loginForm > h1:nth-child(9)").hover(function() {
    $("#loginForm > div:nth-child(10)").css("visibility", "visible");
}, function() {
    $("#loginForm > div:nth-child(10)").css("visibility", "hidden");
});

$("#loginForm>h1:nth-child(9)").click(function() {
    if(type=="customer" || type=="driver") {
        $("#header").css('display', 'block');
        $("#homeContent").css('display', 'none');
        $("#login").css('display', 'none');
        $("body").css('height', 'calc(100vh * 2)');
        $("#addCus").css('display', 'block');
        $("#afterLoggingBook").css('display', 'none');
        $("#addBook").css('display', 'none');
        $("#addPayment").css('display', 'none');
        $("#invoice").css('display', 'none');
        $("#bookingTableCustomer").css('display', 'none');
        $("#workScheduleDriver").css('display', 'none');
        $("#managerDashBoard").css('display', 'none');
        $("#addCar").css('display', 'none');
        $("#addMaintenance").css('display', 'none');
        $("#addDamageService").css('display', 'none');
        $("#addMng").css('display', 'none');
        $("#managerPath").css('display', 'none');
        $("#footer").css('display', 'block');
    }
    if(type=="employee"){
        $("#header").css('display', 'block');
        $("#homeContent").css('display', 'none');
        $("#login").css('display', 'none');
        $("body").css('height', 'calc(100vh * 2)');
        $("#addCus").css('display', 'none');
        $("#afterLoggingBook").css('display', 'none');
        $("#addBook").css('display', 'none');
        $("#addPayment").css('display', 'none');
        $("#invoice").css('display', 'none');
        $("#bookingTableCustomer").css('display', 'none');
        $("#workScheduleDriver").css('display', 'none');
        $("#managerDashBoard").css('display', 'none');
        $("#addCar").css('display', 'none');
        $("#addMaintenance").css('display', 'none');
        $("#addDamageService").css('display', 'none');
        $("#addMng").css('display', 'block');
        $("#managerPath").css('display', 'none');
        $("#footer").css('display', 'block');
    }

});

    const passwordField1 = $('#exampleInputPassword1');
    const togglePassword1 = $('#togglePassword1');
    const eyeIcon1 = $('#eyeIcon1');

    togglePassword1.click(function() {
        if (passwordField1.attr('type') === 'password') {
            passwordField1.attr('type', 'text');
            eyeIcon1.removeClass('fa-solid fa-eye').addClass('fa-solid fa-eye-slash');
        } else {
            passwordField1.attr('type', 'password');
            eyeIcon1.removeClass('fa-solid fa-eye-slash').addClass('fa-solid fa-eye');
        }
    });

$('#btnLogin').click(function () {
    checkLogin();
});

var mngNicForCar;
var cusNicForBook;

function checkLogin() {
    let username=$("#exampleInputUsername1").val();
    let password=$("#exampleInputPassword1").val();
    if(type=="customer") {
        $.ajax({
            url: "http://localhost:8080/Back_End_war/customer?username=" + username + "&password=" + password,
            method: "get",
            success: function (resp) {
                alert(resp.message);
                clearLoginInputFields();
                console.log(resp);
                customerAfterLogin();

                $.ajax({
                    url: "http://localhost:8080/Back_End_war/customer?username=" + username,
                    method: "get",
                    success: function (resp) {
                        alert(resp.message);//for test however this alert not want
                        cusNicForBook=resp.data;

                    }
                    ,
                    error: function (error) {
                        alert(error.responseJSON.message);
                        clearLoginInputFields();
                    }
                });

            }
            ,
            error: function (error) {
                alert(error.responseJSON.message);
                clearLoginInputFields();
            }
        });
    }
    if(type=="driver") {
        $.ajax({
            url: "http://localhost:8080/Back_End_war/driver?username=" + username + "&password=" + password,
            method: "get",
            success: function (resp) {
                alert(resp.message);
                clearLoginInputFields();
                console.log(resp);
                 driverAfterLogin();
            }
            ,
            error: function (error) {
                alert(error.responseJSON.message);
                clearLoginInputFields();
            }
        });
    }
    if(type=="employee") {
        $.ajax({
            url: "http://localhost:8080/Back_End_war/manager?username=" + username + "&password=" + password,
            method: "get",
            success: function (resp) {
                // alert(resp.message);
                clearLoginInputFields();
                console.log(resp);
                managerAfterLogin();
                //after login get user nic part
                $.ajax({
                    url: "http://localhost:8080/Back_End_war/manager?username=" + username,
                    method: "get",
                    success: function (resp) {
                       alert(resp.message);//for test however this alert not want
                        mngNicForCar=resp.data;
                    }
                ,
                    error: function (error) {
                    alert(error.responseJSON.message);
                    clearLoginInputFields();
                }
            });
            }
            ,
            error: function (error) {
                alert(error.responseJSON.message);
                clearLoginInputFields();
            }
        });

    }
}

function managerAfterLogin(){
    managerAfterLoginBasic();
    $("#home>a").text('Dashboard');
    $("#customer>a").text('Car');
    $("#employee>a").text('Maintenance');
    $("#driver>a").text('Logout');
}

function customerAfterLogin(){
    home();
    $("#customer>a").text('Booking');
    $("#employee>a").text('MyBook');
    $("#driver>a").text('Logout');
}

function driverAfterLogin(){
    home();
    $("#customer>a").text('Schedule');
    $("#employee>a").text('Logout');
    $("#driver>a").text('F&Q');
}

function managerAfterLoginBasic() {
    $("#header").css('display', 'block');
    $("#homeContent").css('display', 'none');
    $("#login").css('display', 'none');
    $("body").css('height', 'calc(100vh * 1)');
    $("#addCus").css('display', 'none');
    $("#afterLoggingBook").css('display', 'none');
    $("#addBook").css('display', 'none');
    $("#addPayment").css('display', 'none');
    $("#invoice").css('display', 'none');
    $("#bookingTableCustomer").css('display', 'none');
    $("#workScheduleDriver").css('display', 'none');
    $("#managerDashBoard").css('display', 'block');
    $("#addCar").css('display', 'none');
    $("#addMaintenance").css('display', 'none');
    $("#addDamageService").css('display', 'none');
    $("#addMng").css('display', 'none');
    $("#managerPath").css('display', 'none');
    $("#footer").css('display', 'block');
}

function carPage() {
    $("#header").css('display', 'block');
    $("#homeContent").css('display', 'none');
    $("#login").css('display', 'none');
    $("body").css('height', 'calc(100vh * 2.5)');
    $("#addCus").css('display', 'none');
    $("#afterLoggingBook").css('display', 'none');
    $("#addBook").css('display', 'none');
    $("#addPayment").css('display', 'none');
    $("#invoice").css('display', 'none');
    $("#bookingTableCustomer").css('display', 'none');
    $("#workScheduleDriver").css('display', 'none');
    $("#managerDashBoard").css('display', 'none');
    $("#addCar").css('display', 'block');
    $("#addMaintenance").css('display', 'none');
    $("#addDamageService").css('display', 'none');
    $("#addMng").css('display', 'none');
    $("#managerPath").css('display', 'none');
    $("#footer").css('display', 'block');
}

function viewManagerPath() {
    $("#header").css('display', 'block');
    $("#homeContent").css('display', 'none');
    $("#login").css('display', 'none');
    $("body").css('height', 'calc(100vh * 1)');
    $("#addCus").css('display', 'none');
    $("#afterLoggingBook").css('display', 'none');
    $("#addBook").css('display', 'none');
    $("#addPayment").css('display', 'none');
    $("#invoice").css('display', 'none');
    $("#bookingTableCustomer").css('display', 'none');
    $("#workScheduleDriver").css('display', 'none');
    $("#managerDashBoard").css('display', 'none');
    $("#addCar").css('display', 'none');
    $("#addMaintenance").css('display', 'none');
    $("#addDamageService").css('display', 'none');
    $("#addMng").css('display', 'none');
    $("#managerPath").css('display', 'block');
    $("#footer").css('display', 'block');
}


function bookMy() {
    $("#header").css('display', 'block');
    $("#homeContent").css('display', 'none');
    $("#login").css('display', 'none');
    $("body").css('height', 'calc(100vh * 1)');
    $("#addCus").css('display', 'none');
    $("#afterLoggingBook").css('display', 'none');
    $("#addBook").css('display', 'none');
    $("#addPayment").css('display', 'none');
    $("#invoice").css('display', 'none');
    $("#bookingTableCustomer").css('display', 'block');
    $("#workScheduleDriver").css('display', 'none');
    $("#managerDashBoard").css('display', 'none');
    $("#addCar").css('display', 'none');
    $("#addMaintenance").css('display', 'none');
    $("#addDamageService").css('display', 'none');
    $("#addMng").css('display', 'none');
    $("#managerPath").css('display', 'none');
    $("#footer").css('display', 'block');
}

function viewSchedule(){
    $("#header").css('display', 'block');
    $("#homeContent").css('display', 'none');
    $("#login").css('display', 'none');
    $("body").css('height', 'calc(100vh * 1)');
    $("#addCus").css('display', 'none');
    $("#afterLoggingBook").css('display', 'none');
    $("#addBook").css('display', 'none');
    $("#addPayment").css('display', 'none');
    $("#invoice").css('display', 'none');
    $("#bookingTableCustomer").css('display', 'none');
    $("#workScheduleDriver").css('display', 'block');
    $("#managerDashBoard").css('display', 'none');
    $("#addCar").css('display', 'none');
    $("#addMaintenance").css('display', 'none');
    $("#addDamageService").css('display', 'none');
    $("#addMng").css('display', 'none');
    $("#managerPath").css('display', 'none');
    $("#footer").css('display', 'block');
}

function maintenaceGo() {
    $("#managerPathSection>div:nth-child(1)").click(function () {
        viewMaintenance();
    });
    $("#managerPathSection>div:nth-child(2)").click(function () {
        viewDamageService();
    });
}

function viewMaintenance(){
    $("#header").css('display', 'block');
    $("#homeContent").css('display', 'none');
    $("#login").css('display', 'none');
    $("body").css('height', 'calc(100vh * 1)');
    $("#addCus").css('display', 'none');
    $("#afterLoggingBook").css('display', 'none');
    $("#addBook").css('display', 'none');
    $("#addPayment").css('display', 'none');
    $("#invoice").css('display', 'none');
    $("#bookingTableCustomer").css('display', 'none');
    $("#workScheduleDriver").css('display', 'none');
    $("#managerDashBoard").css('display', 'none');
    $("#addCar").css('display', 'none');
    $("#addMaintenance").css('display', 'block');
    $("#addDamageService").css('display', 'none');
    $("#addMng").css('display', 'none');
    $("#managerPath").css('display', 'none');
    $("#footer").css('display', 'block');
}

function viewDamageService(){
    $("#header").css('display', 'block');
    $("#homeContent").css('display', 'none');
    $("#login").css('display', 'none');
    $("body").css('height', 'calc(100vh * 1)');
    $("#addCus").css('display', 'none');
    $("#afterLoggingBook").css('display', 'none');
    $("#addBook").css('display', 'none');
    $("#addPayment").css('display', 'none');
    $("#invoice").css('display', 'none');
    $("#bookingTableCustomer").css('display', 'none');
    $("#workScheduleDriver").css('display', 'none');
    $("#managerDashBoard").css('display', 'none');
    $("#addCar").css('display', 'none');
    $("#addMaintenance").css('display', 'none');
    $("#addDamageService").css('display', 'block');
    $("#addMng").css('display', 'none');
    $("#managerPath").css('display', 'none');
    $("#footer").css('display', 'block');
}