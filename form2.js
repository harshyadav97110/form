function validateForm(e) {
  console.log(e);
  e.preventDefault();
  let fname = document.getElementById("fname").value;
  let n=document.getElementById("fname")value;
  if (fname === "") {
    alert("please enter the first name");
    return false;
  }
  let lname = document.getElementById("lname").value;

  if (lname === "") {
    alert("please enter the last name");
  }
  let slect = document.getElementById("slect").value;
  if (slect === "") {
    alert("please select the country");
  }

  document.addEventListener("domContentLoaded", function()

  return true;
}

const latestDate = new Date();
const maxDate = latestDate.toISOString().split("T")[0];
document.getElementById("date").max = maxDate;

let page = 0;

document.getElementById("form").addEventListener("submit", async function (e) {
  e.preventDefault();

  // 🔹 Show form data
  let resultDiv = document.getElementById("result");

  // 🔹 API Call (10 items each click)
  let res = await fetch(
    `https://api.escuelajs.co/api/v1/products?limit=10&offset=${page * 10}`
  );

  let data = await res.json();
z
  let output = "";
  data.forEach((item) => {
    output += `<p>${item.title}</p>`;
  });

  resultDiv.innerHTML += output;

  page++; // next page
});