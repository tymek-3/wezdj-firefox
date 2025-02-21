console.log("main.js")
browser.runtime.onMessage.addListener(msg => {
    console.log(`msg: ${msg}`)
    if (msg == "run") {
        console.log("message is run")
        const imgs = document.querySelectorAll("[class^='slider--img']>img")

        let urls = []
        imgs.forEach((el) => {
            let urlAttr = el.getAttribute("src")

            let ext;
            if (urlAttr.includes(".jpg")) {
                ext = ".jpg"
            } else if (urlAttr.includes(".png")) {
                ext = ".png"
            } else {
                console.log("none")
                return
            }

            let idx = urlAttr.indexOf(ext)
            let url = urlAttr.slice(0, idx + 4)
            console.log(url)
            urls.push(`${url}\n`)
        })

        imgs.forEach(url => {
            browser.downloads.download({ url: url });
        })

    }
})
