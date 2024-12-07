const SubmitBtn = document.getElementById("submitButton"); 
const student_name = document.getElementById("fullname").value;
const email = document.getElementById("emailid").value;
const roll_number = document.getElementById("rollno").value;
const classX = document.getElementById("classX");
const classXII = document.getElementById("classXII");
const mySubmitBtn = document.getElementById("submitButton");
const hindiRadioBtn = document.getElementById("hindiRadioBtn");
const nameFilled = document.getElementById("fullNameFilled");

SubmitBtn.onclick = function() {
  if(nameFilled.checked) {
    function namechecker() {
      student_name === "";
      console.log("Please enter a valid candidate name.")
    }
    
    if (student_name == "") {
       console.log("Enter your name.")
    }

}
}



 






