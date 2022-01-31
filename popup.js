let skipTimeInput = document.getElementById("skip-time");

chrome.storage.sync.get("skipTime", ({ skipTime }) => {
  skipTimeInput.value = skipTime;
});

skipTimeInput.addEventListener("input", (e) => {
  const newValue = Number(e.target.value);
  if (newValue) {
    chrome.storage.sync.set({ skipTime: newValue });
  }
});
