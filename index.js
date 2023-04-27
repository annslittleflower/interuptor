document.addEventListener("DOMContentLoaded", async () => {
  const ti = document.getElementById('time-input')

  const result = await chrome.storage.sync.get(['TIME_VALUE'])
  const value = result['TIME_VALUE']

  ti.value = value || 40

  await chrome.runtime.sendMessage({ "minutes": Number(ti.value) });

  ti.addEventListener('change', async (e) => {
    const minutes = Number(e.target.value)

    if (minutes) {
      await chrome.runtime.sendMessage({"minutes": minutes });
    }
  })
  
});
