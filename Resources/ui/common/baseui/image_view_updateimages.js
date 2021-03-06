function image_view_update() {
	//TODO review this part when Image View animation methods will be implemented
	if (Titanium.Platform.name === 'blackberry') {
		alert('Titanium.UI.ImageView animation methods are not implemented for BlackBerry yet');
		return;
	}
	var win = Titanium.UI.createWindow();
	
	var _WhenStillImgs = [];
	var _WhenMovingImgs = [];
	
	_WhenStillImgs.push('/images/Kicking00.png');
	_WhenStillImgs.push('/images/Kicking20.png');
	
	_WhenMovingImgs.push('/images/Kicking00.png');
	_WhenMovingImgs.push('/images/Kicking14.png');
	
	var cartoonGuy =  Titanium.UI.createImageView({
		height:200,
		width:200,
		images:_WhenStillImgs,
		duration:100, // in milliseconds, the time before next frame is shown
		repeatCount:0,  // 0 means animation repeats indefinitely, use > 1 to control repeat count
		top:30
	});
	
	win.add(cartoonGuy);
	
	cartoonGuy.start();
	
	cartoonGuy.addEventListener('touchstart', function(e)
	{
		Ti.API.info('I WAS CLICKED');
		cartoonGuy.stop();
		cartoonGuy.images=_WhenMovingImgs;	
		cartoonGuy.start();
	});
	return win;
};

module.exports = image_view_update;
