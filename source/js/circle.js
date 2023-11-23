const circle = document.createElement("div");
document.body.appendChild(circle);
const header = document.querySelector("header");
circle.classList = ["circle"];
document.body.insertBefore(circle, header);
const radius = circle.getBoundingClientRect();

// circle.getClientRects();
window.addEventListener("mousemove", (e) => {
  //   circle.style.transform = `translate(${e.clientX - 20}px, ${
  //     e.clientY - 20
  //   }px)`;

  circle.style.top = `${e.clientY - radius / 2}px`;
  circle.style.left = `${e.clientX - radius / 2}px`;
  //   console.log(`translate(${e.clientX}, ${e.clientY})`);
});
// window.addEventListener("mouseleave", (e) => {
//   circle.style.opacity = 0;
// });
// window.addEventListener("mouseenter", (e) => {
//   circle.style.opacity = 255;
// });
