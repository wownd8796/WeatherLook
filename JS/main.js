window.addEventListener("load", () => {
  //   console.log("test");
  const mainBox = document.querySelector(".mainBox");
  setTimeout(() => {
    mainBox.classList.add("animate_fadeIn");
    mainBox.style.opacity = 1;
  }, 500);
});
