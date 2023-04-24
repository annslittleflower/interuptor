let currentInterval = null

function renderPopup() {
  chrome.windows.create({
    focused: true,
    width: 1000,
    height: 800,
    type: 'popup',
    url: 'popup.html',
    top: 100,
    left: 100
  },
  () => {})
}

chrome.runtime.onMessage.addListener((msg) => {
  if (currentInterval) {
    clearInterval(currentInterval)
  }

  currentInterval = setInterval(renderPopup, msg.minutes * 60 * 1000)
});

chrome.runtime.onInstalled.addListener((details) => {
  if(details.reason == "install"){
    try {
      chrome.tabs.create({
        url: "index.html"
      });
      // chrome.runtime.sendMessage({ "minutes": 40 });
    } catch (e) {
      console.log(e)
    }
    return
  }
  if(details.reason == "update"){
    return
  }
});

