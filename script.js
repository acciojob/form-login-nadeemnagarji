function getFormvalue() {
    //Write your code here
  var form = document.getElementById("form1");

  // Get the values of First name and Last name input fields
  var firstName = form.elements["fname"].value;
  var lastName = form.elements["lname"].value;
	 alert( `${firstName}  ${lastName}`);
}
