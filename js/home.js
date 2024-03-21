
if(localStorage.getItem('userInfo')!=null){
    var userInfo= JSON.parse(localStorage.getItem('userInfo'));
   };

function display(Info){
    var box="";
    box+=`
        <h1 class="text-center">welcome ${Info}</h1>
        `
        document.getElementById('homee').innerHTML=box;
}
display(userInfo);