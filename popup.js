import m from "main.js";

const p = document.querySelector("p")

console.log(m.urls);

p.innerText = m.urls.join("\n")

const imgs = document.querySelectorAll("[class^='slider--img']>img")

export let urls = []
imgs.forEach((el) => {
	let url = el.getAttribute("src")
	urls.append(`${url}\n`)
})

browser.tabs
