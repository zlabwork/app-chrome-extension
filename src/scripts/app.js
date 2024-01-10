const openTab = document.getElementById("open-tab")
openTab.onclick = function () {
    chrome.tabs.create({
        url: "pages/index.html"
    });
}
