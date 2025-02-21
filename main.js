browser.runtime.onMessage.addListener(msg => {
	if (msg == "run") {
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
				console.log("no extension")
				return
			}

			let idx = urlAttr.indexOf(ext)
			let url = urlAttr.slice(0, idx + 4)
			urls.push(`${url}\n`)
		})

		browser.runtime.sendMessage({ action: "urls", data: urls })
	}
})
