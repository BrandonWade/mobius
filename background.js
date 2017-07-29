browser.tabs.onUpdated.addListener((tabID, changeInfo, tab) => {
  if (tab.url.includes('youtube.com')) {
    browser.pageAction.show(tab.id);
  }
});
