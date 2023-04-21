setInterval(() => {
  chrome.windows.create({
    focused: true,
    width: 400,
    height: 600,
    type: 'popup',
    url: 'index.html',
    top: 0,
    left: 0
  },
  () => {})
}, 5000)


