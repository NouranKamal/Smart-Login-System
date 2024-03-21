var SignName=document.getElementById("SignName");
var SignEmail =document.getElementById("SignEmail");
var SignPass =document.getElementById('SignPass');
var signupBtn =document.getElementById('signupBtn');
var success = document.getElementById('success');
var existMsg =document.getElementById('existMsg');
var requiredMsg =document.getElementById('requiredMsg');
var userList=[];

if(localStorage.getItem('userList')!=null){
    var userList= JSON.parse(localStorage.getItem('userList'));
   };

function addUser(){
    var user={
        name:SignName.value,
        email: SignEmail.value,
        pass: SignPass.value
    }
    userList.push(user);
    localStorage.setItem('userList',JSON.stringify(userList));
    success.classList.replace("d-none","d-block");
}

signupBtn.addEventListener("click",function(){
    if(SignEmail.value==""||SignName.value==""||SignPass.value==""){
        requiredMsg.classList.replace("d-none","d-block");
        }
    if(SignEmail.value != ""){
        emailFounded()
    }
   
})


function emailFounded(){
    for(var i=0 ; i<userList.length ; i++){
        if(SignEmail.value == userList[i].email){
            existMsg.classList.replace('d-none','d-block')
            return 1;
        }
    }
   addUser();
}