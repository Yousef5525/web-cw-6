// هنا سوف تنشئ دالة calculate
function calculate() {
  let weight = document.getElementById(`weight`).value;
  let height = document.getElementById(`height`).value;

  let BMI = weight / (height * height);
  if (BMI < 18.5) {
    status = `انت تعاني من نقص في الوزن`;
  } else if (BMI > 18.5 && BMI < 25) {
    status = `وزن صحي`;
  }

  BMI = BMI.toFixed[2];
  document.getElementById(`result`).innerHTML = BMI;
  document.getElementsByClassName(`comment`)[0].innerHTML = status;
}
