$(document).ready(function() {
   
    $('#aboutme').click(function(event){
        event.stopPropagation();
        $(".folderContent").hide();
        $("#me_folder").slideToggle("fast");
    });
		$("#me_folder").on("click", function (event) {
			event.stopPropagation();
		});
    
    $('#resume').click(function(event){
        event.stopPropagation();
        $(".folderContent").hide();
        $("#resume_folder").slideToggle("fast");
    });
		$("#resume_folder").on("click", function (event) {
			event.stopPropagation();
		});
    
    $('#projects').click(function(event){
        event.stopPropagation();
        $(".folderContent").hide();
        $("#projects_folder").slideToggle("fast");
    });
		$("#projects_folder").on("click", function (event) {
			event.stopPropagation();
		});
});
    
$(document).on("click",function(){
	$(".folderContent").hide();
	$('.folder').show();
	//$('.folder').css("pointer-events", "");
});
   
    
    
    
    /*$("#aboutme").click(function(event) {
        var folderContent = $("#me_folder");
        folderContent.remove();

        var folderContentShown = folderContent.css("display") != "none";

        var clickedFolder = $(this);
        clickedFolder.parent(".row").after(folderContent);

        folderContent.find("#aboutme").text($(this).text());

        $("body").find(".folder, .app").not(clickedFolder).each(function() {
            if (!folderContentShown) $(this).animate({
                opacity: 0.00
            }, "fast");
            else $(this).animate({
                opacity: 1.00
            }, "fast");
        });

        folderContent.slideToggle("fast");
        event.preventDefault();
    });
    
    $("#resume").click(function(event) {
        var folderContent = $("#resume_folder");
        folderContent.remove();

        var folderContentShown = folderContent.css("display") != "none";

        var clickedFolder = $(this);
        clickedFolder.parent(".row").after(folderContent);

        folderContent.find("#resume").text($(this).text());

        $("body").find(".folder, .app").not(clickedFolder).each(function() {
            if (!folderContentShown) $(this).animate({
                opacity: 0.00
            }, "fast");
            else $(this).animate({
                opacity: 1.00
            }, "fast");
        });
        
        folderContent.slideToggle("fast");
        event.preventDefault();
    });
    
    $("#projects").click(function(event) {
        var folderContent = $("#projects_folder");
        folderContent.remove();

        var folderContentShown = folderContent.css("display") != "none";

        var clickedFolder = $(this);
        clickedFolder.parent(".row").after(folderContent);

        folderContent.find("#aboutme").text($(this).text());

        $("body").find(".folder, .app").not(clickedFolder).each(function() {
            if (!folderContentShown) $(this).animate({
                opacity: 0.00
            }, "fast");
            else $(this).animate({
                opacity: 1.00
            }, "fast");
        });

        folderContent.slideToggle("fast");
        event.preventDefault();
    }); 
    
    
});*/
