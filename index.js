const numberEl = document.getElementById("number-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const toggle = document.getElementById("toggleDark")
const body = document.querySelector("body")


toggle.addEventListener("click", function() {
    this.classList.toggle("bi-moon-fill", this.checked);
    document.body.classList.toggle('dark-mode', this.checked);
})
    

function convert() {
    let number = Number(numberEl.value)
    if (isNaN(number)) {
        lengthEl.innerHTML = "Length (Meter/Feet)<p>Please enter a valid number</p>"
        volumeEl.innerHTML = "Volume (Liters/Gallons)<p>Please enter a valid number</p>"
        massEl.innerHTML = "Mass (Kilograms/Pounds)<p>Please enter a valid number</p>"
        return
    }

    let length = `<p>${number} meters = ${(number * 3.281).toFixed(3)} feet | ${number} feet = ${(number / 3.281).toFixed(3)} meters</p>`
    let volume = `<p>${number} liters = ${(number * 0.264).toFixed(3)} gallons | ${number} gallons = ${(number / 0.264).toFixed(3)} liters</p>`
    let mass = `<p>${number} kilograms = ${(number * 2.204).toFixed(3)} pounds | ${number} pounds = ${(number / 2.204).toFixed(3)} kilograms</p>`

    lengthEl.innerHTML = `Length (Meter/Feet)${length}`
    volumeEl.innerHTML = `Volume (Liters/Gallons)${volume}`
    massEl.innerHTML = `Mass (Kilograms/Pounds)${mass}`
}
