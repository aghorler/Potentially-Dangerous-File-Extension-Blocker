/* Potentially dangerous file extension list. */
var blocked = ["action", "apk", "app", "appimage", "application", "appx", "appxbundle", "aspx", "bash", "bat", "bin", "chm", "class", "cmd", "cmd ", "com", "command", "cpl", "crx", "csh", "deb", "dev", "dll", "dmg", "drv", "exe", "gadget", "hlp", "hta", "htm", "html", "img", "inf", "inf1", "ins", "inx", "ipa ", "iso", "isu", "jar", "job", "js", "jse", "jsf", "jtd", "ksh", "lnk", "lnkx", "msc", "msh", "msh1", "msh1xml", "msh2", "msh2xml", "msi", "msp", "mst ", "msu", "ocx", "osx", "out", "paf", "php", "pif", "prg", "ps1", "ps1xml", "ps2", "ps2xml", "psc1", "psc2", "psm1", "py", "pyc", "pyo", "python", "pyw", "pyz", "pyzw", "rb", "rbw", "rdp", "reg", "rgs", "rpm", "run", "scf", "scr", "sct ", "sh", "shb", "shs", "swf", "u3p", "vb", "vbe", "vbs", "vbscript", "vbx", "workflow", "ws", "wsb", "wsc", "wsf", "wsh", "xap", "xll", "xpi"];

/* Cancel download if file extension is in above array. */
chrome.downloads.onDeterminingFilename.addListener(function(downloadItem){
    chrome.storage.local.get({
        subDomainWhitelist: []
    },
    function(array){
        var hostname = new URL(downloadItem.url.replace("blob:", "")).hostname;
        var filename = downloadItem.filename.toLowerCase();
        var extension = filename.substring(filename.lastIndexOf('.') + 1);

        for(var i = 0; i < array.subDomainWhitelist.length; i++){
            if(hostname.endsWith(array.subDomainWhitelist[i]) && /(?<!^)\.(?!$)/.test(array.subDomainWhitelist[i])){
                return;
            }
        }

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
});
