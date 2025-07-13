const textArr = document.querySelectorAll('.text')
// const colorArr = ["#fefefe", "#ffea00", "#ffa200", "#ff4938", "#f00064", "#a80089", "#0000a3"]
const colorArr = ["#000091", "#000091", "#ffffff", "#ffffff", "#ffffff", "#e1000f", "#e1000f"]
textArr.forEach((text, index) => {
	text.style.color = colorArr[index]
})
