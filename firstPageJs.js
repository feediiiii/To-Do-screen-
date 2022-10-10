function wariLwa9t(){
    var lwa9t=new Date();
    sweya3=lwa9t.getHours()
    d9aye9=lwa9t.getMinutes()
    second=lwa9t.getSeconds();


    $("#sweya3").text(sweya3);
    $("#d9aya9").text(d9aye9);
    $("#seconde").text(second);

    if ( sweya3 < 10 && sweya3 >= 4){
        $("#dayOrNight").text("Good Morning ")
    }
    if ( sweya3 > 12 && sweya3 < 17){
        $("#dayOrNight").text("saha ftourkom, have a quick nap and go back to work ");
    }
    if ( sweya3 >=17 && sweya3 < 18){
        $("#dayOrNight").text("Take a rest u deserve it Champ ")
    }
    if ( sweya3 <=18 && sweya3 < 21 ){
        $("#dayOrNight").text("Try to complete what you suppose to do today")
    }
    if ( sweya3 <= 23 && sweya3 >= 21 ){
        $("#dayOrNight").text("If not urgent,try to complete the work tomorrow, you had enought")
    }
    
}

setInterval(wariLwa9t,10)   // setInterval will refresh this function every 10 mili seconde :)

