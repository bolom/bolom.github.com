$(function() {
	// email

	$.fn.EmailConverter=function()
	{
		$(this).each(function()
		{
			var title = $(this).attr('title');
			var link = title;
			link = link.replace(/ dot /gi, '.');
			link = link.replace(/ at /gi, '@' );
			if(title == $(this).html())
			{
				$(this).html(link);
			}
			$(this).attr('title', 'Get in touch');
			$(this).attr('href', "mailto:"+link);
		});
	}
	$('.obfs-email').EmailConverter();
});

//Resize
