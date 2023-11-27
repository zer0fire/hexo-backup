const circle = document.createElement("div");
document.body.appendChild(circle);
const header = document.querySelector("header");
circle.classList = ["circle"];
document.body.insertBefore(circle, header);
const rect = circle.getBoundingClientRect();

window.addEventListener("mousemove", (e) => {
  circle.style.top = `${e.clientY - rect.height / 2}px`;
  circle.style.left = `${e.clientX - rect.width / 2}px`;
});
