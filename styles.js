var circle = document.getElementById('circle')
var ar_one = document.getElementById('ar_one')
var ar_two = document.getElementById('ar_two')

var rotateValue = circle.style.transform
var rotateSum

ar_one.onclick = function () {
  rotateSum = rotateValue + 'rotate(-90deg)'
  circle.style.transform = rotateSum
  rotateValue = rotateSum
}

ar_two.onclick = function () {
  rotateSum = rotateValue + 'rotate(+90deg)'
  circle.style.transform = rotateSum
  rotateValue = rotateSum
}
