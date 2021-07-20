$(".hiddennav").css('visibility','hidden');
$(".hidden").css('visibility','hidden');


$("#login-button").click(function(){
    if(($("#username").val()=="admin")&&($("#password").val()=="12345")){
        $("form").slideUp( "slow",function(){
            console.log("The body is Hidden");
            $(".hiddennav").css('visibility','visible');
            $("img").attr("src","images/todo.png");
        }); 
    }    
    else{
		$(".hidden").css("color","red");
        $(".hidden").css('visibility','visible');
	}
})




function todo(){
    var count =0;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        var response = JSON.parse(this.responseText);
        var output ="<table><tr><th>NO:</th><th>TITLE</th><th>COMPLETION STATUS</th></tr> ";
        for (var i=0;i<response.length;i++){
          var check = "<input id='check' type='checkbox'>";
          if(response[i].completed==true){
            check = "<input id='check' type='checkbox' checked disabled>";
            count +=1;
          }   
          output +="<tr>" + "<td>" + response[i].id + "</td>" + "<td>" + response[i].title + "</td>" +  "<td>" + check + "</td>" + "</tr>";
        }
        $("#list").css('text-align','left');
        document.getElementById("list").innerHTML = output + "</table>";

        //if (('input[id="check"]:checked').length > (count+4)){
          //alert("I am an alert box!");
        //}
        $('input[type="checkbox"]').click(function(){
          if ($('input[type=checkbox]:checked').not(':disabled')){
            count+=1;
            if(count==95)
            {
              alert("Congrats. 5 Tasks have been Successfully Completed");
            }
          }
          
        })

      }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
  }
  
  
  