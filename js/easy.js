$(document).ready(function(){
/*    $('a.page-scroll').bind('click',function(event){
    	var $anchor = $(this);
    	$('html','body').stop().animate({
    		scrollTop: $($anchor.attr('href')).offset().top
    	},1500,'easeInOutExpo');
    	event.preventDefault();
    })*/
$('.bxslider').bxSlider({
slideWidth: 300,
minSlides: 5,
maxSlides: 5,
moveSlides: 1,
slideMargin: 0,  
speed:1000,
pause:1000,
autoHover: true,
controls:false,
pager:false,
useCSS:true,
auto:true,       
infiniteLoop: true

});
$('.carousel').carousel({
      interval: 2000
    });

$("#ima-1").click(function(){
	$("#window-scanner").hide();
	 $("#Bi-optic-scanner").hide();
        $("#self-checkout").slideToggle("slow");

    });
     $("#ima-2").click(function(){
     	$("#self-checkout").hide();
     	 $("#Bi-optic-scanner").hide();
        $("#window-scanner").slideToggle("slow");
  
    });
     $("#ima-3").click(function(){
     	$("#self-checkout").hide();
     	$("#window-scanner").hide();
        $("#Bi-optic-scanner").slideToggle("slow");
  
    });
     $("#Submit").click(function(){

     	var name = $("#name").val();
		var mail = $("#mail").val();
		var message = $("#message").val();

			if(name==''){
				$('#name').notify("required name"/*,{position:"right"}*/);
				$('#name').next().show();
				return false;
			}
			if(mail==''){
				$('#mail').notify("required email"/*,{position:"right"}*/);
				$('#mail').next.show();
				return false;
			}
			if(IsEmail(mail)==false){
				$('#mail').notify("This email is not valid"/*,{position:"right"}*/);
				return false;
			}
			  if(message== ''){
                $("#message").notify("required",{ position:"right" });
                $('#message').next().show();
                return false;
            }
			 $.ajax({url: "mail/contact.php?name="+$("#name").val()+"&mail="+$("#mail").val()+"&message="+$("#message").val(), success: function(result){
                    
                    alert(result);

        /*if($('#name').val()==''){
            $("#name").notify("required",{ position:"right" });
             // $("#name").focus();

             if($('#mail').val()==''){
                $("#mail").notify("required",{ position:"right" });
             }
        }
        else{
            $.ajax({url: "mail/contact.php?name="+$("#name").val()+"&mail="+$("#mail").val()+"&message="+$("#message").val(), success: function(result){
                    
                    alert(result);*/
                }
            });


     });
     function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email)) {
           return false;
        }else{
           return true;
        }
      }
    /* $.ajax({url: "contact.php?a=10", success: function(result){
        
        $("#Submit").html(result);
    }});
    */
});