setInterval(() => {
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
}, 15000)


