console.log("main.js")
browser.runtime.onMessage.addListener(msg => {
    console.log(`msg: ${msg}`)
    if (msg == "run") {
        console.log("message is run")
        browser.tabs.query({ active: true, currentWindow: true }, tabs => {
            const imgs = document.querySelectorAll("[class^='slider--img']>img")

            let urls = []
            imgs.forEach((el) => {
                let url = el.getAttribute("src")
                urls.push(`${url}\n`)
            })

            const tab = tabs[0]
            browser.tabs.sendMessage(tab.id, "test", urls).then(() => { console.log("sent") })
        })
        console.log("run end")
    }
})

const test = "kajshdfklsjahd"
