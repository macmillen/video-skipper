let skipTime = 10;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ skipTime });
  console.log(`Default skip time set to ${skipTime}`);
});
