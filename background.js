chrome.runtime.onInstalled.addListener(() => {
  chrome.bookmarks.getTree((bookmarkTreeNodes) => {
    console.log(bookmarkTreeNodes);
    // Process bookmarkTreeNodes and send to content script or store for later use
  });

  chrome.tabs.query({}, (tabs) => {
    console.log(tabs);
    // Process tabs and send to content script or store for later use
  });
});

