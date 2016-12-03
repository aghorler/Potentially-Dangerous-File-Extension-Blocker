## Potentially Dangerous File Extension Blocker
#####Version 1.0.0 | December 1 2016

Block potentially dangerous file extensions from being downloaded in Chromium browsers.

This extension is intended to be deployed by administrative policies, or installed normally for use by less-tech-savvy users.

The only required permissions is 'downloads'.

#####How it works

The extension uses the `onDeterminingFilename` function to cancel a download if it's file extension is in the following list.

`"action", "apk", "app", "bat", "bin", "cmd", "com", "command", "cpl", "csh", "exe", "gadget", "inf1", "ins", "inx", "ipa", "isu", "jar", "job", "js","jse", "ksh", "lnk", "msc", "msi", "msp", "mst", "osx", "out", "paf", "pif", "prg", "ps1", "reg", "rgs", "run", "scr", "sct", "sh", "shb", "shs", "u3p", "vb", "vbe", "vbs" ,"vbscript", "workflow", "ws", "wsf", "wsh"`.

#####Download

[Chrome Web Store](https://chrome.google.com/webstore/detail/potentially-dangerous-fil/biaiklkognaclgklcdlpgiajdgjofoai)

---

#####Privacy

Potentially Dangerous File Extension Blocker does not collect any user data. 

The extension is hosted entirely on GitHub and the Chrome Web Store. These services may independently collect user data.

#####License

Copyright 2016 Aaron Horler

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
