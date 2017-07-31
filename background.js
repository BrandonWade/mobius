function toggleReplay() {
  getActiveTab()
  .then((tabs) => {
  });
}

function getActiveTab() {
  return browser.tabs.query({
    active: true,
    currentWindow: true
  });
}

browser.browserAction.onClicked.addListener(toggleReplay);
