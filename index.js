document.addEventListener("DOMContentLoaded", () => {

  const ti = document.getElementById('time-input')

  chrome.runtime.sendMessage({ "minutes": Number(ti.value) });

  ti.addEventListener('change', (e) => {
    const minutes = Number(e.target.value)

    chrome.runtime.sendMessage({"minutes": minutes });
  })
  
});
