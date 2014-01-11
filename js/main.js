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