$(function(){
    Array.prototype.forEach.call(document.querySelectorAll("#social-nav ul li"), function(elm){
        elm.addEventListener("click", function(e){
           if(elm.dataset.action == "login"){
               document.querySelector('#active-tab').style.left = 0; 
                $("#signup-box").css("left", "50%");
                $("#login-box").css("left", "0%");
               $("#signup-box").fadeOut("slow", function(){
                    $("#login-box").fadeIn("slow", function(){ 
                    });
               });
           }
            else {
                document.querySelector('#active-tab').style.left = "50%"; 
                $("#signup-box").css("left", "0%");
                $("#login-box").css("left", "-50%");
               $("#login-box").fadeOut("slow", function(){
                    $("#signup-box").fadeIn("slow", function(){ 
                    });
               });
            }
        });
    });
});