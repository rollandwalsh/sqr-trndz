let xpath = "//span[text()='Yesterday']";
let matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
let btn = matchingElement.parentElement;
btn.click();

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day = weekday[d.getDay()];

let xpath2 = `//span[text()='Last ${day}']`;
let matchingElement2 = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
let btn2 = matchingElement.parentElement;
btn2.click();

const clickBtn = (btnText)
