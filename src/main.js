import './style.css'
import QRCode from 'qrcode'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>QR Code Generator</h1>
    <div class="qr-form">
      <label for="urlInput" class="input-label">Enter URL or Text to Convert</label>
      <input type="text" id="urlInput" placeholder="e.g., https://www.example.com or any text" class="url-input">
      <button id="generateBtn" class="generate-btn">Generate QR Code</button>
    </div>
    <div class="qr-result">
      <canvas id="qrCanvas"></canvas>
      <div id="error" class="error"></div>
    </div>
    <div class="footer">
      <h4>QR Code Generator for Full-Stack Web Development Bootcamp</h4>
      <p>&copy; 2025 MFT</p>
  </div>
`

const urlInput = document.querySelector('#urlInput')
const generateBtn = document.querySelector('#generateBtn')
const qrCanvas = document.querySelector('#qrCanvas')
const errorDiv = document.querySelector('#error')

generateBtn.addEventListener('click', generateQRCode)
urlInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    generateQRCode()
  }
})

function generateQRCode() {
  const url = urlInput.value.trim()
  
  if (!url) {
    showError('Please enter a URL or text')
    return
  }

  QRCode.toCanvas(qrCanvas, url, {
    width: 300,
    margin: 2,
    color: {
      dark: '#000000',
      light: '#ffffff'
    }
  }, (error) => {
    if (error) {
      showError('Error generating QR code')
      console.error(error)
    } else {
      errorDiv.textContent = ''
      qrCanvas.style.display = 'block'
    }
  })
}

function showError(message) {
  errorDiv.textContent = message
  qrCanvas.style.display = 'none'
}
