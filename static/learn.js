document.getElementById('counter-btn').addEventListener('click', () => add())
document.getElementById('unicode-converter').addEventListener('input', () => convertToUnicode())

function add() {
    let currentValue_binary = parseInt(document.getElementById('binary-counter').innerText, 2)
    let currentValue_decimal = parseInt(document.getElementById('decimal-counter').innerText)

    currentValue_binary++
    currentValue_decimal++

    document.getElementById('binary-counter').innerText = currentValue_binary.toString(2)
    document.getElementById('decimal-counter').innerText = currentValue_decimal
}

function convertToUnicode() {
    const character = document.getElementById('unicode-converter').value
    character ? document.getElementById('unicode-value').innerText = character.charCodeAt(0)
        : document.getElementById('unicode-value').innerText = "-"
}