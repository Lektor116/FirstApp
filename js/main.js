$(document).ready(function() {
	$("#options").hide();
	$("#option").click(function() {
		$("#options").slideToggle();
	});
	$(".signal").click(function() {
		var signal = $(this).attr("id");
		var ip = $("#ip").val();
		if(ip == "")
		{
			alert("Ошибка: введите адрес сервера");
			return false;
		}
		$.ajax({
			type: "GET",
			url: "http://"+ip+"/",
			data:{c:signal},
			success:function(msg) {
				msg = $.trim(msg);
				msg;
			},
			error:function(msg) {
				msg = $.trim(msg);
				alert("Не удалось подключиться");
				return false;
			}
		});
		return false;
	});
	$("#about").click(function() {
		alert("Оптимизация дорожно-транспортного потока v 0.1\n\nРазработчик - Хайруллин Искандер");
	});
});