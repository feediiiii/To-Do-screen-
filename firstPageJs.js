var userName = prompt("Can I have your name plz  🥺 ? ","tipe your name here ");
userName= userName[0].toUpperCase()+userName.substring(1);

$('#hiUser #hiUserMessage').text('Hi  '+userName+" , Welcome to your new world of studing ,We will be your new pair of studying")

function disapear(){
    $("#hiUser").hide("slow");
}


function typing(){
    var theInput=$("#toDoInput").val();
    $("ul").append("<li>"+theInput+"<input type='checkbox' id='checkBox'></li>")
    $("#toDoInput").val("");
}


$("#toDoInput").change(typing);



$("ul").on("click",$("ul li #checkBox"),function(){
    $("ul li").toggleClass("makeItGreen");
})




function wariLwa9t(){
    var lwa9t=new Date();
    sweya3=lwa9t.getHours()
    d9aye9=lwa9t.getMinutes()
    second=lwa9t.getSeconds();
months =lwa9t.getMonth()+1;
$("#dateOutput").text(lwa9t.getDate()+"/"+months+"/"+lwa9t.getFullYear())

    $("#sweya3").text(sweya3);
    $("#d9aya9").text(d9aye9);
    $("#seconde").text(second);
   
    if (sweya3 >= 0 && sweya3 < 4){
        $("#dayOrNight").text("you should go to sleep "+userName+" or I will call your mom")
    }

    if ( sweya3 < 10 && sweya3 >= 4){
        $("#dayOrNight").text("Good Morning ")
    }
    if ( sweya3 > 12 && sweya3 < 17){
        $("#dayOrNight").text("saha ftourk "+userName+", have a quick nap and go back to work ");
    }
    if ( sweya3 >=17 && sweya3 < 18){
        $("#dayOrNight").text("It's " + (sweya3-12).toString() +" PM, Take a rest u deserve it  "+userName)
    }
    if ( sweya3 >=18 && sweya3 < 21 ){
        $("#dayOrNight").text("It's " + (sweya3-12).toString() +" PM, Try to complete what you suppose to do today");
    }
    if ( sweya3 <= 23 && sweya3 >= 21 ){
        $("#dayOrNight").text("It's " + (sweya3-12).toString() +" PM, If not urgent,try to complete the work tomorrow,enough work for today "+userName+" !")
    }
    
}

setInterval(wariLwa9t,10)   // setInterval will refresh this function every 10 mili seconde :)
