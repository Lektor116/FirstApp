function show_alert (message, title) 
{
	if (navigator.notification) 
	{
		navigator.notification.alert(message, null, title, 'OK');
	} 
	else 
	{
		alert(title ? (title + ": " + message) : message);
	}
}
function vibrate() 
{
        navigator.notification.vibrate(2000);
}

function about()
{
	var text = "Панель управления светофором v 0.1\n\nРазработчик - Искандер Хайруллин";
	show_alert(text,"О нас");
	vibrate();
}