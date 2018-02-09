<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->
Backendless.initApp("7B93C889-5309-F425-FF2A-B39F7B5AE100","F89B1CF6-AB1D-AAD8-FF73-DFCD2A226100");

$(document).on("pagecreate","#pageone",function(){
  
  	$('#tapholdtext').on("taphold",function(){
    	$(this).hide();
 	});                       

	$('#taptext').on("tap",function(){
    	alert("Stop tapping!");
 	}); 

	$('#swipetext').on("swipeleft",function(){
    	$(this).css('color', 'green');
  	});   


});