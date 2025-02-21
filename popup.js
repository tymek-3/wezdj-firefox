const p = document.querySelector("p")


browser.runtime.onMessage.addListener(msg => {
	alert("got message")
	console.log(msg.command)
	console.log(msg)
})

browser.tabs
	.executeScript({ file: "main.js" })
	.then(() => { alert("executed") })
