function afterSubmit(){



const inputName = document.getElementById('name')
const inputEmail = document.getElementById('email')
const inputPhone = document.getElementById('phone')
const inputDate = document.getElementById('date')
const inputTime = document.getElementById('time')
const inputService = document.getElementById('service')
const inputMessage = document.getElementById('message')

let name = inputName.value;
let email = inputEmail.value;
let phone = inputPhone.value;
let date = inputDate.value;
let time = inputTime.value;
let service =inputService.value;
let message =inputMessage.value;


    if(name == ""  ||email== ""||
        phone== ""||date== ""||
        date== ""||time==""||
        service==""||
        message == ""){
        alert('PLEASE FILL IN ALL THE DETAILS')
    }else{
        alert('THANK YOU FOR CHOOSING US WE WILL COMMUNICATE BACK THROUGH YOUR EMAIL')
    }
   
}