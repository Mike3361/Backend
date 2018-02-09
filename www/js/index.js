Backendless.initApp("7B93C889-5309-F425-FF2A-B39F7B5AE100","F89B1CF6-AB1D-AAD8-FF73-DFCD2A226100");

$(document).on("pageshow","#todopage", onPageShow);

function onPageShow() {
	console.log("page shown");
} 

Backendless.Data.of("TASKS").find().then(processResults).catch(error);
function processResults(tasks) {
   //display the first task in an array of tasks. 
alert(tasks[0].Task)
}

function error(err) {
    alert(err);
}

$('#taskList').empty();
for (var i = 0; i < tasks.length; i++) { 
  $('#taskList').append("<li>"+tasks[i].Task+"</li>");
}
//refresh the listview
$('#taskList').listview('refresh');

