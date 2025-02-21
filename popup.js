console.log("popup.js")

document.querySelector("button").addEventListener("click", () => {
    browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        browser.tabs.sendMessage(tabs[0].id, "run")
    })
})
