const form = document.querySelector('form')
const number = document.querySelector('.number')
const variableText = document.querySelector('.variableText')
form.addEventListener('submit', e => {
    e.preventDefault()
    variableText.innerHTML = number.value
    number.value = ''
})

const dec = document.querySelector('.decrease')
const inc = document.querySelector('.increase')

dec.addEventListener('click', () => {
    variableText.textContent = `${parseInt(variableText.innerHTML) - 1}`
})

inc.addEventListener('click', () => {
    variableText.textContent = `${parseInt(variableText.innerHTML) + 1}`
})

const color = document.querySelector('.color')

variableText.style.background 
color.addEventListener('input', e => {
    variableText.style.color = e.target.value
})

