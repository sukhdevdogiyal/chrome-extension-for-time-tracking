let activeTab = null;
let startTime = null;

chrome.tabs.onActivated.addListener(async (info) => {
  if (activeTab && startTime) {
    const duration = Date.now() - startTime;

    try {
      await fetch("http://localhost:5000/log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: activeTab.url,
          duration,
          date: new Date()
        })
      });
    } catch (err) {
      console.error("Failed to send data:", err);
    }
  }

  try {
    const tab = await chrome.tabs.get(info.tabId);
    activeTab = tab;
    startTime = Date.now();
  } catch (err) {
    console.error("Failed to get tab:", err);
  }
});
