let start="<html><head><style type='text/css'>";
let middle = "</style></head><body>";
let end ="</body></html>";
function update(){
    $("iframe").contents().find("html").html(
        "<!DOCTYPE html><html><head><style type='text/css'>"+
        $("#cssPanel").val()+ 
        "</style></head><body>"+
        $("#htmlPanel").val()+
        "</body></html>");
        document.getElementById("outputPanel").contentWindow.
        eval($("#jsPanel").val());
}
$(".toggleBut").hover(function(){
    $(this).addClass("hoverBut");
}, function(){
    $(this).removeClass("hoverBut");
})
$(".toggleBut").click(function(){
    $(this).toggleClass("active");
    $(this).removeClass("hoverBut")
    let panelId = $(this).attr("id") + "Panel";
    $("#"+panelId).toggleClass("hidden");
    var number = 4 - $('.hidden').length;
    $(".rikiuoti").width(($(window).width()/number)-7);
})
$(".rikiuoti").height($(window).height()-$("#header").height()-10);
$(".rikiuoti").width($(window).width()/2-10);
update();
$("#htmlPanel,#cssPanel,#jsPanel").on("change keyup paste", function(){
    update();
    
});


/* PILDYMO forma 
$("#submitButton").click(function(){
    let error="";
    if(isEmail($("#email").val()) === false){
        error += "<p>Your email address is not valid</p>"
    }
    if($.isNumeric($("#phone").val())===false){
        $("#phone").after('Phone number has to be 10 digits long.')
        error += "<p>Your phone number is not valid</p>"
    }
    if($("#password").val() !== $("#confirmPassword").val()){
        error += "<p>Your passwords dont match</p>"
    }
    alert(error);
});
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  } */


/* rutlys animacija
$(".circle").click(function(){
    /* $.ajax("info.txt").done(function(data){
        $("p").html(data);
    }).fail(function(){
        alert("Klaida");
    }); */
    /* $(this).animate({
        "left":"+=150px",
        "width":"+=20px",
        "height":"+=20px"
        },"1000", function(){
        if ($(this).css("left").match(/(\d+)/)[0]>screen.width-$(this).css("width").match(/(\d+)/)[0]){
            $(this).css({
                "left":"0",
                "width":"200px",
                "height":"200px",
                "backgroundColor":"yellow"});
        }
            
        
    });
}); */ 


