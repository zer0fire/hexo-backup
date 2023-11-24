const circle = document.createElement("div");
document.body.appendChild(circle);
const header = document.querySelector("header");
circle.classList = ["circle"];
document.body.insertBefore(circle, header);
const rect = circle.getBoundingClientRect();

// circle.getClientRects();
window.addEventListener("mousemove", (e) => {
  circle.style.top = `${e.clientY - rect.height / 2}px`;
  circle.style.left = `${e.clientX - rect.width / 2}px`;
  //   console.log(`translate(${e.clientX}, ${e.clientY})`);
});
// window.addEventListener("mouseleave", (e) => {
//   circle.style.opacity = 0;
// });
// window.addEventListener("mouseenter", (e) => {
//   circle.style.opacity = 255;
// });
