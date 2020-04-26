function validateForm() {
    var name = document.forms["contactform"]["name"].value;
	var email = document.forms["contactform"]["email"].value;
    if (name == "" || email == "") {
        alert("Please don't leave any fields empty");
        return false;
    }
	
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(contactform.email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
	
}

$(function(){
		$('#menu').slicknav();
          
	});
