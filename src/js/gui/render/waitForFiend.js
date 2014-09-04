gui.render.waitForFiend = function(button_id, invite_code, firstname, tour_enabled)
{
	clearTimeout(gui.render.timeout.hideStatus);

	// Communicate with Socket that we want to initiate a session
	app.io.createSpace(invite_code);

	//
	app.stats.event('Navigation', 'Contact', 'Using '+ button_id + ' Button with ID ' + invite_code);
    gui.render.status('<i class="fa fa-circle-o-notch fa-fw fa-spin"></i> Waiting for '+ firstname + ' to Connect');
    $('.contact-options').addClass('animated fadeOut');

    if( !tour_enabled)
    {
	    app.ad.create.banner();
    }
};