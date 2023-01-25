const btnEl = document.getElementById('increment-btn')
const saveBtn = document.getElementById('save-btn')
const saveEl = document.getElementById('save-el')

btnEl.addEventListener('click',increment)
saveBtn.addEventListener('click',save)

let count = 0
document.getElementById("count-el").textContent = count



function increment() {
  count += 1
  document.getElementById("count-el").textContent = count
}

function save() {
  const saved = count + " - "
  saveEl.textContent += saved
  count = 0
  document.getElementById("count-el").textContent = count
}
