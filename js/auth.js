$(document).ready(function() {
	$("#enter").click(function() {
		var login = $("#login").val();
		var pass = $("#password").val();
		if(login == "" || pass == "")
		{
			if(login == "")
			{
				$("#login").focus();
			}
			else
			{
				$("#password").focus();
			}
			$("#result").html("<div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Ошибка: что-то не введено.</div>");
			return false;
		}
	});
});