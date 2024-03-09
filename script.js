let pswrd = document.querySelector('#userPassword').value;
let cnfrmPswrd = document.querySelector('#confirmPassword').value;
let button = document.querySelector('.btn');
button.addEventListener('click', sendMail);

function sendMail(){
    Email.send({
        SecureToken : "dbadf2d7-2c88-4f16-aad2-5f736933d6c7",
        To : document.querySelector("#userEmail").value,
        From : "unknowngradeforce@gmail.com",
        Subject : "Successful Registration",
        Body : "Hey " + document.querySelector("#lastName").value + ". Welcome to Grade Force Technologies." 
    }).then(
      message => {
        if(message == 'OK'){
            swal("CONGRATULATIONS!", "You have successfully registered", "success");
        }else{
            swal("OOPS!", "Something went wrong", "error");
        }
      }
    )
}
