document.getElementById("form1").addEventListener("submit", function(event) {
            // Get the values of First name and Last name input fields
            var firstName = this.elements["fname"].value;
            var lastName = this.elements["lname"].value;

            // Display the values in an alert
            alert(firstName+" "+lastName);

            // Prevent the form from submitting and refreshing the page
            event.preventDefault();
        });
