function login() {
    let loginPage = document.getElementById("loginPage");
    let titleText = document.getElementById("titleText");

    if (loginPage.classList.contains("hide-display")) {
      loginPage.removeAttribute("class");
      titleText.setAttribute("class", "banner-info text-center wow fadeIn delay-05s col-md-9 col-sm-6 col-xs-4");
      if (window.innerWidth < 767) {
        document.getElementById("login-box").setAttribute("style", "left: 50%");
        titleText.setAttribute("style", "display: none");
      }
    } else {
      loginPage.setAttribute("class", "hide-display");
      titleText.setAttribute("class", "banner-info text-center wow fadeIn delay-05s");
      titleText.setAttribute("style", "display: block");
    }
}


$(function() {

$("#fname_error_message").hide();
$("#sname_error_message").hide();
$("#email_error_message").hide();
$("#password_error_message").hide();
$("#retype_password_error_message").hide();

var error_fname = false;
var error_sname = false;
var error_email = false;
var error_password = false;
var error_retype_password = false;

$("#form_fname").focusout(function(){
  console.log("j11111b");

    check_fname();
});
$("#form_sname").focusout(function(){
  console.log("j11111b");

    check_sname();
});
$("#form_email").focusout(function(){
    check_email();
});
$("#form_password").focusout(function(){
    check_password();
});
$("#form_retype_password").focusout(function(){
    check_retype_password();
});

function check_fname() {
  var pattern = /^[a-zA-Z]*$/;
  var fname = $("#form_fname").val()
  if (pattern.test(fname) && fname !== "") {
    $("#fname_error_message").hide();
    $("#form_fname").css("border-bottom","2px solid #34F458");
  } else {
    $("#fname_error_message").html("Should contain only Characters");
    $("#fname_error_message").show();
    $("#form_fname").css("border-bottom","2px solid #F90A0A");
    error_fname = true;
  }
}

function check_sname() {
  console.log("j11111b");

  var pattern = /^[a-zA-Z]*$/;
  var sname = $("#form_sname").val()
  if (pattern.test(sname) && sname !== "") {
    console.log("j11111b");
    $("#sname_error_message").hide();
    $("#form_sname").css("border-bottom","2px solid #34F458");
  } else {
console.log("jb");
    $("#sname_error_message").html("Should contain only Characters");
    $("#sname_error_message").show();
    $("#form_sname").css("border-bottom","2px solid #F90A0A");
    error_sname = true;
  }
}

function check_password() {
  var password_length = $("#form_password").val().length;
  if (password_length < 8) {
    $("#password_error_message").html("At least 8 Characters");
    $("#password_error_message").show();
    $("#form_password").css("border-bottom","2px solid #F90A0A");
    error_password = true;
  } else {
    $("#password_error_message").hide();
    $("#form_password").css("border-bottom","2px solid #34F458");
  }
}

function check_retype_password() {
  var password = $("#form_password").val();
  var retype_password = $("#form_retype_password").val();
  if (password !== retype_password) {
    $("#retype_password_error_message").html("Passwords did not matched");
    $("#retype_password_error_message").show();
    $("#form_retype_password").css("border-bottom","2px solid #F90A0A");
    error_retype_password = true;
  } else {
    $("#retype_password_error_message").hide();
    $("#form_retype_password").css("border-bottom","2px solid #34F458");
  }
}

function check_email() {
  var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  var email = $("#form_email").val();
  if (pattern.test(email) && email !== "") {
    $("#email_error_message").hide();
    $("#form_email").css("border-bottom","2px solid #34F458");
  } else {
    $("#email_error_message").html("Invalid email");
    $("#email_error_message").show();
    $("#form_email").css("border-bottom","2px solid #F90A0A");
    error_email = true;
  }
}

$("#registration_form").submit(function() {
  error_fname = false;
  error_sname = false;
  error_email = false;
  error_password = false;
  error_retype_password = false;

  check_fname();
  check_sname();
  check_email();
  check_password();
  check_retype_password();

  if(error_fname === false && error_sname === false && error_email === false &&
     error_password === false && error_retype_password === false) {
       alert("Registration Successfull");
       return true;
     } else {
       alert("Please fill the form Correctly");
       return false;
     }
   });
});
