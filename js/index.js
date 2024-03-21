var email = document.getElementById("email");
var password = document.getElementById("pass");
var loginBtn =document.getElementById("loginBtn");
var incorrectMsg =document.getElementById("incorrectMsg");
var requiredMsg =document.getElementById("requiredMsg");
var homeLink =document.getElementById("homeLink");

var userInfo=[];

if(localStorage.getItem('userList')!=null){
 var userList= JSON.parse(localStorage.getItem('userList'));
};



loginBtn.addEventListener("click", function(){
    if(email.value !=""|| password.value !=""){
        for(var i=0 ; i<userList.length ; i++){
            if(userList[i].email==email.value && userList[i].pass==password.value){ 
               
                userInfo.push(userList[i].name);
                localStorage.setItem('userInfo',JSON.stringify(userInfo));
                loginlink.setAttribute('href','home.html');
                
 
            }else{
                incorrectMsg.classList.replace("d-none","d-block");
                console.log("no");
            
            }
           }   
    }else{
        requiredMsg.classList.replace("d-none","d-block")
    }
  
 })

 


 