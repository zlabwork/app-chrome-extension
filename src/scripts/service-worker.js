chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason !== "install" && details.reason !== "update") return;
    chrome.contextMenus.create({
        "id": "sampleContextMenu",
        "title": "我是测试的右键菜单",
        "contexts": ["selection"]
    });
});
