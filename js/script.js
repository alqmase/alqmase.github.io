/* unefficient scroll tracking module */
const sections = document.querySelectorAll("section[id]");
const navLi = document.querySelectorAll("nav ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    var hr=li.firstElementChild.href;
    if (hr.split("#")[1] == current) {
      li.classList.add("active");
    }
  });
};


