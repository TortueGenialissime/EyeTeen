   $(function(){
       $("#cp").keypress(function(e){
           var inputBefore = $("#cp").val();
           setTimeout(function(){
            var input = $("#cp").val();
            var ville = $("#ville");
               if(ville.val().length > 0 && inputBefore != input){
                   ville.val("");
               }
            $.getJSON("https://vicopo.selfbuild.fr/?code="+input, function(data){
                $("#result").css("display","inline-block");
                if(data.cities.length > 8){
                    $("#result ul").css("overflow-y", "scroll");
                    $("#result").css("height", 5*36+"px");
                }
                else {
                    $("#result").css("height", data.cities.length*36+"px");
                    $("#result ul").css("overflow-y", "inherit");
                }
                var ul = $("#result ul");
                ul.html("");
                Array.prototype.forEach.call(data.cities, function(result){
                    ul.html(ul.html() + "<li data-city="+result.city+" data-cp="+result.code+">"+result.city.toUpperCase()+" ("+result.code+")</li>");
                })
            }); 
           }, 100);
       });
       $("#result ul").on("click", "li", function(){
           $("#ville").val($(this).data("city").charAt(0)+$(this).data("city").slice(1).toLowerCase());
           $("#cp").val($(this).data("cp"));
           $("#result").css("display","none");
       });
       setInterval(function(){
           if(!("#ville").disabled){
              $("#ville").attr("disabled", "disabled");
          }
       }, 10);
    });
        