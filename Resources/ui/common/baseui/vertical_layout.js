function vertical_layout(_args) {
	//TODO review this part when layout will be implemented
	if (Titanium.Platform.name === 'blackberry') {
		alert('Titanium.Ui.View layout vertical is not supported for BlackBerry yet');
		return;
	}
	var win = Ti.UI.createWindow({backgroundColor:'#fff'});
	//create table view data object
	var data = [
		{title:'Basic', hasChild:true, test:'ui/common/baseui/vertical_layout_basic'},
		 {title:'Table View', hasChild:true, test:'ui/common/baseui/vertical_layout_table_view'}
	];
	
	
	// create table view
	for (var i = 0; i < data.length; i++ ) { data[i].color = '#000'; data[i].font = {fontWeight:'bold'} };
	var tableview = Titanium.UI.createTableView({
		data:data
	});
	
	// create table view event listener
	tableview.addEventListener('click', function(e)
	{
		if (e.rowData.test)
		{
			var ExampleWindow = require(e.rowData.test);
				win = new ExampleWindow(_args);
			_args.containingTab.open(win,{animated:true});
		}
	});
	
	// add table view to the window
	win.add(tableview);
	return win;
};

module.exports = vertical_layout;
	

