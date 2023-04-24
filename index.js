document.addEventListener("DOMContentLoaded", async () => {

  // const getStorageData = key =>
  //   new Promise((resolve, reject) =>
  //     chrome.storage.sync.get(key, result =>
  //       chrome.runtime.lastError
  //         ? reject(Error(chrome.runtime.lastError.message))
  //         : resolve(result)
  //     )
  //   )

  // const setStorageData = data =>
  //   new Promise((resolve, reject) =>
  //     chrome.storage.sync.set(data, () =>
  //       chrome.runtime.lastError
  //         ? reject(Error(chrome.runtime.lastError.message))
  //         : resolve()
  //     )
  //   )

  const ti = document.getElementById('time-input')
  // const TIME_VALUE = 1

  // console.log('23123', TIME_VALUE)

  ti.value = 40

  chrome.runtime.sendMessage({ "minutes": Number(ti.value) });

  ti.addEventListener('change', (e) => {
    const minutes = Number(e.target.value)

    // setStorageData({ data: [someData] })


    if (minutes) {
      chrome.runtime.sendMessage({"minutes": minutes });
    }
    // chrome.storage.sync.set({"TIME_VALUE": minutes})

  })
  
});
