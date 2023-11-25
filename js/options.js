function saveOptions(){
  var subDomainArray = document.getElementById('subdomain-whitelist').value.split('\n');
  subDomainArray = subDomainArray.filter(Boolean);

  chrome.storage.local.set({
    subDomainWhitelist: subDomainArray
  });
}

function restoreOptions(){
  chrome.storage.local.get({
    subDomainWhitelist: []
  }, function(items){
    document.getElementById('subdomain-whitelist').value = items.subDomainWhitelist.join("\n");
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('subdomain-whitelist').addEventListener('change', saveOptions);
