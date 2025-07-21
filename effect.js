const liWithDropdown = document.querySelector(".thumb li:has(.dropdown)");
const dropdown = liWithDropdown.querySelector(".dropdown");
let hideTimeout;

liWithDropdown.addEventListener("mouseenter", () => {
  clearTimeout(hideTimeout);
  dropdown.style.display = "flex";
  dropdown.style.flexDirection = "column";
  dropdown.style.gap = "10px";
});

liWithDropdown.addEventListener("mouseleave", () => {
  hideTimeout = setTimeout(() => {
    dropdown.style.display = "none";
  }, 4000); 
});

dropdown.addEventListener("mouseenter", () => {
  clearTimeout(hideTimeout);
});

dropdown.addEventListener("mouseleave", () => {
  hideTimeout = setTimeout(() => {
    dropdown.style.display = "none";
  }, 4000);
});
