document.addEventListener("DOMContentLoaded", async () => {

  const getStorageData = key =>
    new Promise((resolve, reject) =>
      chrome.storage.sync.get(key, result =>
        chrome.runtime.lastError
          ? reject(Error(chrome.runtime.lastError.message))
          : resolve(result)
      )
    )

//   const setStorageData = (key, value) =>
//     // new Promise((resolve, reject) =>
//     //   chrome.storage.sync.set(data, () =>
//     //     chrome.runtime.lastError
//     //       ? reject(Error(chrome.runtime.lastError.message))
//     //       : resolve()
//     //   )
//  // )

  const ti = document.getElementById('time-input')

  const result = await chrome.storage.sync.get(['TIME_VALUE'])
  const value = result['TIME_VALUE']

  console.log('RESULT', value)

  if (value) ti.value = value
  else ti.value = 40
  await chrome.runtime.sendMessage({ "minutes": Number(ti.value) });

  ti.addEventListener('change', async (e) => {
    const minutes = Number(e.target.value)

    if (minutes) {
      await chrome.runtime.sendMessage({"minutes": minutes });
    }
  })
  
});
