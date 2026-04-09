import {zanpakutoData} from "./data.js"
const grid = document.getElementById("weapon-grid")

function displayZanpakuto() {
    zanpakutoData.forEach(item => {
        const card = document.createElement('div')
        card.className = "card"
        card.innerHTML = `
            <div class="card-image" style="background-image: url('${item.image}')"></div>
            <div class="card-content">
            <h3>${item.name}</h3>
            <p><strong>Owner:</strong> ${item.owner}</p>
            <p><em>"${item.release}... "</em></p>
            <p>${item.abillity}</p>
            <button class="bankai-btn" onclick ="activateBankai('${item.bankai}', '${item.color}')">Bankai!</button>
            </div>
            `
        grid.appendChild(card)
    })
}

window.activateBankai = function(name, color){
const overlay = document.getElementById('bankai-overlay')
const bankaiText = document.getElementById('bankai-text')
if (overlay && bankaiText) {
    bankaiText.innerText = name;
    bankaiText.style.color = color;
    bankaiText.style.textShadow = `0 0 30px ${color}, 0 0 60px ${color}`;
    overlay.style.boxShadow = `inset  0 0 100px ${color}`
    overlay.style.display = 'flex' 
    console.log("bankai Activated:"+ name) 
} else {
    console.error("Bankai overlay or text element not found")
}
}
 window.closeBankai = function() {
    const overlay = document.getElementById('bankai-overlay')
    if (overlay) {
        overlay.style.display = "none"
    }
 }
displayZanpakuto()