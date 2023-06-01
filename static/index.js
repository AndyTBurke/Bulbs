document.getElementById('copy-btn').addEventListener('click', () => copy())

function copy() {
    const binary = document.getElementById('binary-message').innerText;

    navigator.clipboard.writeText(binary)
}