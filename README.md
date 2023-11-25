## Potentially Dangerous File Extension Blocker
**Version 1.2.0 | 25 November 2023**

Block potentially dangerous file extensions from being downloaded in Chromium browsers.

This extension is intended to be deployed by administrative policies, or installed normally for use by less-tech-savvy users, for the purpose of preventing the download of files with extensions that are potentially dangerous.

The only required permissions is 'downloads' (to monitor downloaded files), 'notifications' (to notify users of blocked downloads), and 'storage' (to store extension options).

#### How it works

The extension uses the `onDeterminingFilename` function to cancel a download if it's file extension is in the following list.

`"action", "apk", "app", "appimage", "application", "aspx", "bash", "bat", "bin", "class", "cmd", "cmd ", "com", 
"command", "cpl", "csh", "deb", "dev", "dll", "dmg", "drv", "exe", "gadget", "hlp", "hta", "htm", "html", "img", 
"inf", "inf1", "ins", "inx", "ipa ", "iso", "isu", "jar", "job", "js", "jse", "ksh", "lnk", "msc", 
"msh", "msh1", "msh1xml", "msh2", "msh2xml", "msi", "msp", "mst ", "ocx", "osx", "out", "paf", 
"php", "pif", "prg", "ps1", "ps1xml", "ps2", "ps2xml", "psc1", "psc2", "py", "python", "reg", 
"rgs", "rpm", "run", "scf", "scr", "sct ", "sh", "shb", "shs", "swf", "u3p", "vb", "vbe", "vbs", 
"vbscript", "vbx", "workflow", "ws", "wsc", "wsf", "wsh"`.

#### Download

[Chrome Web Store](https://chrome.google.com/webstore/detail/potentially-dangerous-fil/biaiklkognaclgklcdlpgiajdgjofoai)

---

#### Privacy

Potentially Dangerous File Extension Blocker does not collect any user data. 

The extension is hosted entirely on GitHub and the Chrome Web Store. These services may independently collect user data.

#### License

Copyright 2023 Aaron Horler

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
