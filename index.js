document.addEventListener("DOMContentLoaded", async () => {
  const ti = document.getElementById('time-input')

  const result = await chrome.storage.sync.get(['TIME_VALUE_1'])
  const value = result['TIME_VALUE_1']

  ti.value = !value || value <=0 ? 40 : value;

  await chrome.runtime.sendMessage({ "minutes": Number(ti.value) });

  ti.addEventListener('change', async (e) => {
    const minutes = Number(e.target.value)

    if (minutes) {
      await chrome.runtime.sendMessage({"minutes": minutes });
    }
  })
  
});
