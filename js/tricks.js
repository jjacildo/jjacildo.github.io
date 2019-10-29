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
});
