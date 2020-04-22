const storage = chrome.storage.local;
const message = document.querySelector('#message');

storage.get(['darkzap'], (items) => {
    if (items.darkzap) {
        setDarkOff();
    } else {
        setDarkOn();
    }
    chrome.tabs.query({}, function(tabs) {
        tabs.forEach(tab => {
          if (tab.url.includes("web.whatsapp.com")) {
            chrome.tabs.reload(tab.id);
          }
        });
    });
  }
);

function setDarkOn() {
  storage.set({darkzap: true}, () => {
    message.innerText = 'Activated dark mode.';
  });
}

function setDarkOff() {
  storage.set({darkzap: false}, () => {
    message.innerText = 'Deactivated dark mode.';
  });
}