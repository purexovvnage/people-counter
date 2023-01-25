const btnEl = document.getElementById('increment-btn')
btnEl.addEventListener('click',increment)
let count = 0
document.getElementById("count-el").innerHTML = count



function increment() {
  console.log(this)
  count += 1
  document.getElementById("count-el").innerHTML = count
}
