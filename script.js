const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const bmi = weight / height ** 2;
  alert(`Your BMI is ${bmi} and  ${fitness(bmi)}`);
});

const fitness = function (bmi) {
  if (bmi < 18.5) {
    return "You are underweight";
  } else if (bmi > 18.5 && bmi < 24.9) {
    return "You are normal weight";
  } else {
    return "You are over wieght";
  }
};
