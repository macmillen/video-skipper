const getSkipTime = (key, time) => {
  switch (key) {
    case "a":
    case "A":
    case "ArrowLeft":
      return -time;
    case "d":
    case "D":
    case "ArrowRight":
      return time;
    default:
      return null;
  }
};

let skipTime = 10;

chrome.storage.sync.get("skipTime", ({ skipTime: time }) => {
  skipTime = time;
});

chrome.storage.onChanged.addListener(function (changes, namespace) {
  for (let [key, { newValue }] of Object.entries(changes)) {
    if (key === "skipTime") {
      skipTime = newValue;
    }
  }
});

document.addEventListener("keydown", (e) => {
  const key = e.key;
  const timeToSkip = getSkipTime(key, skipTime);

  if (timeToSkip) {
    const videos = document.getElementsByTagName("video");
    for (const video of videos) {
      video.currentTime += timeToSkip;
    }
  }
});
