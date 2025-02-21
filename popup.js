document.querySelector("button").addEventListener("click", () => {
	browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		browser.tabs.sendMessage(tabs[0].id, "run")
	})
})

browser.runtime.onMessage.addListener(msg => {
	if (msg.action == "urls") {
		console.log(msg.data)
		const p = document.querySelector("p")

		msg.data.forEach((u) => {
			console.log(u)
			p.innerHTML += `<a href="${u}">${u}</a><br>`
			browser.downloads.download({ url: u });
		})
	}
})
