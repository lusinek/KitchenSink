function commonjs() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	var scaleX = 1;
	var scaleY = 1;
	if (isBlackberry) {
		scaleX += 1;
		scaleY += 2;
	};
	var win = Ti.UI.createWindow();
	
	var view = Ti.UI.createView({
		backgroundColor:"white",
		layout:"vertical"
	});
	
	win.add(view);
	//TODO remove this offset idea when Ti.UI.View.layout = 'vertical' will be supported for Blackberry
	var offset = 0;
	
	function addResult(msg)
	{
		var label = Ti.UI.createLabel({
			height:"auto",
			width:"auto",
			top:20 * scaleY + offset,
			text:msg
		});
		if (isBlackberry) {
			label.height = 30 * scaleY;
			label.width = 200 * scaleX;
			offset += 30 * scaleY;
		}
		view.add(label);
	}
	
	// example of a common JS module
	//
	// NOTE: modules in Titanium always load *absolute* to the Resources folder
	// not relative to the enclosing JS context
	
	try
	{
		var echo = require('ui/common/platform/echo');
		var result = echo.echo('hello world');
		addResult("Test 1 => "+((result == 'hello world') ? "Passed" : "Failed"));
	}
	catch(E)
	{
		addResult("Test 1 => Failed with "+E);
	}
	
	try
	{
		var result = require('ui/common/platform/echo').echo('hello world');
		addResult("Test 2 => "+((result == 'hello world') ? "Passed" : "Failed"));
	}
	catch(E)
	{
		addResult("Test 2 => Failed with "+E);
	}
	
	try
	{
		// test catching module exception on bad module
		require('__bad_module__');
		addResult("Test 3 = > Failed: should have raised an exception loading a missing module, but didn't");
	}
	catch(e)
	{
		// this is good
		addResult("Test 3 => Passed");
	}
	
	return win;
};

module.exports = commonjs;
