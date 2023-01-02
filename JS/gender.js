let tempList = JSON.parse(localStorage.temp);
let genderValue;

window.addEventListener("load", () => {
  //   console.log("test");
  const mainBox = document.querySelector(".mainBox");
  /*   console.log(mainBox); */
  mainBox.style.opacity = 1;
});

female.addEventListener("click", () => {
  console.log("hi");
  location.href = "./selection.html";
  genderValue = female.id;
  console.log(genderValue);
  filterGender(tempList, genderValue);
});

male.addEventListener("click", () => {
  console.log("bi");
  location.href = "./selection.html";
  genderValue = male.id;
  filterGender(tempList, genderValue);
});

function filterGender(tempList, genderValue) {
  let genderList = tempList.filter((item) => item.gender == genderValue);
  console.log(genderList);
  localStorage.gender = JSON.stringify(genderList);
}
