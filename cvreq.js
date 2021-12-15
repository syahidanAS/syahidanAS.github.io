import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {getDatabase, ref, set, child, update, remove}
from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}


const firebaseConfig = {
  apiKey: "AIzaSyCFkGxTaOpo8RYb9zYV4PP7xFTnLZYivcU",
  authDomain: "portfolio-f58a6.firebaseapp.com",
  databaseURL: "https://portfolio-f58a6-default-rtdb.firebaseio.com",
  projectId: "portfolio-f58a6",
  storageBucket: "portfolio-f58a6.appspot.com",
  messagingSenderId: "886767458203",
  appId: "1:886767458203:web:02e2044397daeb96a4733e"
};
const app = initializeApp(firebaseConfig);

var modal = document.getElementById("myModal");
var loading = document.getElementById("loadingCV");
var greetingText = document.getElementById("thxTxt");
var FloatLoading = document.getElementById("floatLoading");

const db = getDatabase();
var EmailCv = document.getElementById("emailCV");
var insBtn = document.getElementById("btnCvReq");


var NameMessage = document.getElementById("nameMessage");
var EmailMessage = document.getElementById("emailMessage");
var BodyMessage = document.getElementById("bodyMessage");
var BtnMessage = document.getElementById("btnMessage");




function InsertData(){
   if(EmailCv.value.length == 0){
       alert('Email required!');
   }else{
    insBtn.style.display="none";
    FloatLoading.style.display="block";
    
    set(ref(db, "CvRequest/"+makeid(20)),{
        VisitorEmail:EmailCv.value,
        isRead:false,
        isSend:false
        
    } )
    .then(()=>{
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

        
        FloatLoading.style.display="none";
        modal.style.display = "none";
        })
    .catch((error)=>{
        alert("Something went wrong! please try again");
    }); 
   }
   
}

var loadingMessage = document.getElementById("loadingMsg");


function sendMessage(){
    if(NameMessage.value.length == 0){
        alert('Name required!');
    }else if(EmailMessage.value.length == 0){
        alert('Email required!');
    }else if (BodyMessage.value.length == 0){
        alert('Message required!')
    }else{
        FloatLoading.style.display="block";

        set(ref(db, "Message/"+makeid(20)),{
            VisitorName:NameMessage.value,
            VisitorEmail: EmailMessage.value,
            VisitorMessage: BodyMessage.value,
            isRead:false
            
        } )
        .then(()=>{
            FloatLoading.style.display="none";
            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        })
        .catch((error)=>{
            alert("Something went wrong! please try again");
        }); 
    }

}



insBtn.addEventListener('click', InsertData);
BtnMessage.addEventListener('click', sendMessage);