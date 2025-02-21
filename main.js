const imgs = document.querySelectorAll("[class^='slider--img']>img")

let urls = []
imgs.forEach((el) => {
	let url = el.getAttribute("src")
	urls.append(`${url}\n`)
})

browser.tabs.query({ active: true, currentWindow: true }, tabs => {
	const tab = tabs[0]
	browser.tabs.sendMessage(tab.id, "test").then(() => { alert("sent") })
})

