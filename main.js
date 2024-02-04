let fullName = document.querySelector("div>input.fullname");
let father = document.querySelector("div>input.father");
let degree = document.querySelector("div>input.degree");
let gender = document.querySelector("div.gender");
let genderValue;
let phone = document.querySelector("div>input.phone");
let month = document.querySelector("div>input.month");
let year = document.querySelector("div>input.year");
let email = document.querySelector("div>input.email");
let city = document.querySelector("div>input.city");
let submit = document.querySelector("button");
let h1 = document.querySelectorAll("h1");

let shamsiM;
let shamsiY;
submit.addEventListener("click", function () {
  h1.forEach((elem) => {
    elem.style.backgroundColor = "rgb(76, 76, 170)";
    elem.style.color = "whitesmoke";
    elem.style.padding = "0 5px";
  });
  if (year.value == 1990) {
    shamsiY = 33;
  } else if (year.value == 1991) {
    shamsiY = 32;
  } else if (year.value == 1992) {
    shamsiY = 31;
  } else if (year.value == 1993) {
    shamsiY = 30;
  } else if (year.value == 1994) {
    shamsiY = 29;
  } else if (year.value == 1995) {
    shamsiY = 28;
  } else if (year.value == 1996) {
    shamsiY = 27;
  } else if (year.value == 1997) {
    shamsiY = 26;
  } else if (year.value == 1998) {
    shamsiY = 25;
  } else if (year.value == 1999) {
    shamsiY = 24;
  } else if (year.value == 2000) {
    shamsiY = 23;
  } else if (year.value == 2001) {
    shamsiY = 22;
  } else if (year.value == 2002) {
    shamsiY = 21;
  } else if (year.value == 2003) {
    shamsiY = 20;
  } else if (year.value == 2004) {
    shamsiY = 19;
  } else if (year.value == 2005) {
    shamsiY = 18;
  } else if (year.value == 2006) {
    shamsiY = 17;
  } else if (year.value == 2007) {
    shamsiY = 16;
  } else if (year.value == 2008) {
    shamsiY = 15;
  } else if (year.value == 2009) {
    shamsiY = 14;
  } else if (year.value == 2010) {
    shamsiY = 13;
  } else {
    alert("Choose Date within 1990-2010");
  }
  if (month.value == 1) {
    shamsiM = 7;
  } else if (month.value == 2) {
    shamsiM = 8;
  } else if (month.value == 3) {
    shamsiM = 9;
  } else if (month.value == 4) {
    shamsiM = 10;
  } else if (month.value == 5) {
    shamsiM = 11;
  } else if (month.value == 6) {
    shamsiM = 12;
  } else if (month.value == 7) {
    shamsiM = 1;
  } else if (month.value == 8) {
    shamsiM = 2;
  } else if (month.value == 9) {
    shamsiM = 3;
  } else if (month.value == 10) {
    shamsiM = 4;
  } else if (month.value == 11) {
    shamsiM = 5;
  } else if (month.value == 12) {
    shamsiM = 6;
  } else {
    alert("Choose Month within 1-12");
  }
  if (document.querySelector("#male").checked) {
    genderValue=document.querySelector("#male").value
  }else if (document.querySelector("#female").checked) {
    genderValue=document.querySelector("#female").value
  }else {
    alert("Select a gender");
  }
  document.querySelector("h1.fullname").innerHTML = fullName.value;
  document.querySelector("h1.father").innerHTML = father.value;
  document.querySelector("h1.degree").innerHTML = degree.value;
  document.querySelector("h1.gender").innerHTML = genderValue;
  document.querySelector("h1.phone").innerHTML = phone.value;
  document.querySelector("h1.email").innerHTML = email.value;
  document.querySelector("h1.city").innerHTML = city.value;
  document.querySelector("h1.year").innerHTML = `Years: ${shamsiY}`;
  document.querySelector("h1.month").innerHTML = `Months: ${shamsiM}`;
});
