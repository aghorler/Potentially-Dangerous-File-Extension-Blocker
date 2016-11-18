/* Potentially dangerous file extension list. */
var blocked = ["exe", "msi", "reg", "bat", "action", "apk", "app", "bat", "bin", "cmd", 
			"com", "command", "cpl", "csh", "exe", "gadget", "inf1", "ins", "inx", "ipa", 
			"isu", "jar", "job", "js","jse", "ksh", "lnk", "msc", "msi", "msp", "mst", 
			"osx", "out", "paf", "pif", "prg", "ps1", "reg", "rgs", "run", "scr", "sct", 
			"sh", "shb", "shs", "u3p", "vb", "vbe", "vbs" ,"vbscript", "workflow", "ws", "wsf", "wsh"];

/* Cancel download if file extension is in above list. */
chrome.downloads.onDeterminingFilename.addListener(function(downloadItem){
	var filename = downloadItem.filename;
	var extension = filename.substring(filename.lastIndexOf('.') + 1);
	if(blocked.indexOf(extension) != -1){
		chrome.downloads.cancel(
			downloadItem.id
		);
		alert("File prevented from being downloaded.");
	}
});
