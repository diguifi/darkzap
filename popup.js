const storage = chrome.storage.local;
const message = document.querySelector('#message');

storage.get(['darkzap'], (items) => {
    if (items.darkzap) {
        setDarkOff();
    } else {
        setDarkOn();
    }
    chrome.tabs.query({active: true}, function(tabs) {
        chrome.tabs.reload(tabs[0].id);
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