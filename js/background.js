/* Potentially dangerous file extension list. */
var blocked = ["action", "apk", "app", "application", "aspx", "bash", "bat", "bin", "class", "cmd", "cmd ", "com", 
               "command", "cpl", "csh", "dev", "dll", "drv", "exe", "gadget", "hlp", "hta", "htm", "html", "img", 
               "inf", "inf1", "ins", "inx", "ipa ", "iso", "isu", "jar", "job", "js", "jse", "ksh", "lnk", "msc", 
               "msh", "msh1", "msh1xml", "msh2", "msh2xml", "msi", "msp", "mst ", "ocx", "osx", "out", "paf", 
               "php", "pif", "prg", "ps1", "ps1xml", "ps2", "ps2xml", "psc1", "psc2", "py", "python", "reg", 
               "rgs", "run", "scf", "scr", "sct ", "sh", "shb", "shs", "swf", "u3p", "vb", "vbe", "vbs", 
               "vbscript", "vbx", "workflow", "ws", "wsc", "wsf", "wsh"];

/* Cancel download if file extension is in above array. */
chrome.downloads.onDeterminingFilename.addListener(function(downloadItem){
    var filename = downloadItem.filename;
    var extension = filename.substring(filename.lastIndexOf('.') + 1);

    if(blocked.indexOf(extension.toLowerCase()) != -1){
        chrome.downloads.cancel(downloadItem.id);

        if(downloadItem.state == "complete"){
            chrome.downloads.removeFile(downloadItem.id);
        }

        chrome.notifications.create('', {
          title: 'Download blocked',
          message: 'A potentially dangerous download was blocked. Please contact your device admin for more information.',
          iconUrl: '/img/icon128.png',
          type: 'basic',
          priority: 2,
          requireInteraction: true
        });
    }
});
