function network() {
	//TODO review this part when Jira tasks: TIMOB-8587 and TIMOB-10275 will be implemented
	if (Titanium.Platform.name === 'blackberry') {
		alert('Titanium.Network module is not implemented for BlackBerry yet');
		return;
	}
	var win = Titanium.UI.createWindow();
	
	var label = Titanium.UI.createLabel({
		text:'type:' + Titanium.Network.networkType + ' online:' + Titanium.Network.online + ' name:'+Titanium.Network.networkTypeName,
		font:{fontSize:14},
		color:'#777',
		top:10,
		left:10,
		width:'auto',
		height:'auto'
	});
	win.add(label);
	
	var label2 = Titanium.UI.createLabel({
		text:'Change Event: not fired',
		font:{fontSize:14},
		color:'#777',
		top:30,
		left:10,
		width:'auto',
		height:'auto'
	});
	win.add(label2);
	Titanium.Network.addEventListener('change', function(e)
	{
		var type = e.networkType;
		var online = e.online;
		var networkTypeName = e.networkTypeName;
		label2.text = 'Change fired net type:' + type + ' online:' + online + ' name:'+networkTypeName;
	});
	
	return win;
};

module.exports = network;
