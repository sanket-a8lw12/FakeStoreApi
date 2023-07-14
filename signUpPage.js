
function setError(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('formError')[0].innerText = error;
}


function validateForm() {
    let validateLetter = /^[A-Za-z]+$/;
    let returnVal = true;
    const fname = document.forms['myForm']['fname'].value;

    if (!fname.match(validateLetter)) {
        setError("fname", "Invalid first name");
        returnVal = false;
    }


    else if (fname.length < 3) {
        setError("fname", "Length of name is too short");
        returnVal = false;
    }
    else {
        setError("fname", "");
    }

    const lname = document.forms['myForm']['lname'].value;

    if (!lname.match(validateLetter)) {
        setError("lname", "Invalid last name");
        returnVal = false;
    }

    else if (lname.length < 3) {
        setError("lname", "Length of name is too short");
        returnVal = false;
    }

    else {
        setError("lname", "");
    }


    const email = document.getElementById("emailID").value;

    if (!email.includes("@")) {
        setError("email", "Invalid email");
    }
    else {
        setError("email", "");
    }


    const password = document.getElementById("passwordID").value;

    const passwordRepeat = document.getElementById("repeatPasswordId").value;

    if (password !== passwordRepeat) {
        setError("repeatPassword", "The repeat password you entered does not matched with password");
    }
    else {
        setError("repeatPassword", "");
    }

    const checked = document.getElementById("checkboxId").checked;
    console.log("checked = " + checked);

    if(checked === false){
        setError("checkbox", "Please check the terms");
    }
    else{
        setError("checkbox", "");
    }

}



let form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    validateForm();

})













