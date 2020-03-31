const storage = chrome.storage.local;
const message = document.querySelector('#message');
const darkOnButton = document.querySelector('#dark-on');
const darkOffButton = document.querySelector('#dark-off');

darkOnButton.addEventListener('click', setDarkOn);
darkOffButton.addEventListener('click', setDarkOff);

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