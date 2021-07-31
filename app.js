let count = 0;
let countEl = document.getElementById("count-el")
let overEl = document.getElementById("over-el")


function ball() {
  count +=1;
  countEl.textContent = count;
}

function over() {
  let totalBall = count + " / "
  overEl.textContent += totalBall;
  countEl.textContent = 0;
  count = 0;

}
