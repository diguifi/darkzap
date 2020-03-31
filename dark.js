const storage = chrome.storage.local;

storage.get(['darkzap'], (items) => {
  if (items.darkzap) {
    addStyle();
  }
});

function addStyle() {
    const style = document.createElement('link');
    style.id = 'darkzap-style'
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = chrome.extension.getURL('darkzap.css');
    (document.head||document.documentElement).appendChild(style);
}