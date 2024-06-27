document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({}, (tabs) => {
    const tabList = document.getElementById('tab-list');
    tabs.forEach((tab) => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = tab.url;
      link.textContent = tab.title || tab.url;
      link.target = '_blank';
      listItem.appendChild(link);
      tabList.appendChild(listItem);
    });
  });
});

